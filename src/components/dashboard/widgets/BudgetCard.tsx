import { MoreVertical, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BudgetCard() {
    // Mock data
    const percentage = 76;
    const radius = 70;
    const stroke = 12;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <Card className="h-full relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-lg font-bold">Monthly Budget</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative">
                        {/* SVG Circle */}
                        <svg
                            height={radius * 2}
                            width={radius * 2}
                            className="transform -rotate-90"
                        >
                            <circle
                                stroke="#F3E8F3"
                                strokeWidth={stroke}
                                fill="transparent"
                                r={normalizedRadius}
                                cx={radius}
                                cy={radius}
                            />
                            <circle
                                stroke="#590156"
                                strokeWidth={stroke}
                                strokeDasharray={circumference + ' ' + circumference}
                                style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
                                strokeLinecap="round"
                                fill="transparent"
                                r={normalizedRadius}
                                cx={radius}
                                cy={radius}
                            />
                        </svg>
                        {/* Center Text */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mt-2">
                    <div>
                        <p className="text-xs text-gray-500">Spent</p>
                        <p className="text-sm font-bold text-gray-900">$1,234</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Limit</p>
                        <p className="text-sm font-bold text-gray-900">$1,620</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Left</p>
                        <p className="text-sm font-bold text-green-600">$386</p>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center text-xs font-medium text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>On track +12% vs last month</span>
                </div>
            </CardContent>
        </Card>
    );
}
