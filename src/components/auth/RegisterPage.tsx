import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import SuccessScreen from './SuccessScreen';
import type { RegistrationFormData } from './types';

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<RegistrationFormData>({
        // Step 1
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: '',
        location: {
            province: '',
            district: '',
            sector: '',
            cell: ''
        },
        // Step 2 - Dynamic
        farmName: '',
        livestockTypes: [],
        livestockCount: '',
        farmSize: '',
        licenseNumber: '',
        assignedDistrict: '',
        uploadedFile: null,
        staffCode: '',
        officeName: '',
        officialEmail: '',
        officialId: '',
        additionalNotes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const updateFormData = (data: Partial<RegistrationFormData>) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const handleSubmit = async () => {
        // Simulate API call
        console.log('Submitting Registration:', formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <SuccessScreen role={formData.role} />;
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#590156]">
                    Create Account
                </h2>
                <p className="text-muted-foreground">
                    Join Tradewise to access smart agricultural insights
                </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${step >= i
                                ? 'border-[#590156] bg-[#590156] text-white'
                                : 'border-gray-300 text-gray-500'
                                }`}
                        >
                            {i}
                        </div>
                        {i < 3 && (
                            <div
                                className={`h-1 w-12 ml-4 ${step > i ? 'bg-[#590156]' : 'bg-gray-200'
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {step === 1 && (
                        <StepOne
                            formData={formData}
                            updateFormData={updateFormData}
                            onNext={nextStep}
                        />
                    )}
                    {step === 2 && (
                        <StepTwo
                            formData={formData}
                            updateFormData={updateFormData}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <StepThree
                            formData={formData}
                            onSubmit={handleSubmit}
                            onBack={prevStep}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            <div className="text-center text-sm mt-6">
                Already have an account?{" "}
                <Link to="/auth/login" className="font-semibold text-[#590156] hover:underline">
                    Sign in
                </Link>
            </div>
        </div>
    );
}
