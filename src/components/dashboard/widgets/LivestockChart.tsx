import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const data = [
    { name: 'Cows', value: 120, color: '#590156' }, // Purple
    { name: 'Goats', value: 80, color: '#10B981' },  // Green
    { name: 'Chickens', value: 35, color: '#F59E0B' }, // Orange
    { name: 'Pigs', value: 13, color: '#EC4899' },   // Pink
];

export default function LivestockChart() {
    return (
        <div className="bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-bold text-gray-900 text-lg">Livestock by Type</h3>
                    <p className="text-sm text-gray-500">Current herd composition</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                        />
                        <Tooltip
                            cursor={{ fill: '#F3E8F3', opacity: 0.5 }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
