import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import HealthStatsCards from './widgets/HealthStatsCards';
import HealthRecordsTable from './HealthRecordsTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import AddHealthRecordModal from './modals/AddHealthRecordModal';

export default function HealthRecordsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddRecord = (data: any) => {
        console.log("New record added:", data);
        // Here you would typically add the record to your state or backend
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Health Records</h2>
                        <p className="text-gray-500 mt-1">
                            Track medical history, treatments, and vaccinations.
                        </p>
                    </div>
                    <Button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-[#590156] hover:bg-[#450142] text-white"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Record
                    </Button>
                </div>

                <HealthStatsCards />

                <HealthRecordsTable />

                <AddHealthRecordModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAdd={handleAddRecord}
                />
            </div>
        </DashboardLayout>
    );
}
