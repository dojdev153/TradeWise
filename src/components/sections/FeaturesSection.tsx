import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, FileText, Users, Bell } from "lucide-react"

export default function FeaturesSection() {
    const features = [
        {
            icon: BarChart3,
            title: "Trade & Stock Tracking",
            description: "Real-time monitoring of livestock movements, sales, and inventory across all locations"
        },
        {
            icon: LineChart,
            title: "Analytics & Insights",
            description: "Powerful data visualization and trend analysis to understand market dynamics"
        },
        {
            icon: FileText,
            title: "Planning & Forecasting",
            description: "Predictive tools to help plan breeding, sales, and resource allocation"
        },
        {
            icon: Users,
            title: "Role-Based Dashboards",
            description: "Customized views for farmers, vets, district, and provincial authorities"
        },
        {
            icon: Bell,
            title: "Reports for Authorities",
            description: "Automated compliance reports and alerts for regulatory oversight"
        }
    ]

    return (
        <section id="features" className="bg-gradient-to-b from-purple-50/50 to-white py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Key <span className="text-primary">Features</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to manage agricultural trade and stock with confidence
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                                <CardHeader>
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
