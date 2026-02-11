import type { LucideIcon } from 'lucide-react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SummaryCardProps {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
    iconColor: string; // e.g., "text-purple-600"
    iconBg: string; // e.g., "bg-purple-100"
    accentColor: string; // e.g., "from-purple-500 to-pink-500"
}

export default function SummaryCard({
    label,
    value,
    trend,
    trendUp,
    icon: Icon,
    iconColor,
    iconBg,
    accentColor,
}: SummaryCardProps) {
    return (
        <div className="relative overflow-hidden bg-white rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            {/* Gradient Accent on Right Edge */}
            <div className={cn("absolute top-0 right-0 w-2 h-full bg-gradient-to-b opacity-80", accentColor)} />

            <div className="flex justify-between items-start mb-4">
                <div className={cn("p-3 rounded-full", iconBg)}>
                    <Icon className={cn("h-6 w-6", iconColor)} />
                </div>
                {/* Decorative subtle circle */}
                <div className={cn("absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5 bg-gradient-to-br", accentColor)} />
            </div>

            <div className="space-y-1">
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
                <p className="text-sm font-medium text-gray-500">{label}</p>
            </div>

            <div className="mt-4 flex items-center gap-1.5">
                <div className={cn(
                    "flex items-center text-xs font-bold px-2 py-0.5 rounded-full",
                    trendUp ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
                )}>
                    {trendUp ? <ArrowUp className="h-3 w-3 mr-0.5" /> : <ArrowDown className="h-3 w-3 mr-0.5" />}
                    {trend}
                </div>
                <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
        </div>
    );
}
