import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon, List } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import { cn } from '@/lib/utils';
import TaskCreationModal from './modals/TaskCreationModal';

// Mock data
const mockTasks = [
    { id: 1, title: 'Vaccination Round 1', date: new Date().toISOString().split('T')[0], priority: 'High', category: 'Health' },
    { id: 2, title: 'Order Feed', date: format(new Date(new Date().setDate(new Date().getDate() + 2)), 'yyyy-MM-dd'), priority: 'Medium', category: 'Feeding' },
    { id: 3, title: 'Fence Repair', date: format(new Date(new Date().setDate(new Date().getDate() + 5)), 'yyyy-MM-dd'), priority: 'Low', category: 'Maintenance' },
];

export default function FarmPlannerPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const goToToday = () => setCurrentDate(new Date());

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate),
    });

    const handleAddTask = (data: any) => {
        console.log("New task:", data);
        // Add to state/backend
    };

    const getTasksForDate = (date: Date) => {
        return mockTasks.filter(task => isSameDay(new Date(task.date), date));
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Farm Planner</h2>
                        <p className="text-gray-500 mt-1">
                            Schedule tasks, set reminders, and manage daily operations.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-white border rounded-md flex p-1 mr-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setViewMode('calendar')}
                                className={cn("h-8 px-2", viewMode === 'calendar' ? "bg-gray-100 text-[#590156]" : "text-gray-500")}
                            >
                                <CalendarIcon className="h-4 w-4 mr-1" /> Calendar
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setViewMode('list')}
                                className={cn("h-8 px-2", viewMode === 'list' ? "bg-gray-100 text-[#590156]" : "text-gray-500")}
                            >
                                <List className="h-4 w-4 mr-1" /> List
                            </Button>
                        </div>
                        <Button
                            onClick={() => setIsTaskModalOpen(true)}
                            className="bg-[#590156] hover:bg-[#450142] text-white"
                        >
                            <Plus className="mr-2 h-4 w-4" /> New Task
                        </Button>
                    </div>
                </div>

                {viewMode === 'calendar' ? (
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                            <CardTitle className="text-xl font-semibold">
                                {format(currentDate, 'MMMM yyyy')}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" onClick={prevMonth}>
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" onClick={goToToday}>Today</Button>
                                <Button variant="outline" size="icon" onClick={nextMonth}>
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                    <div key={day} className="bg-gray-50 py-2 text-center text-sm font-semibold text-gray-700">
                                        {day}
                                    </div>
                                ))}
                                {daysInMonth.map((day) => {
                                    const tasks = getTasksForDate(day);
                                    return (
                                        <div
                                            key={day.toString()}
                                            className={cn(
                                                "min-h-[120px] bg-white p-2 relative group hover:bg-gray-50 transition-colors",
                                                !isSameMonth(day, currentDate) && "bg-gray-50 text-gray-400",
                                                isToday(day) && "bg-purple-50"
                                            )}
                                        >
                                            <time
                                                dateTime={format(day, 'yyyy-MM-dd')}
                                                className={cn(
                                                    "flex h-6 w-6 items-center justify-center rounded-full text-sm",
                                                    isToday(day) && "bg-[#590156] text-white font-semibold"
                                                )}
                                            >
                                                {format(day, 'd')}
                                            </time>
                                            <div className="mt-2 space-y-1">
                                                {tasks.map((task) => (
                                                    <div
                                                        key={task.id}
                                                        className={cn(
                                                            "px-2 py-1 text-xs rounded-md truncate cursor-pointer",
                                                            task.priority === 'High' ? "bg-red-100 text-red-800" :
                                                                task.priority === 'Medium' ? "bg-blue-100 text-blue-800" :
                                                                    "bg-green-100 text-green-800"
                                                        )}
                                                    >
                                                        {task.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {mockTasks.map((task) => (
                            <Card key={task.id}>
                                <CardContent className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-2 h-12 rounded-full",
                                            task.priority === 'High' ? "bg-red-500" :
                                                task.priority === 'Medium' ? "bg-blue-500" :
                                                    "bg-green-500"
                                        )} />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{task.title}</h3>
                                            <p className="text-sm text-gray-500">{task.date} • {task.category}</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">Mark Complete</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                <TaskCreationModal
                    isOpen={isTaskModalOpen}
                    onClose={() => setIsTaskModalOpen(false)}
                    onAdd={handleAddTask}
                />
            </div>
        </DashboardLayout>
    );
}
