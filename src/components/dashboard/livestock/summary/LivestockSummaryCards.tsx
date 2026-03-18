import { Beef, Tag, Heart, AlertCircle, TrendingUp } from 'lucide-react';
import type { LivestockStats } from '@/types/livestock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LivestockSummaryCardsProps {
    stats: LivestockStats;
    onNeedAttentionClick: () => void;
}

export default function LivestockSummaryCards({ stats, onNeedAttentionClick }: LivestockSummaryCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Total Animals Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Animals</CardTitle>
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <Beef className="h-4 w-4 text-purple-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stats.totalAnimals}</div>
                    <p className="flex items-center text-xs text-green-600 mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span className="font-medium mr-1">+12</span>
                        <span className="text-gray-400">this month</span>
                    </p>
                </CardContent>
            </Card>

            {/* Livestock Types Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Animal Types</CardTitle>
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <Tag className="h-4 w-4 text-blue-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stats.animalTypes}</div>
                    <p className="text-xs text-gray-400 mt-1">Cows, Goats, Chickens, Pigs</p>
                </CardContent>
            </Card>

            {/* Healthy Animals Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Healthy</CardTitle>
                    <div className="p-2 bg-green-100 rounded-lg">
                        <Heart className="h-4 w-4 text-green-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stats.healthyCount}</div>
                    <p className="text-xs text-green-600 font-medium mt-1">
                        {((stats.healthyCount / stats.totalAnimals) * 100).toFixed(1)}% of total
                    </p>
                </CardContent>
            </Card>

            {/* Need Attention Card (Clickable) */}
            <Card
                className="cursor-pointer hover:border-red-200 transition-colors"
                onClick={onNeedAttentionClick}
            >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Need Care</CardTitle>
                    <div className="p-2 bg-red-100 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stats.needAttentionCount}</div>
                    <p className="text-xs text-gray-400 mt-1">Sick or due for vaccination</p>
                </CardContent>
            </Card>
        </div>
    );
}
