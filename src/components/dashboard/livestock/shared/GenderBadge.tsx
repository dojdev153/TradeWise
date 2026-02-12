import type { Gender } from '@/types/livestock';
import { cn } from '@/lib/utils';

interface GenderBadgeProps {
    gender: Gender;
}

export default function GenderBadge({ gender }: GenderBadgeProps) {
    const isMale = gender === 'Male';

    return (
        <span className={cn(
            'inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full',
            isMale ? 'bg-blue-50 text-blue-700' : 'bg-pink-50 text-pink-700'
        )}>
            {gender}
        </span>
    );
}
