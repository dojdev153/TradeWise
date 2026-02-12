import { Activity, Syringe, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HealthStatsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                        Health Score
                    </CardTitle>
                    <Activity className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-800">96%</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +2% from last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                        Active Treatments
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-800">5</div>
                    <p className="text-xs text-gray-500 mt-1">
                        3 requiring attention today
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                        Upcoming Vaccines
                    </CardTitle>
                    <Syringe className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-800">12</div>
                    <p className="text-xs text-gray-500 mt-1">
                        Due within next 14 days
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                        Vet Expenses (Mo)
                    </CardTitle>
                    <div className="font-bold text-purple-600">$</div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-800">$450</div>
                    <p className="text-xs text-gray-500 mt-1">
                        -15% vs previous month
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
