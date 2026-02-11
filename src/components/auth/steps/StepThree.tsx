import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { RegistrationFormData } from '../types';

interface StepThreeProps {
    formData: RegistrationFormData;
    onSubmit: () => void;
    onBack: () => void;
}

export default function StepThree({ formData, onSubmit, onBack }: StepThreeProps) {
    const renderField = (label: string, value: string | undefined) => (
        <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-sm font-medium text-gray-500">{label}</span>
            <span className="text-sm font-semibold text-gray-900 text-right">{value || '-'}</span>
        </div>
    );

    const getVerificationMessage = () => {
        switch (formData.role) {
            case 'farmer':
                return "Your account will be activated after email verification.";
            case 'veterinarian':
                return "Your account will be reviewed and approved by TradeWise administration.";
            case 'district_authority':
            case 'province_authority':
                return "Your government access request will be reviewed before activation.";
            default:
                return "Please verify your email to activate your account.";
        }
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#590156]">Review Your Details</h3>
                <p className="text-muted-foreground">Please ensure all information is correct.</p>
            </div>

            <div className="space-y-4">
                <Card>
                    <CardContent className="p-4 space-y-1">
                        <h4 className="font-semibold text-[#590156] mb-2">Personal Information</h4>
                        {renderField("Full Name", formData.fullName)}
                        {renderField("Email", formData.email)}
                        {renderField("Phone", formData.phone)}
                        {renderField("Role", formData.role.replace('_', ' ').toUpperCase())}
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 space-y-1">
                        <h4 className="font-semibold text-[#590156] mb-2">Role Specifics</h4>
                        {formData.role === 'farmer' && (
                            <>
                                {renderField("Farm Name", formData.farmName)}
                                {renderField("Livestock Count", formData.livestockCount)}
                                {renderField("Farm Size", `${formData.farmSize} Ha`)}
                            </>
                        )}
                        {formData.role === 'veterinarian' && (
                            <>
                                {renderField("License Number", formData.licenseNumber)}
                                {renderField("District", formData.location?.district)}
                                {renderField("Certificate", formData.uploadedFile ? formData.uploadedFile.name : "Pending Upload")}
                            </>
                        )}
                        {(formData.role === 'district_authority' || formData.role === 'province_authority') && (
                            <>
                                {renderField("Official ID", formData.officialId)}
                                {renderField("Staff Code", formData.staffCode)}
                                {renderField("Office", formData.officeName)}
                                {renderField("Official Email", formData.officialEmail)}
                            </>
                        )}
                        {/* Location Summary */}
                        {renderField("Province", formData.location?.province)}
                        {formData.role !== 'province_authority' && renderField("District", formData.location?.district)}
                    </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                        <p className="font-semibold">Verification Notice</p>
                        <p>{getVerificationMessage()}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <Button
                    variant="outline"
                    onClick={onBack}
                    className="w-1/3"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Button
                    onClick={onSubmit}
                    className="w-2/3 bg-[#590156] hover:bg-[#4a0148]"
                >
                    Create Account
                </Button>
            </div>
        </div>
    );
}
