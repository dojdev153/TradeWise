import { Beef, Tag, Heart, AlertCircle, TrendingUp } from 'lucide-react';
import type { LivestockStats } from '@/types/livestock';

interface LivestockSummaryCardsProps {
    stats: LivestockStats;
    onNeedAttentionClick: () => void;
}

export default function LivestockSummaryCards({ stats, onNeedAttentionClick }: LivestockSummaryCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Total Animals Card */}
            <div className="relative overflow-hidden bg-white rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-500 opacity-80" />

                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-purple-100">
                        <Beef className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5 bg-gradient-to-br from-purple-500 to-indigo-500" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-gray-900">{stats.totalAnimals}</h3>
                    <p className="text-sm font-medium text-gray-500">Total Animals</p>
                </div>

                <div className="mt-4 flex items-center gap-1.5">
                    <div className="flex items-center text-xs font-bold px-2 py-0.5 rounded-full text-green-700 bg-green-50">
                        <TrendingUp className="h-3 w-3 mr-0.5" />
                        +12
                    </div>
                    <span className="text-xs text-gray-500">this month</span>
                </div>
            </div>

            {/* Livestock Types Card */}
            <div className="relative overflow-hidden bg-white rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500 opacity-80" />

                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-blue-100">
                        <Tag className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5 bg-gradient-to-br from-blue-500 to-cyan-500" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-gray-900">{stats.animalTypes}</h3>
                    <p className="text-sm font-medium text-gray-500">Animal Types</p>
                </div>

                <div className="mt-4">
                    <p className="text-xs text-gray-500">Cows, Goats, Chickens, Pigs</p>
                </div>
            </div>

            {/* Healthy Animals Card */}
            <div className="relative overflow-hidden bg-white rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-green-400 to-emerald-600 opacity-80" />

                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-green-100">
                        <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5 bg-gradient-to-br from-green-400 to-emerald-600" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-gray-900">{stats.healthyCount}</h3>
                    <p className="text-sm font-medium text-gray-500">Healthy</p>
                </div>

                <div className="mt-4">
                    <p className="text-xs font-bold text-green-600">
                        {((stats.healthyCount / stats.totalAnimals) * 100).toFixed(1)}% of total
                    </p>
                </div>
            </div>

            {/* Need Attention Card (Clickable) */}
            <div
                onClick={onNeedAttentionClick}
                className="relative overflow-hidden bg-white rounded-[20px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-500 opacity-80" />

                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-red-100">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5 bg-gradient-to-br from-orange-500 to-red-500" />
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-gray-900">{stats.needAttentionCount}</h3>
                    <p className="text-sm font-medium text-gray-500">Need Care</p>
                </div>

                <div className="mt-4">
                    <p className="text-xs text-gray-500">Sick or due for vaccination</p>
                </div>
            </div>
        </div>
    );
}
