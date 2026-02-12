import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, FileText } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Mock data
const mockExpenses = [
    { id: "exp_1", date: "2024-06-01", category: "Feed", description: "Organic Cattle Feed - 50 bags", amount: 450.00, status: "Paid" },
    { id: "exp_2", date: "2024-06-05", category: "Medical", description: "Vaccination batch A", amount: 300.00, status: "Paid" },
    { id: "exp_3", date: "2024-06-10", category: "Equipment", description: "New Milking Machine parts", amount: 150.00, status: "Pending" },
    { id: "exp_4", date: "2024-06-12", category: "Labor", description: "Day labor - fencing", amount: 200.00, status: "Paid" },
    { id: "exp_5", date: "2024-06-15", category: "Other", description: "Transport fees", amount: 100.00, status: "Paid" },
];

export default function ExpenseList() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredExpenses = mockExpenses.filter(expense =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-4 flex gap-4 items-center border-b">
                <Input
                    placeholder="Search expenses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Receipt</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredExpenses.map((expense) => (
                        <TableRow key={expense.id}>
                            <TableCell>{expense.date}</TableCell>
                            <TableCell>
                                <Badge variant="outline">{expense.category}</Badge>
                            </TableCell>
                            <TableCell className="font-medium">{expense.description}</TableCell>
                            <TableCell>${expense.amount.toFixed(2)}</TableCell>
                            <TableCell>
                                <Badge variant={expense.status === 'Paid' ? 'secondary' : 'default'} className={expense.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : 'bg-green-100 text-green-800 hover:bg-green-100'}>
                                    {expense.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <FileText className="h-4 w-4 text-gray-500" />
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View Details</DropdownMenuItem>
                                        <DropdownMenuItem>Edit Expense</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
