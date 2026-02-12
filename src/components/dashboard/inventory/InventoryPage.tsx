import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, Package, AlertTriangle, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AddInventoryItemModal from './modals/AddInventoryItemModal';
import InventoryTable from './InventoryTable';

export default function InventoryPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddItem = (data: any) => {
        console.log("New item added:", data);
        // Add to state/backend
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Inventory Management</h2>
                        <p className="text-gray-500 mt-1">
                            Track stock levels, manage supplies, and set reorder alerts.
                        </p>
                    </div>
                    <Button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-[#590156] hover:bg-[#450142] text-white"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Item
                    </Button>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Items</CardTitle>
                            <Package className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800">142</div>
                            <p className="text-xs text-gray-500 mt-1">Across 4 categories</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Low Stock Alerts</CardTitle>
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800">3</div>
                            <p className="text-xs text-orange-600 mt-1">Requires immediate attention</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Monthly Usage</CardTitle>
                            <TrendingDown className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800">12%</div>
                            <p className="text-xs text-green-600 mt-1">Lower than last month</p>
                        </CardContent>
                    </Card>
                </div>

                <InventoryTable />

                <AddInventoryItemModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAdd={handleAddItem}
                />
            </div>
        </DashboardLayout>
    );
}
