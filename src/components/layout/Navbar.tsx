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
                        <Button variant="outline" size="sm" className="rounded-full">
                            Send us an Email
                        </Button>
                        <Button size="sm" className="rounded-full">
                            Get Started
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
