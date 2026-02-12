import { useState, useMemo } from 'react';
import { Plus, Table as TableIcon, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '../layout/DashboardLayout';
import LivestockSummaryCards from './summary/LivestockSummaryCards';
import LivestockFilters from './filters/LivestockFilters';
import LivestockTable from './table/LivestockTable';
import BulkActionsBar from './table/BulkActionsBar';
import TablePagination from './table/TablePagination';
import AddLivestockModal from './modals/AddLivestockModal';
import EditLivestockModal from './modals/EditLivestockModal';
import ViewLivestockModal from './modals/ViewLivestockModal';
import DeleteConfirmationDialog from './modals/DeleteConfirmationDialog';
import { sampleLivestock, calculateLivestockStats } from '@/data/sampleLivestock';
import type { Livestock, LivestockFilters as FiltersType } from '@/types/livestock';

export default function MyLivestockPage() {
    const [livestockList, setLivestockList] = useState<Livestock[]>(sampleLivestock);
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

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    // Selected Animal State
    const [selectedAnimal, setSelectedAnimal] = useState<Livestock | null>(null);
    const [animalToDelete, setAnimalToDelete] = useState<string[]>([]); // Array of IDs to delete

    // Filter livestock based on criteria
    const filteredLivestock = useMemo(() => {
        return livestockList.filter(animal => {
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
    }, [filters, livestockList]);

    // Pagination
    const paginatedLivestock = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredLivestock.slice(startIndex, startIndex + pageSize);
    }, [filteredLivestock, currentPage, pageSize]);

    const totalPages = Math.ceil(filteredLivestock.length / pageSize);
    const stats = calculateLivestockStats(livestockList);

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

    // --- Modal Handlers ---

    const handleAddNew = (data: Partial<Livestock>) => {
        const newAnimal = {
            ...data,
            id: `LS-${Math.floor(Math.random() * 10000)}`, // Generate random ID
        } as Livestock;
        setLivestockList([newAnimal, ...livestockList]);
        setIsAddModalOpen(false);
    };

    const handleEditSave = (id: string, data: Partial<Livestock>) => {
        setLivestockList(livestockList.map(item =>
            item.id === id ? { ...item, ...data } : item
        ));
        setIsEditModalOpen(false);
        setSelectedAnimal(null);
    };

    const handleView = (animal: Livestock) => {
        setSelectedAnimal(animal);
        setIsViewModalOpen(true);
    };

    const handleEdit = (animal: Livestock) => {
        setSelectedAnimal(animal);
        setIsEditModalOpen(true);
    };

    const handleDelete = (animal: Livestock) => {
        setAnimalToDelete([animal.id]);
        setIsDeleteDialogOpen(true);
    };

    const handleBulkDelete = () => {
        setAnimalToDelete(selectedIds);
        setIsDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        setLivestockList(livestockList.filter(item => !animalToDelete.includes(item.id)));
        setSelectedIds([]);
        setAnimalToDelete([]);
        setIsDeleteDialogOpen(false);
    };

    const handleBulkMarkHealthy = () => {
        setLivestockList(livestockList.map(item =>
            selectedIds.includes(item.id) ? { ...item, healthStatus: 'Healthy' } : item
        ));
        setSelectedIds([]);
    };

    const handleBulkMarkSick = () => {
        setLivestockList(livestockList.map(item =>
            selectedIds.includes(item.id) ? { ...item, healthStatus: 'Sick' } : item
        ));
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
                        <Button
                            className="bg-[#590156] hover:bg-[#450142] rounded-xl"
                            onClick={() => setIsAddModalOpen(true)}
                        >
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

            {/* Modals */}
            <AddLivestockModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAddNew}
            />

            <EditLivestockModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleEditSave}
                initialData={selectedAnimal}
            />

            <ViewLivestockModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                animal={selectedAnimal}
            />

            <DeleteConfirmationDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={confirmDelete}
                title={animalToDelete.length > 1 ? "Delete Multiple Animals?" : "Delete Animal?"}
                description={animalToDelete.length > 1
                    ? `Are you sure you want to delete these ${animalToDelete.length} animals? This action cannot be undone.`
                    : "Are you sure you want to delete this animal? This action cannot be undone."
                }
            />
        </DashboardLayout>
    );
}
