import { motion } from "framer-motion"
import { Database, TrendingUp, Users, Shield } from "lucide-react"

export default function AboutSection() {
    const features = [
        {
            icon: Database,
            title: "Smart Tracking",
            description: "Monitor trade and stock data in real-time with precision"
        },
        {
            icon: TrendingUp,
            title: "Data-Driven Decisions",
            description: "Make informed choices based on comprehensive analytics"
        },
        {
            icon: Users,
            title: "Cross-Stakeholder",
            description: "Connect farmers, vets, and authorities seamlessly"
        },
        {
            icon: Shield,
            title: "Full Transparency",
            description: "Build trust with verified, accessible data for all"
        }
    ]

    return (
        <section id="about" className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        What is <span className="text-primary">StockWise</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A comprehensive platform designed to revolutionize agricultural trade and stock management
                        through intelligent tracking, powerful insights, and transparent data sharing.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:scale-110">
                                <feature.icon className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
