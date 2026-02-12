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
import { MoreHorizontal, AlertTriangle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


// Mock data
const mockInventory = [
    { id: "inv_1", name: "Cattle Feed (Organic)", category: "Feed", quantity: 45, unit: "Bags", minLevel: 10, status: "In Stock" },
    { id: "inv_2", name: "Antibiotics (Penicillin)", category: "Medicine", quantity: 5, unit: "Vials", minLevel: 10, status: "Low Stock" },
    { id: "inv_3", name: "Fencing Wire", category: "Equipment", quantity: 200, unit: "Meters", minLevel: 50, status: "In Stock" },
    { id: "inv_4", name: "Vitamin Supplements", category: "Feed", quantity: 2, unit: "Bottles", minLevel: 5, status: "Critical" },
    { id: "inv_5", name: "Milking Pails", category: "Equipment", quantity: 12, unit: "Units", minLevel: 10, status: "In Stock" },
];

export default function InventoryTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");

    const filteredInventory = mockInventory.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center border-b justify-between">
                <Input
                    placeholder="Search inventory..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Feed">Feed</SelectItem>
                        <SelectItem value="Medicine">Medicine</SelectItem>
                        <SelectItem value="Equipment">Equipment</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredInventory.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    {item.status === 'Critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                                    {item.name}
                                </div>
                            </TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.quantity} {item.unit}</TableCell>
                            <TableCell>
                                <Badge
                                    variant={item.status === 'In Stock' ? 'outline' : 'destructive'}
                                    className={
                                        item.status === 'In Stock' ? 'bg-green-50 text-green-700 hover:bg-green-50 border-green-200' :
                                            item.status === 'Low Stock' ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-yellow-200' :
                                                'bg-red-50 text-red-700 hover:bg-red-50 border-red-200'
                                    }
                                >
                                    {item.status}
                                </Badge>
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
                                        <DropdownMenuItem>Update Stock</DropdownMenuItem>
                                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600">Remove Item</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                    {filteredInventory.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                No items found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
