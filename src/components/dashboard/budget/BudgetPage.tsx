import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import BudgetOverview from './widgets/BudgetOverview';
import ExpenseList from './ExpenseList';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-react';
import AddExpenseModal from './modals/AddExpenseModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BudgetPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddExpense = (data: any) => {
        console.log("New expense added:", data);
        // Add to state/backend
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Budget & Expenses</h2>
                        <p className="text-gray-500 mt-1">
                            Manage farm finances, track expenses, and view budget reports.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" /> Export Report
                        </Button>
                        <Button
                            onClick={() => setIsAddModalOpen(true)}
                            className="bg-[#590156] hover:bg-[#450142] text-white"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Expense
                        </Button>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Expenses (Mo)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800">$1,234.00</div>
                            <p className="text-xs text-red-500 mt-1">+12% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Budget Remaining</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800">$766.00</div>
                            <p className="text-xs text-gray-500 mt-1">of $2,000.00 monthly budget</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Top Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800">Feed</div>
                            <p className="text-xs text-gray-500 mt-1">45% of total expenses</p>
                        </CardContent>
                    </Card>
                </div>

                <BudgetOverview />

                <ExpenseList />

                <AddExpenseModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAdd={handleAddExpense}
                />
            </div>
        </DashboardLayout>
    );
}
