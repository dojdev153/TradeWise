import { Activity, Plus, ShoppingBag, FileText } from 'lucide-react';

const activities = [
    { id: 1, text: 'Added 5 new goats to Herd B', time: '2 hours ago', icon: Plus, bg: 'bg-green-100', color: 'text-green-600' },
    { id: 2, text: 'Recorded vaccination for Cow #C123', time: 'Yesterday', icon: Activity, bg: 'bg-blue-100', color: 'text-blue-600' },
    { id: 3, text: 'Updated farm budget for Q1', time: '2 days ago', bg: 'bg-purple-100', icon: FileText, color: 'text-purple-600' },
    { id: 4, text: 'Purchased 500kg of feed', time: '3 days ago', bg: 'bg-orange-100', icon: ShoppingBag, color: 'text-orange-600' },
];

export default function RecentActivityCard() {
    return (
        <div className="bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 h-full">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Recent Activity</h3>

            <div className="relative space-y-8 pl-2">
                {/* Vertical Line */}
                <div className="absolute top-2 left-[19px] bottom-2 w-0.5 bg-gray-100" />

                {activities.map((item) => (
                    <div key={item.id} className="relative flex items-center gap-4">
                        {/* Dot / Icon */}
                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${item.bg}`}>
                            <item.icon className={`h-4 w-4 ${item.color}`} />
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">{item.text}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
