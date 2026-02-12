import type { AnimalType } from '@/types/livestock';
import { Beef, Rabbit, Bird, PiggyBank, Flower2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimalTypeIconProps {
    type: AnimalType;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function AnimalTypeIcon({ type, size = 'md', className }: AnimalTypeIconProps) {
    const iconConfig = {
        'Cow': { icon: Beef, color: 'text-purple-600', bg: 'bg-purple-100' },
        'Goat': { icon: Rabbit, color: 'text-green-600', bg: 'bg-green-100' },
        'Chicken': { icon: Bird, color: 'text-yellow-600', bg: 'bg-yellow-100' },
        'Pig': { icon: PiggyBank, color: 'text-pink-600', bg: 'bg-pink-100' },
        'Sheep': { icon: Flower2, color: 'text-blue-600', bg: 'bg-blue-100' }
    };

    const sizeMap = {
        'sm': 'h-4 w-4',
        'md': 'h-5 w-5',
        'lg': 'h-6 w-6'
    };

    const config = iconConfig[type];
    const Icon = config.icon;

    return (
        <div className={cn('rounded-full p-2', config.bg, className)}>
            <Icon className={cn(sizeMap[size], config.color)} />
        </div>
    );
}
