import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { Label } from '@/components/ui/label';

export default function LoginPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#590156]">Welcome Back</h2>
                <p className="text-muted-foreground">
                    Enter your credentials to access your account
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="name@example.com" type="email" required />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/auth/forgot-password" className="text-sm font-medium text-[#590156] hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <Input id="password" type="password" required />
                </div>

                <Button className="w-full bg-[#590156] hover:bg-[#4a0148]">
                    Sign In
                </Button>
            </div>

            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/auth/register" className="font-semibold text-[#590156] hover:underline">
                    Create an account
                </Link>
            </div>
        </div>
    );
}
