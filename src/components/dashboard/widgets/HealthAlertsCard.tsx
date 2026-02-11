import { AlertTriangle, Info, Syringe, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const alerts = [
    { id: 1, type: 'critical', message: 'Cow #A234 - Fever detected', time: 'Yesterday', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 2, type: 'warning', message: 'Goat #G102 - Vaccination due', time: 'Today', icon: Syringe, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 3, type: 'info', message: 'Chicken Coop - Low feed alert', time: '2h ago', icon: Info, color: 'text-blue-600', bg: 'bg-blue-50' },
];

export default function HealthAlertsCard() {
    return (
        <div className="bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-lg">Health Alerts</h3>
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </div>

            <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className={`p-2 rounded-full flex-shrink-0 ${alert.bg}`}>
                            <alert.icon className={`h-5 w-5 ${alert.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800 line-clamp-1">{alert.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-red-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-gray-50">
                <Button variant="ghost" className="w-full text-[#590156] font-medium hover:bg-[#F3E8F3]">
                    View All Alerts
                </Button>
            </div>
        </div>
    );
}
