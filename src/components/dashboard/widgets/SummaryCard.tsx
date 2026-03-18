import type { LucideIcon } from 'lucide-react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SummaryCardProps {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
    iconColor: string; // e.g., "text-purple-600"
    iconBg: string; // e.g., "bg-purple-100"
    accentColor?: string; // Kept for prop compatibility but will be subtle
}

export default function SummaryCard({
    label,
    value,
    trend,
    trendUp,
    icon: Icon,
    iconColor,
    iconBg,
}: SummaryCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                    {label}
                </CardTitle>
                <div className={cn("p-2 rounded-lg", iconBg)}>
                    <Icon className={cn("h-4 w-4", iconColor)} />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <p className={cn(
                    "flex items-center text-xs mt-1",
                    trendUp ? "text-green-600" : "text-red-600"
                )}>
                    {trendUp ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    <span className="font-medium mr-1">{trend}</span>
                    <span className="text-gray-400">vs last month</span>
                </p>
            </CardContent>
        </Card>
    );
}
