import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const tasks = [
    { id: 1, title: 'Vaccination Day - All Cattle', date: 'Tomorrow, 9:00 AM', priority: 'high' },
    { id: 2, title: 'Feed Purchase', date: 'Feb 15, 2026', priority: 'medium' },
    { id: 3, title: 'Monthly Health Checkup', date: 'Feb 18, 2026', priority: 'low' },
];

export default function UpcomingTasksCard() {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-lg font-bold">Upcoming Activities</CardTitle>
                <Calendar className="h-4 w-4 text-gray-400" />
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto pt-4 pb-2">
                <div className="space-y-1">
                    {tasks.map((task) => (
                        <div key={task.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <Checkbox className="mt-1" />
                            <div className="flex-1">
                                <label className="text-sm font-semibold text-gray-800 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                    {task.title}
                                </label>
                                <p className="text-xs text-gray-500 mt-1.5">{task.date}</p>
                            </div>
                            {task.priority === 'high' && (
                                <span className="w-2 h-2 rounded-full bg-purple-600 mt-1.5" title="High Priority" />
                            )}
                            {task.priority === 'medium' && (
                                <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5" title="Medium Priority" />
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="pt-2 border-t px-6 py-4">
                <Button variant="ghost" className="w-full text-gray-600 hover:text-[#590156] text-sm flex items-center justify-between px-2">
                    View Calendar <ChevronRight className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
