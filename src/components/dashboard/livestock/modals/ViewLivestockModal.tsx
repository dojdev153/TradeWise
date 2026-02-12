import { format } from "date-fns";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import type { Livestock } from "@/types/livestock";
import { DollarSign, Syringe } from "lucide-react";

interface ViewLivestockModalProps {
    isOpen: boolean;
    onClose: () => void;
    animal: Livestock | null;
}

export default function ViewLivestockModal({ isOpen, onClose, animal }: ViewLivestockModalProps) {
    if (!animal) return null;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Healthy': return 'bg-green-100 text-green-800';
            case 'Sick': return 'bg-red-100 text-red-800';
            case 'Under Treatment': return 'bg-yellow-100 text-yellow-800';
            case 'Quarantined': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] h-[80vh] flex flex-col p-0 gap-0">
                <DialogHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                {animal.id}
                                <Badge className={getStatusColor(animal.healthStatus)}>
                                    {animal.healthStatus}
                                </Badge>
                            </DialogTitle>
                            <p className="text-gray-500 mt-1">{animal.breed} {animal.type} • {animal.gender}</p>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                            <div>Born: {format(new Date(animal.dateOfBirth), 'PPP')}</div>
                            <div>Age: {animal.age.years}y {animal.age.months}m</div>
                        </div>
                    </div>
                </DialogHeader>

                <Tabs defaultValue="overview" className="flex-1 flex flex-col overflow-hidden">
                    <div className="px-6 border-b">
                        <TabsList className="w-full justify-start bg-transparent p-0 h-auto">
                            <TabsTrigger
                                value="overview"
                                className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
                            >
                                Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="health"
                                className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
                            >
                                Health
                            </TabsTrigger>
                            <TabsTrigger
                                value="vaccinations"
                                className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
                            >
                                Vaccinations
                            </TabsTrigger>
                            <TabsTrigger
                                value="financials"
                                className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
                            >
                                Financials
                            </TabsTrigger>
                            <TabsTrigger
                                value="timeline"
                                className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none"
                            >
                                Timeline
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <ScrollArea className="flex-1 p-6">
                        <TabsContent value="overview" className="mt-0 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-gray-500">Physical Stats</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="font-medium">Weight:</span>
                                                <span>{animal.weight ? `${animal.weight.value} ${animal.weight.unit}` : 'N/A'}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-medium">Location:</span>
                                                <span>{animal.location}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-gray-500">Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="font-medium">Health:</span>
                                                <span className={animal.healthStatus === 'Healthy' ? 'text-green-600' : 'text-red-600'}>
                                                    {animal.healthStatus}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-medium">Vaccination:</span>
                                                <span className={
                                                    animal.vaccinationStatus === 'Up to date' ? 'text-green-600' :
                                                        animal.vaccinationStatus === 'Overdue' ? 'text-red-600' : 'text-yellow-600'
                                                }>
                                                    {animal.vaccinationStatus}
                                                </span>
                                            </div>
                                            {animal.nextVaccinationDue && (
                                                <div className="flex justify-between text-sm text-gray-500 mt-2 pt-2 border-t">
                                                    <span>Next Vaccine:</span>
                                                    <span>{format(new Date(animal.nextVaccinationDue), 'PP')}</span>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="health" className="mt-0">
                            {animal.healthRecords.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">No health records found.</div>
                            ) : (
                                <div className="space-y-4">
                                    {animal.healthRecords.map((record) => (
                                        <Card key={record.id}>
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{record.diagnosis}</h4>
                                                        <p className="text-sm text-gray-500">{format(new Date(record.date), 'PPP')}</p>
                                                    </div>
                                                    <Badge variant={record.status === 'Resolved' ? 'secondary' : 'destructive'}>
                                                        {record.status}
                                                    </Badge>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                                                    <div>
                                                        <span className="text-gray-500 block">Issue:</span>
                                                        {record.issue}
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block">Treatment:</span>
                                                        {record.treatment}
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block">Vet:</span>
                                                        {record.veterinarian}
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block">Cost:</span>
                                                        ${record.cost}
                                                    </div>
                                                </div>
                                                {record.notes && (
                                                    <div className="mt-3 text-sm bg-gray-50 p-2 rounded">
                                                        <span className="font-medium">Notes: </span>{record.notes}
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="vaccinations" className="mt-0">
                            {animal.vaccinations.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">No vaccination records found.</div>
                            ) : (
                                <div className="space-y-4">
                                    {animal.vaccinations.map((vax) => (
                                        <Card key={vax.id}>
                                            <CardContent className="p-4 flex items-center justify-between">
                                                <div className="flex items-start gap-4">
                                                    <div className="bg-blue-100 p-2 rounded-full">
                                                        <Syringe className="h-5 w-5 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold">{vax.vaccineName}</h4>
                                                        <p className="text-sm text-gray-500">Administered: {format(new Date(vax.dateAdministered), 'PPP')}</p>
                                                        <p className="text-sm text-gray-500">Next Due: {format(new Date(vax.nextDueDate), 'PPP')}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <Badge variant="outline" className={
                                                        vax.status === 'Up to date' ? 'border-green-500 text-green-700' :
                                                            vax.status === 'Overdue' ? 'border-red-500 text-red-700' : 'border-yellow-500 text-yellow-700'
                                                    }>
                                                        {vax.status}
                                                    </Badge>
                                                    <p className="text-sm text-gray-500 mt-1">Vet: {vax.veterinarian}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="financials" className="mt-0">
                            <div className="mb-6 grid grid-cols-2 gap-4">
                                <Card>
                                    <CardContent className="p-4">
                                        <div className="text-sm text-gray-500">Purchase Cost</div>
                                        <div className="text-2xl font-bold text-gray-900">${animal.purchasePrice}</div>
                                        <div className="text-xs text-gray-400">Purchased on {format(new Date(animal.purchaseDate), 'PP')}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4">
                                        <div className="text-sm text-gray-500">Total Expenses</div>
                                        <div className="text-2xl font-bold text-red-600">
                                            ${animal.expenses.reduce((sum, exp) => sum + exp.amount, 0) + animal.purchasePrice}
                                        </div>
                                        <div className="text-xs text-gray-400">Includes purchase + upkeep</div>
                                    </CardContent>
                                </Card>
                            </div>

                            <h3 className="font-semibold mb-3">Expense History</h3>
                            {animal.expenses.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">No expense records found.</div>
                            ) : (
                                <div className="space-y-3">
                                    {animal.expenses.map((exp) => (
                                        <div key={exp.id} className="flex justify-between items-center p-3 bg-white border rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-gray-100 p-2 rounded-full">
                                                    <DollarSign className="h-4 w-4 text-gray-600" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{exp.description}</div>
                                                    <div className="text-xs text-gray-500">{exp.category} • {format(new Date(exp.date), 'PP')}</div>
                                                </div>
                                            </div>
                                            <div className="font-semibold text-red-600">-${exp.amount}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="timeline" className="mt-0">
                            <div className="relative border-l border-gray-200 ml-3 space-y-6">
                                {animal.timeline.map((event) => (
                                    <div key={event.id} className="mb-8 ml-6 relative">
                                        <div className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300" />
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                                            {format(new Date(event.date), 'PPP')}
                                        </time>
                                        <h3 className="text-base font-semibold text-gray-900">{event.event}</h3>
                                        <p className="text-base font-normal text-gray-500">{event.description}</p>
                                    </div>
                                ))}
                                <div className="mb-8 ml-6 relative">
                                    <div className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full border border-white bg-green-500" />
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                                        {format(new Date(animal.purchaseDate), 'PPP')}
                                    </time>
                                    <h3 className="text-base font-semibold text-gray-900">Acquired</h3>
                                    <p className="text-base font-normal text-gray-500">Purchased for ${animal.purchasePrice}</p>
                                </div>
                                <div className="ml-6 relative">
                                    <div className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500" />
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                                        {format(new Date(animal.dateOfBirth), 'PPP')}
                                    </time>
                                    <h3 className="text-base font-semibold text-gray-900">Born</h3>
                                    <p className="text-base font-normal text-gray-500">Date of Birth</p>
                                </div>
                            </div>
                        </TabsContent>
                    </ScrollArea>
                </Tabs>
                <div className="p-4 border-t bg-gray-50 flex justify-end">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
