import { useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, Calendar } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import type { Livestock } from '@/types/livestock';
import StatusBadge from '../shared/StatusBadge';
import GenderBadge from '../shared/GenderBadge';
import AnimalTypeIcon from '../shared/AnimalTypeIcon';
import ActionButtons from '../shared/ActionButtons';
import { cn } from '@/lib/utils';

type SortField = 'id' | 'type' | 'breed' | 'age' | 'gender' | 'healthStatus' | 'location';
type SortDirection = 'asc' | 'desc' | null;

interface LivestockTableProps {
    livestock: Livestock[];
    selectedIds: string[];
    onSelectAll: (checked: boolean) => void;
    onSelectOne: (id: string, checked: boolean) => void;
    onView: (animal: Livestock) => void;
    onEdit: (animal: Livestock) => void;
    onDelete: (animal: Livestock) => void;
}

export default function LivestockTable({
    livestock,
    selectedIds,
    onSelectAll,
    onSelectOne,
    onView,
    onEdit,
    onDelete
}: LivestockTableProps) {
    const [sortField, setSortField] = useState<SortField | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc');
            if (sortDirection === 'desc') setSortField(null);
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const getSortedLivestock = () => {
        if (!sortField || !sortDirection) return livestock;

        return [...livestock].sort((a, b) => {
            let aVal: any = a[sortField];
            let bVal: any = b[sortField];

            if (sortField === 'age') {
                aVal = a.age.years * 12 + a.age.months;
                bVal = b.age.years * 12 + b.age.months;
            }

            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const sortedLivestock = getSortedLivestock();
    const allSelected = livestock.length > 0 && selectedIds.length === livestock.length;
    const someSelected = selectedIds.length > 0 && selectedIds.length < livestock.length;

    const SortIcon = ({ field }: { field: SortField }) => {
        if (sortField !== field) return <ArrowUpDown className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-50" />;
        if (sortDirection === 'asc') return <ArrowUp className="h-3 w-3 ml-1 text-[#590156]" />;
        return <ArrowDown className="h-3 w-3 ml-1 text-[#590156]" />;
    };

    const formatAge = (age: { years: number; months: number }) => {
        if (age.years === 0) return `${age.months} months`;
        if (age.months === 0) return `${age.years} year${age.years > 1 ? 's' : ''}`;
        return `${age.years}y ${age.months}m`;
    };

    const getVaccinationDisplay = (animal: Livestock) => {
        const { vaccinationStatus, nextVaccinationDue } = animal;

        if (vaccinationStatus === 'Up to date') {
            return <span className="text-green-600 text-sm flex items-center gap-1">
                ✓ Up to date
            </span>;
        }

        if (vaccinationStatus === 'Overdue') {
            return <span className="text-red-600 text-sm font-medium flex items-center gap-1">
                ! Overdue
            </span>;
        }

        return <span className="text-orange-600 text-sm flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Due: {nextVaccinationDue ? new Date(nextVaccinationDue).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A'}
        </span>;
    };

    return (
        <div className="bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-[#F3E8F3] border-b border-gray-100">
                        <tr>
                            <th className="px-4 py-4 text-left w-[50px]">
                                <Checkbox
                                    checked={allSelected}
                                    onCheckedChange={(checked) => onSelectAll(checked as boolean)}
                                    className={someSelected ? "data-[state=checked]:bg-[#590156]" : ""}
                                />
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('id')}
                            >
                                <div className="flex items-center">
                                    Animal ID
                                    <SortIcon field="id" />
                                </div>
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('type')}
                            >
                                <div className="flex items-center">
                                    Type
                                    <SortIcon field="type" />
                                </div>
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('breed')}
                            >
                                <div className="flex items-center">
                                    Breed
                                    <SortIcon field="breed" />
                                </div>
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('age')}
                            >
                                <div className="flex items-center">
                                    Age
                                    <SortIcon field="age" />
                                </div>
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('gender')}
                            >
                                <div className="flex items-center">
                                    Gender
                                    <SortIcon field="gender" />
                                </div>
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('healthStatus')}
                            >
                                <div className="flex items-center">
                                    Health Status
                                    <SortIcon field="healthStatus" />
                                </div>
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                Vaccination
                            </th>
                            <th
                                className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer group"
                                onClick={() => handleSort('location')}
                            >
                                <div className="flex items-center">
                                    Location
                                    <SortIcon field="location" />
                                </div>
                            </th>
                            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedLivestock.map((animal, index) => (
                            <tr
                                key={animal.id}
                                className={cn(
                                    "border-b border-gray-50 hover:bg-[#F8F3F8] transition-colors",
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                                )}
                            >
                                <td className="px-4 py-4">
                                    <Checkbox
                                        checked={selectedIds.includes(animal.id)}
                                        onCheckedChange={(checked) => onSelectOne(animal.id, checked as boolean)}
                                    />
                                </td>
                                <td className="px-4 py-4">
                                    <span className="font-semibold text-gray-900">{animal.id}</span>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <AnimalTypeIcon type={animal.type} size="sm" />
                                        <span className="text-sm text-gray-700">{animal.type}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="text-sm text-gray-700">{animal.breed}</span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="text-sm text-gray-700">{formatAge(animal.age)}</span>
                                </td>
                                <td className="px-4 py-4">
                                    <GenderBadge gender={animal.gender} />
                                </td>
                                <td className="px-4 py-4">
                                    <StatusBadge status={animal.healthStatus} size="sm" />
                                </td>
                                <td className="px-4 py-4">
                                    {getVaccinationDisplay(animal)}
                                </td>
                                <td className="px-4 py-4">
                                    <span className="text-sm text-gray-700">{animal.location}</span>
                                </td>
                                <td className="px-4 py-4">
                                    <ActionButtons
                                        onView={() => onView(animal)}
                                        onEdit={() => onEdit(animal)}
                                        onDelete={() => onDelete(animal)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
