import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import type { LivestockFilters as FiltersType, AnimalType, HealthStatus, Gender } from '@/types/livestock';

interface LivestockFiltersProps {
    filters: FiltersType;
    onFilterChange: (filters: FiltersType) => void;
    hasActiveFilters: boolean;
}

export default function LivestockFilters({ filters, onFilterChange, hasActiveFilters }: LivestockFiltersProps) {
    const handleSearchChange = (value: string) => {
        onFilterChange({ ...filters, search: value });
    };

    const handleTypeChange = (value: string) => {
        onFilterChange({ ...filters, type: value as AnimalType | 'All' });
    };

    const handleHealthChange = (value: string) => {
        onFilterChange({ ...filters, healthStatus: value as HealthStatus | 'All' });
    };

    const handleGenderChange = (value: string) => {
        onFilterChange({ ...filters, gender: value as Gender | 'All' });
    };

    const handleAgeRangeChange = (value: string) => {
        onFilterChange({ ...filters, ageRange: value as FiltersType['ageRange'] });
    };

    const clearFilters = () => {
        onFilterChange({
            search: '',
            type: 'All',
            healthStatus: 'All',
            gender: 'All',
            ageRange: 'All'
        });
    };

    return (
        <div className="bg-white rounded-[16px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-6">
            <div className="flex flex-wrap gap-4 items-center">
                {/* Search Bar */}
                <div className="relative flex-1 min-w-[280px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search by ID, type, breed..."
                        value={filters.search}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="pl-10 border-gray-200 focus:border-[#590156] rounded-xl h-11"
                    />
                </div>

                {/* Animal Type Filter */}
                <Select value={filters.type} onValueChange={handleTypeChange}>
                    <SelectTrigger className="w-[180px] border-gray-200 rounded-xl h-11">
                        <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Types</SelectItem>
                        <SelectItem value="Cow">Cows</SelectItem>
                        <SelectItem value="Goat">Goats</SelectItem>
                        <SelectItem value="Chicken">Chickens</SelectItem>
                        <SelectItem value="Pig">Pigs</SelectItem>
                        <SelectItem value="Sheep">Sheep</SelectItem>
                    </SelectContent>
                </Select>

                {/* Health Status Filter */}
                <Select value={filters.healthStatus} onValueChange={handleHealthChange}>
                    <SelectTrigger className="w-[180px] border-gray-200 rounded-xl h-11">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Status</SelectItem>
                        <SelectItem value="Healthy">Healthy</SelectItem>
                        <SelectItem value="Sick">Sick</SelectItem>
                        <SelectItem value="Under Treatment">Under Treatment</SelectItem>
                        <SelectItem value="Quarantined">Quarantined</SelectItem>
                    </SelectContent>
                </Select>

                {/* Gender Filter */}
                <Select value={filters.gender} onValueChange={handleGenderChange}>
                    <SelectTrigger className="w-[140px] border-gray-200 rounded-xl h-11">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                </Select>

                {/* Age Range Filter */}
                <Select value={filters.ageRange} onValueChange={handleAgeRangeChange}>
                    <SelectTrigger className="w-[160px] border-gray-200 rounded-xl h-11">
                        <SelectValue placeholder="All Ages" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Ages</SelectItem>
                        <SelectItem value="0-6 months">0-6 months</SelectItem>
                        <SelectItem value="6-12 months">6-12 months</SelectItem>
                        <SelectItem value="1-2 years">1-2 years</SelectItem>
                        <SelectItem value="2+ years">2+ years</SelectItem>
                    </SelectContent>
                </Select>

                {/* Clear Filters Button */}
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        onClick={clearFilters}
                        className="text-[#590156] hover:bg-[#F3E8F3] hover:text-[#590156] rounded-xl"
                    >
                        <X className="h-4 w-4 mr-1" />
                        Clear All
                    </Button>
                )}
            </div>
        </div>
    );
}
