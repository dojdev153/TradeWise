import { Plus, Archive, Calculator, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuickActionsCard() {
    return (
        <div className="relative overflow-hidden rounded-[20px] p-6 shadow-xl bg-gradient-to-br from-[#590156] to-[#7B2D7A] text-white">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold">Quick Actions</h3>
                        <div className="bg-white/20 p-2 rounded-full">
                            <Plus className="h-5 w-5 text-white" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Button
                            variant="secondary"
                            className="w-full justify-start bg-white/90 hover:bg-white text-[#590156] font-semibold border-none"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Livestock
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                            <Archive className="mr-2 h-4 w-4" /> Record Health
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                            <Calculator className="mr-2 h-4 w-4" /> Add Expense
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                            <CalendarCheck className="mr-2 h-4 w-4" /> Schedule Task
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
