import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative w-full overflow-hidden bg-white pb-0">
            <div className="container relative z-10 mx-auto px-4 pt-12 pb-48 md:px-6 md:pb-64 lg:pt-16 lg:pb-80">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Features Section */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Features
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Trade & Stock Tracking
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Analytics & Insights
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Planning & Forecasting
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Role-Based Dashboards
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Authority Reports
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Section */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Socials
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    <Facebook className="h-4 w-4" />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    <Instagram className="h-4 w-4" />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    <Twitter className="h-4 w-4" />
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#privacy" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#cookies" className="text-sm text-gray-600 transition-colors hover:text-[#590156]">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                <a href="mailto:info@tradewise.com" className="transition-colors hover:text-[#590156]">
                                    info@tradewise.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                <a href="tel:+250123456789" className="transition-colors hover:text-[#590156]">
                                    +250 123 456 789
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                <span>Kigali, Rwanda</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Large Background TradeWise Text with Gradient - Positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden leading-[0]">
                <span
                    className="block text-[100px] font-black uppercase leading-[0.85] md:text-[140px] lg:text-[200px]"
                    style={{
                        background: 'linear-gradient(to bottom, #590156 0%, transparent 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        paddingBottom: '0',
                        marginBottom: '0',
                    }}
                >
                    TradeWise
                </span>
            </div>

            {/* Copyright positioned on top of watermark */}
            <div className="absolute bottom-12 left-0 right-0 z-20 text-center md:bottom-16 lg:bottom-20">
                <p className="text-sm font-medium text-gray-700">
                    © {currentYear} TradeWise. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
