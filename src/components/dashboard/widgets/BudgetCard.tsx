import { MoreVertical, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BudgetCard() {
    // Mock data
    const percentage = 76;
    const radius = 70;
    const stroke = 12;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 relative overflow-hidden h-full">
            {/* Right Accent */}
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-20" />

            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Monthly Budget</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </div>

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

            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-center text-xs font-medium text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>On track +12% vs last month</span>
            </div>
        </div>
    );
}
