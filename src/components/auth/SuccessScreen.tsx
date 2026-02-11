import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuccessScreen({ role }: { role: string }) {
    const getSuccessMessage = () => {
        switch (role) {
            case 'farmer':
                return "Please check your email to verify your account.";
            case 'veterinarian':
                return "Your account is pending administrative approval.";
            case 'district_authority':
            case 'province_authority':
                return "Your government access request has been submitted for review.";
            default:
                return "Account created successfully.";
        }
    };

    return (
        <div className="text-center space-y-6 py-8">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex justify-center"
            >
                <div className="rounded-full bg-green-100 p-6">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                </div>
            </motion.div>

            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#590156]">Account Created!</h2>
                <p className="text-lg text-muted-foreground max-w-xs mx-auto">
                    {getSuccessMessage()}
                </p>
            </div>

            <div className="pt-8">
                <Link to="/auth/login">
                    <Button className="w-full bg-[#590156] hover:bg-[#4a0148]" size="lg">
                        Back to Login
                    </Button>
                </Link>
            </div>
        </div>
    );
}
