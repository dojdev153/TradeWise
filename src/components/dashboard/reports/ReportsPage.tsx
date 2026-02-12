import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Printer, BarChart } from 'lucide-react';

export default function ReportsPage() {
    const reports = [
        {
            title: 'Livestock Inventory Report',
            description: 'Comprehensive list of all animals, including health status and location.',
            date: 'Generated daily',
            type: 'Inventory',
        },
        {
            title: 'Monthly Financial Summary',
            description: 'Detailed breakdown of expenses and income for the current month.',
            date: 'Generated monthly',
            type: 'Financial',
        },
        {
            title: 'Health & Vaccination Log',
            description: 'History of treatments, vaccinations, and veterinary visits.',
            date: 'Real-time',
            type: 'Health',
        },
        {
            title: 'Feed Usage Analysis',
            description: 'Tracking of feed consumption vs. projected needs.',
            date: 'Generated weekly',
            type: 'Inventory',
        },
    ];

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Reports Center</h2>
                        <p className="text-gray-500 mt-1">
                            Generate, view, and export detailed farm reports.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reports.map((report, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                <div className="space-y-1">
                                    <CardTitle className="text-lg font-semibold text-gray-800">
                                        {report.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {report.type} • {report.date}
                                    </CardDescription>
                                </div>
                                <div className="p-2 bg-purple-50 rounded-lg">
                                    <FileText className="h-5 w-5 text-[#590156]" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-4">
                                    {report.description}
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Download className="mr-2 h-4 w-4" /> PDF
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Printer className="mr-2 h-4 w-4" /> Print
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-full">
                                        <BarChart className="mr-2 h-4 w-4" /> View
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Custom Report Generator</CardTitle>
                        <CardDescription>Select parameters to generate a specific report.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="p-8 text-center text-gray-500 border-2 border-dashed rounded-lg">
                            <BarChart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                            <p>Custom report generation tools coming soon.</p>
                            <Button variant="link" className="text-[#590156]">
                                Learn more about custom reports
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
