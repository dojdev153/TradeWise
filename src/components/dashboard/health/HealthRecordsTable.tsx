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
import { MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type HealthRecord } from "@/types/livestock";
import { useState } from "react";
import { Input } from "@/components/ui/input";

// Mock data generator or types for the table
interface EnrichedHealthRecord extends HealthRecord {
    animalName: string;
    animalId: string;
    animalType: string;
}

// Temporary mock data
const mockRecords: EnrichedHealthRecord[] = [
    {
        id: "rec_001",
        date: "2024-03-10",
        animalId: "L-102",
        animalName: "Bessie",
        animalType: "Cow",
        diagnosis: "Mastitis",
        issue: "Swelling",
        treatment: "Antibiotics",
        veterinarian: "Dr. Smith",
        cost: 150,
        status: "Resolved",
        notes: "Recovered fully"
    },
    {
        id: "rec_002",
        date: "2024-03-12",
        animalId: "L-205",
        animalName: "Billy",
        animalType: "Goat",
        diagnosis: "Hoof Infection",
        issue: "Limping",
        treatment: "Cleaning & Bandage",
        veterinarian: "Dr. Jones",
        cost: 80,
        status: "Ongoing",
        notes: "Check again in 3 days"
    },
    {
        id: "rec_003",
        date: "2024-03-15",
        animalId: "L-105",
        animalName: "Daisy",
        animalType: "Cow",
        diagnosis: "Routine Checkup",
        issue: "Annual Exam",
        treatment: "None",
        veterinarian: "Dr. Smith",
        cost: 100,
        status: "Resolved",
        notes: "All healthy"
    }
];

export default function HealthRecordsTable() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRecords = mockRecords.filter(record =>
        record.animalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.animalId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-4 flex gap-4 items-center border-b">
                <Input
                    placeholder="Search records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Animal</TableHead>
                        <TableHead>Diagnosis</TableHead>
                        <TableHead>Treatment</TableHead>
                        <TableHead>Vet</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredRecords.map((record) => (
                        <TableRow key={record.id}>
                            <TableCell>{record.date}</TableCell>
                            <TableCell>
                                <div className="font-medium">{record.animalName}</div>
                                <div className="text-xs text-gray-500">{record.animalId} ({record.animalType})</div>
                            </TableCell>
                            <TableCell>{record.diagnosis}</TableCell>
                            <TableCell className="max-w-[150px] truncate" title={record.treatment}>{record.treatment}</TableCell>
                            <TableCell>{record.veterinarian}</TableCell>
                            <TableCell>${record.cost}</TableCell>
                            <TableCell>
                                <Badge variant={record.status === 'Resolved' ? 'secondary' : 'destructive'}>
                                    {record.status}
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
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>View Details</DropdownMenuItem>
                                        <DropdownMenuItem>Edit Record</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-600">Delete Record</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                    {filteredRecords.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={8} className="h-24 text-center">
                                No records found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
