import { useState, useMemo } from 'react';
import { Plus, Table as TableIcon, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '../layout/DashboardLayout';
import LivestockSummaryCards from './summary/LivestockSummaryCards';
import LivestockFilters from './filters/LivestockFilters';
import LivestockTable from './table/LivestockTable';
import BulkActionsBar from './table/BulkActionsBar';
import TablePagination from './table/TablePagination';
import { sampleLivestock, calculateLivestockStats } from '@/data/sampleLivestock';
import type { Livestock, LivestockFilters as FiltersType } from '@/types/livestock';

export default function MyLivestockPage() {
    const [filters, setFilters] = useState<FiltersType>({
        search: '',
        type: 'All',
        healthStatus: 'All',
        gender: 'All',
        ageRange: 'All'
    });
    const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    // Filter livestock based on criteria
    const filteredLivestock = useMemo(() => {
        return sampleLivestock.filter(animal => {
            // Search filter
            if (filters.search) {
                const searchLower = filters.search.toLowerCase();
                const matchesSearch =
                    animal.id.toLowerCase().includes(searchLower) ||
                    animal.type.toLowerCase().includes(searchLower) ||
                    animal.breed.toLowerCase().includes(searchLower);
                if (!matchesSearch) return false;
            }

            // Type filter
            if (filters.type !== 'All' && animal.type !== filters.type) return false;

            // Health status filter
            if (filters.healthStatus !== 'All' && animal.healthStatus !== filters.healthStatus) return false;

            // Gender filter
            if (filters.gender !== 'All' && animal.gender !== filters.gender) return false;

            // Age range filter
            if (filters.ageRange !== 'All') {
                const totalMonths = animal.age.years * 12 + animal.age.months;
                switch (filters.ageRange) {
                    case '0-6 months':
                        if (totalMonths > 6) return false;
                        break;
                    case '6-12 months':
                        if (totalMonths <= 6 || totalMonths > 12) return false;
                        break;
                    case '1-2 years':
                        if (totalMonths <= 12 || totalMonths > 24) return false;
                        break;
                    case '2+ years':
                        if (totalMonths <= 24) return false;
                        break;
                }
            }

            return true;
        });
    }, [filters]);

    // Pagination
    const paginatedLivestock = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredLivestock.slice(startIndex, startIndex + pageSize);
    }, [filteredLivestock, currentPage, pageSize]);

    const totalPages = Math.ceil(filteredLivestock.length / pageSize);
    const stats = calculateLivestockStats(sampleLivestock);

    const hasActiveFilters = filters.search !== '' || filters.type !== 'All' ||
        filters.healthStatus !== 'All' || filters.gender !== 'All' || filters.ageRange !== 'All';

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(paginatedLivestock.map(a => a.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectOne = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter(item => item !== id));
        }
    };

    const handleNeedAttentionClick = () => {
        setFilters({
            ...filters,
            healthStatus: 'All', // Reset to show all types of issues
            search: '', // Clear search
        });
        // In a real app, you'd filter for sick, under treatment, quarantined, or overdue vaccinations
    };

    const handleView = (animal: Livestock) => {
        console.log('View:', animal);
        // TODO: Open view modal
    };

    const handleEdit = (animal: Livestock) => {
        console.log('Edit:', animal);
        // TODO: Open edit modal
    };

    const handleDelete = (animal: Livestock) => {
        console.log('Delete:', animal);
        // TODO: Open delete confirmation
    };

    const handleBulkMarkHealthy = () => {
        console.log('Mark healthy:', selectedIds);
        // TODO: Implement bulk action
        setSelectedIds([]);
    };

    const handleBulkMarkSick = () => {
        console.log('Mark sick:', selectedIds);
        // TODO: Implement bulk action
        setSelectedIds([]);
    };

    const handleBulkDelete = () => {
        console.log('Delete selected:', selectedIds);
        // TODO: Implement bulk deletion
        setSelectedIds([]);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">My Livestock</h1>
                        <p className="text-gray-500 mt-1">Manage and track all your farm animals</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* View Toggle */}
                        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                            <Button
                                variant={viewMode === 'table' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setViewMode('table')}
                                className={viewMode === 'table' ? 'bg-white shadow-sm' : ''}
                            >
                                <TableIcon className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => setViewMode('grid')}
                                className={viewMode === 'grid' ? 'bg-white shadow-sm' : ''}
                            >
                                <Grid className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Add Livestock Button */}
                        <Button className="bg-[#590156] hover:bg-[#450142] rounded-xl">
                            <Plus className="h-5 w-5 mr-2" />
                            Add Livestock
                        </Button>
                    </div>
                </div>

                {/* Summary Cards */}
                <LivestockSummaryCards stats={stats} onNeedAttentionClick={handleNeedAttentionClick} />

                {/* Filters */}
                <LivestockFilters
                    filters={filters}
                    onFilterChange={setFilters}
                    hasActiveFilters={hasActiveFilters}
                />

                {/* Bulk Actions Bar */}
                <BulkActionsBar
                    selectedCount={selectedIds.length}
                    onClearSelection={() => setSelectedIds([])}
                    onMarkHealthy={handleBulkMarkHealthy}
                    onMarkSick={handleBulkMarkSick}
                    onDeleteSelected={handleBulkDelete}
                />

                {/* Table View */}
                {viewMode === 'table' && (
                    <div>
                        <LivestockTable
                            livestock={paginatedLivestock}
                            selectedIds={selectedIds}
                            onSelectAll={handleSelectAll}
                            onSelectOne={handleSelectOne}
                            onView={handleView}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />

                        {/* Pagination */}
                        <div className="mt-6">
                            <TablePagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                pageSize={pageSize}
                                totalItems={filteredLivestock.length}
                                onPageChange={setCurrentPage}
                                onPageSizeChange={(size) => {
                                    setPageSize(size);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* Grid View - Placeholder */}
                {viewMode === 'grid' && (
                    <div className="text-center py-12 bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                        <Grid className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Grid View</h3>
                        <p className="text-gray-500">Grid view coming soon!</p>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
