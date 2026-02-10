import { motion } from "framer-motion"
import { Sprout, Stethoscope, Building2, MapPin } from "lucide-react"

export default function AudienceSection() {
    const roles = [
        {
            icon: Sprout,
            title: "Farmers",
            benefit: "Track your livestock and make data-driven business decisions"
        },
        {
            icon: Stethoscope,
            title: "Veterinarians",
            benefit: "Monitor animal health and treatment records across farms"
        },
        {
            icon: Building2,
            title: "District Authorities",
            benefit: "Oversee regional agricultural activities and compliance"
        },
        {
            icon: MapPin,
            title: "Province Authorities",
            benefit: "View province-wide insights and make strategic decisions"
        }
    ]

    return (
        <section id="audience" className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Who It's <span className="text-primary">For</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        StockWise serves every stakeholder in the agricultural ecosystem
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <role.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{role.title}</h3>
                            <p className="text-sm text-muted-foreground">{role.benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
