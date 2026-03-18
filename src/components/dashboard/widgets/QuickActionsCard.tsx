import { Plus, Archive, Calculator, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuickActionsCard() {
    return (
        <Card className="bg-[#590156] text-white border-none shadow-lg overflow-hidden relative">
            {/* Subtle decorative element */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

            <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-lg font-bold flex items-center justify-between">
                    Quick Actions
                    <div className="bg-white/20 p-1.5 rounded-lg">
                        <Plus className="h-4 w-4" />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 relative z-10">
                <Button
                    variant="secondary"
                    className="w-full justify-start bg-white/95 hover:bg-white text-[#590156] font-semibold border-none"
                >
                    <Plus className="mr-2 h-4 w-4" /> Add Livestock
                </Button>
                <div className="grid grid-cols-1 gap-2">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                    >
                        <Archive className="mr-2 h-4 w-4" /> Record Health
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                    >
                        <Calculator className="mr-2 h-4 w-4" /> Add Expense
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                    >
                        <CalendarCheck className="mr-2 h-4 w-4" /> Schedule Task
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
