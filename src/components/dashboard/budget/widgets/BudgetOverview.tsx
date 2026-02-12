import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const expenseData = [
    { name: 'Feed', value: 450, color: '#8884d8' },
    { name: 'Medical', value: 300, color: '#82ca9d' },
    { name: 'Equipment', value: 150, color: '#ffc658' },
    { name: 'Labor', value: 200, color: '#ff8042' },
    { name: 'Other', value: 100, color: '#a4de6c' },
];

const monthlyData = [
    { name: 'Jan', expenses: 1000 },
    { name: 'Feb', expenses: 1200 },
    { name: 'Mar', expenses: 900 },
    { name: 'Apr', expenses: 1500 },
    { name: 'May', expenses: 1100 },
    { name: 'Jun', expenses: 1300 },
];

export default function BudgetOverview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
                <CardHeader>
                    <CardTitle>Expense Distribution</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={expenseData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {expenseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Monthly Trends</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="expenses" fill="#590156" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
