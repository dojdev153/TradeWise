import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BenefitsSection() {
    const benefits = [
        "Reliable, verified data you can trust",
        "Better planning with predictive analytics",
        "Full transparency across all stakeholders",
        "National-scale infrastructure ready",
        "Real-time monitoring and alerts",
        "Compliance-ready reporting"
    ]

    return (
        <section id="benefits" className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                            Why Choose <span className="text-primary">TradeWise</span>?
                        </h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Built for the modern agricultural sector, TradeWise combines cutting-edge technology
                            with practical, user-friendly features designed for real-world needs.
                        </p>

                        <div className="mb-8 space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                                    <span className="text-base">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button size="lg" className="font-semibold">
                            Get Started Today
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-purple-50 p-8">
                            <div className="space-y-6">
                                <div className="rounded-lg bg-white p-6 shadow-lg">
                                    <div className="mb-2 text-sm font-semibold text-muted-foreground">Total Users</div>
                                    <div className="text-3xl font-bold text-primary">12,847</div>
                                    <div className="mt-1 text-sm text-green-600">↑ 24% this month</div>
                                </div>
                                <div className="rounded-lg bg-white p-6 shadow-lg">
                                    <div className="mb-2 text-sm font-semibold text-muted-foreground">Data Points Tracked</div>
                                    <div className="text-3xl font-bold text-primary">2.4M+</div>
                                    <div className="mt-1 text-sm text-green-600">↑ Growing daily</div>
                                </div>
                                <div className="rounded-lg bg-white p-6 shadow-lg">
                                    <div className="mb-2 text-sm font-semibold text-muted-foreground">System Uptime</div>
                                    <div className="text-3xl font-bold text-primary">99.9%</div>
                                    <div className="mt-1 text-sm text-muted-foreground">Industry-leading reliability</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
