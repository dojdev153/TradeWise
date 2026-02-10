import { motion } from "framer-motion"
import { UserPlus, Database, BarChart3, Target } from "lucide-react"

export default function HowItWorksSection() {
    const steps = [
        {
            step: 1,
            icon: UserPlus,
            title: "Register & Set Location",
            description: "Create your account and specify your region or farm location"
        },
        {
            step: 2,
            icon: Database,
            title: "Record Data",
            description: "Log livestock movements, sales, and health information"
        },
        {
            step: 3,
            icon: BarChart3,
            title: "Monitor Insights",
            description: "View real-time analytics and trends on your dashboard"
        },
        {
            step: 4,
            icon: Target,
            title: "Make Informed Decisions",
            description: "Use data-driven insights to optimize your operations"
        }
    ]

    return (
        <section id="how-it-works" className="bg-gradient-to-b from-white to-purple-50/50 py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        How It <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get started in four simple steps
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line for desktop */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 lg:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex items-center gap-6 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                    <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>

                                <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                                    <step.icon className="h-8 w-8" />
                                    <div className="absolute -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-primary shadow-md">
                                        {step.step}
                                    </div>
                                </div>

                                <div className="hidden flex-1 lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
