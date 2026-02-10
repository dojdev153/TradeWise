import { motion } from 'framer-motion'
import { Check, BarChart3, MapPin, Building2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PricingSection() {
    const districtFeatures = [
        'District-wide livestock statistics',
        'Sector and cell-level summaries',
        'Data-driven planning dashboards',
        'Health and risk indicators',
        'Standard user and data capacity',
        'Exportable reports (PDF, Excel)',
    ]

    const provinceFeatures = [
        'Province-wide livestock analytics',
        'Cross-district comparison dashboards',
        'Trend analysis and forecasting',
        'Early-warning indicators',
        'Higher user and data capacity',
        'Policy-ready reports',
    ]

    return (
        <section id="pricing" className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
            {/* Dynamic Geometric Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* ribbon 1 - Primary - Spans whole screen */}
                <motion.div
                    initial={{ x: '-100%', rotate: -15 }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute top-[20%] left-[-50%] h-[200px] w-[200%] bg-[#590156] opacity-100"
                />

                {/* ribbon 2 - Layered - Spans whole screen */}
                <motion.div
                    initial={{ x: '100%', rotate: -15 }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                    className="absolute top-[35%] left-[-50%] h-[150px] w-[200%] bg-[#590156]/60 shadow-2xl"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                        Data-Driven Livestock Planning
                    </h2>
                    <p className="text-lg text-gray-600 md:text-xl">
                        TradeWise turns livestock records into reliable, aggregated insights that support planning,
                        disease prevention, and resource allocation at district and provincial levels.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    {/* District License Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card className="relative h-full border-none shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                            <CardHeader className="space-y-4 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#590156]/10">
                                        <MapPin className="h-6 w-6 text-[#590156]" />
                                    </div>
                                    <span className="rounded-full bg-[#590156]/10 px-3 py-1 text-xs font-semibold text-[#590156]">
                                        Annual District License
                                    </span>
                                </div>
                                <CardTitle className="text-2xl font-bold">District Standard</CardTitle>
                                <CardDescription className="text-base">
                                    <span className="text-3xl font-bold text-gray-900">Starting from $1,200</span>
                                    <span className="text-gray-500"> / year</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pb-8">
                                <ul className="space-y-3">
                                    {districtFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#590156]" />
                                            <span className="text-gray-600 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full bg-[#590156] text-white hover:bg-[#590156]/90 shadow-lg shadow-[#590156]/20 transition-all"
                                    size="lg"
                                >
                                    Contact Us
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>

                    {/* Province License Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="relative h-full border-none shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                            <CardHeader className="space-y-4 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#590156]/10">
                                        <Building2 className="h-6 w-6 text-[#590156]" />
                                    </div>
                                    <span className="rounded-full bg-[#590156]/10 px-3 py-1 text-xs font-semibold text-[#590156]">
                                        Annual Province License
                                    </span>
                                </div>
                                <CardTitle className="text-2xl font-bold">Province Standard</CardTitle>
                                <CardDescription className="text-base">
                                    <span className="text-3xl font-bold text-gray-900">Starting from $4,000</span>
                                    <span className="text-gray-500"> / year</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pb-8">
                                <ul className="space-y-3">
                                    {provinceFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#590156]" />
                                            <span className="text-gray-600 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full bg-[#590156] text-white hover:bg-[#590156]/90 shadow-lg shadow-[#590156]/20 transition-all"
                                    size="lg"
                                >
                                    Contact Us
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>

                {/* Privacy Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mx-auto mt-12 max-w-3xl text-center"
                >
                    <p className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-white/50 backdrop-blur-sm p-2 rounded-full inline-flex mx-auto">
                        <BarChart3 className="h-4 w-4 text-[#590156]" />
                        All insights are aggregated and anonymized. TradeWise does not share individual farm or personal data.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
