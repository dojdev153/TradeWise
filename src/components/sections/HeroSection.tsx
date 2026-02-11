import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Users, Shield } from "lucide-react"

export default function HeroSection() {
    const floatingIcons = [
        { Icon: TrendingUp, position: "top-20 left-10" },
        { Icon: BarChart3, position: "top-32 right-20" },
        { Icon: Users, position: "bottom-32 left-16" },
        { Icon: Shield, position: "bottom-20 right-16" },
    ]

    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white py-20 md:py-32">
            {/* Abstract Geometric Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* --- RIGHT SIDE (Decorative - Purple Dominant) --- */}

                {/* Large purple stripe - main focal */}
                <div
                    className="absolute top-[-10%] right-[-5%] w-[50%] h-[600px] bg-[#590156] opacity-90 z-[1] hidden md:block"
                    style={{ transform: 'rotate(-50deg)' }}
                />

                {/* Secondary purple stripe */}
                <div
                    className="absolute top-[30%] right-[10%] w-[35%] h-[400px] bg-[#590156] opacity-65 z-[2] hidden md:block"
                    style={{ transform: 'rotate(-50deg)' }}
                />

                {/* Dotted pattern overlay - Bottom Right */}
                <div
                    className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] opacity-30 z-[0] hidden md:block"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='3' height='3' fill='%239ca3af'/%3E%3C/svg%3E")`,
                        transform: 'rotate(-50deg)'
                    }}
                />

                {/* --- LEFT SIDE (Content - Subtle Gray Texture) --- */}

                {/* Primary gray stripe */}
                <div
                    className="absolute top-[10%] left-[-10%] w-[40%] h-[300px] bg-gray-200 opacity-25 z-[1]"
                    style={{ transform: 'rotate(-50deg)' }}
                />

                {/* Secondary soft gray stripe for texture */}
                <div
                    className="absolute top-[40%] left-[-20%] w-[60%] h-[200px] bg-gray-100 opacity-20 z-[0]"
                    style={{ transform: 'rotate(-50deg)' }}
                />

                {/* Bottom accent gray stripe */}
                <div
                    className="absolute bottom-[10%] left-[10%] w-[30%] h-[150px] bg-gray-200 opacity-15 z-[0]"
                    style={{ transform: 'rotate(-50deg)' }}
                />

                {/* Dotted pattern overlay - Left Side */}
                <div
                    className="absolute top-[15%] left-[-5%] w-[400px] h-[600px] opacity-30 z-[0] hidden md:block"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='3' height='3' fill='%239ca3af'/%3E%3C/svg%3E")`,
                        transform: 'rotate(45deg)'
                    }}
                />

                {/* --- MOBILE OPTIMIZATIONS --- */}
                <div
                    className="absolute top-[-5%] right-[-20%] w-[80%] h-[200px] bg-[#590156] opacity-80 z-[1] md:hidden"
                    style={{ transform: 'rotate(-45deg)' }}
                />
                <div
                    className="absolute bottom-[20%] left-[-20%] w-[60%] h-[150px] bg-gray-100 opacity-60 z-[1] md:hidden"
                    style={{ transform: 'rotate(-45deg)' }}
                />
            </div>

            <div className="container relative z-10 mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        Smart Trade & Stock Insights for{" "}
                        <span className="text-primary">Modern Agriculture</span>
                    </h1>

                    <p className="text-lg text-muted-foreground md:text-xl">
                        StockWise provides real-time tracking, data-driven insights, and transparent planning
                        for farmers, veterinarians, and authorities across the nation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="font-semibold">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold">
                            Learn More
                        </Button>
                    </div>
                </motion.div>

                {/* Right: Visual Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Floating icons in background */}
                    {floatingIcons.map(({ Icon, position }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8 + index * 0.1,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 2,
                            }}
                            className={`absolute hidden ${position} md:block`}
                        >
                            <div className="rounded-lg bg-white p-3 shadow-lg">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Main dashboard card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative rounded-xl bg-white p-6 shadow-2xl"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold">AI-Powered Analysis</h3>
                            <div className="flex items-center gap-1 text-sm text-green-600">
                                <TrendingUp className="h-4 w-4" />
                                <span>+13.2%</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                                <span className="text-sm font-medium">Trade Volume</span>
                                <span className="text-sm font-bold text-primary">15,024</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                                <span className="text-sm font-medium">Active Farmers</span>
                                <span className="text-sm font-bold text-primary">3,482</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                                <span className="text-sm font-medium">Stock Tracking</span>
                                <span className="text-sm font-bold text-primary">Real-time</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary floating card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="absolute -bottom-4 -right-4 rounded-lg bg-primary p-4 text-white shadow-xl"
                    >
                        <div className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5" />
                            <div>
                                <p className="text-xs opacity-90">Data Insights</p>
                                <p className="text-lg font-bold">99.9% Accuracy</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Trusted by section - Floating Pills */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="container relative z-10 mx-auto mt-16 flex justify-center px-4 md:px-6"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-full px-8 py-3"
                >
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-800">
                        Trusted by Agricultural Authorities Nationwide
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}
