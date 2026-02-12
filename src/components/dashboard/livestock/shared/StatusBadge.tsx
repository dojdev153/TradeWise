import type { HealthStatus } from '@/types/livestock';
import { cn } from '@/lib/utils';
import { Check, AlertTriangle, Pill, Lock } from 'lucide-react';

interface StatusBadgeProps {
    status: HealthStatus;
    size?: 'sm' | 'md';
}

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
    const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';

    const statusConfig = {
        'Healthy': {
            bg: 'bg-green-50',
            text: 'text-green-700',
            icon: Check,
            label: 'Healthy ✓'
        },
        'Sick': {
            bg: 'bg-red-50',
            text: 'text-red-700',
            icon: AlertTriangle,
            label: 'Sick ⚠️'
        },
        'Under Treatment': {
            bg: 'bg-orange-50',
            text: 'text-orange-700',
            icon: Pill,
            label: 'Treatment 💊'
        },
        'Quarantined': {
            bg: 'bg-purple-50',
            text: 'text-purple-700',
            icon: Lock,
            label: 'Quarantine 🔒'
        }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <span className={cn(
            'inline-flex items-center gap-1 font-medium rounded-md',
            config.bg,
            config.text,
            sizeClasses
        )}>
            <Icon className="h-3 w-3" />
            {config.label}
        </span>
    );
}
