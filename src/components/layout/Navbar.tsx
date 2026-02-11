import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 w-full pt-4">
            <nav className="container mx-auto rounded-full border bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center justify-between px-6 md:px-8">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-primary">StockWise</span>
                    </div>

                    <div className="hidden items-center gap-6 md:flex">
                        <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
                            Home
                        </a>
                        <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                            Features
                        </a>
                        <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                            About
                        </a>
                        <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                            Contact
                        </a>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to="/auth/login">
                            <Button variant="ghost" size="sm" className="rounded-full">
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/auth/register">
                            <Button size="sm" className="rounded-full bg-[#590156] hover:bg-[#4a0148]">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
