import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { type Livestock } from "@/types/livestock";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    type: z.enum(["Cow", "Goat", "Chicken", "Pig", "Sheep"]),
    breed: z.string().min(2, "Breed is required"),
    gender: z.enum(["Male", "Female"]),
    dateOfBirth: z.string().refine((date) => new Date(date) <= new Date(), {
        message: "Date of birth cannot be in the future",
    }),
    weight: z.string().optional(), // We'll handle conversion to number manually
    location: z.string().min(2, "Location is required"),
    status: z.enum(["Healthy", "Sick", "Under Treatment", "Quarantined"]),
});

interface AddLivestockModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (data: Partial<Livestock>) => void;
}

export default function AddLivestockModal({ isOpen, onClose, onAdd }: AddLivestockModalProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            type: "Cow",
            breed: "",
            gender: "Female",
            dateOfBirth: "",
            weight: "",
            location: "Barn 1",
            status: "Healthy",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Calculate age
        const birthDate = new Date(values.dateOfBirth);
        const now = new Date();
        const years = now.getFullYear() - birthDate.getFullYear();
        const months = now.getMonth() - birthDate.getMonth();

        const age = {
            years: months < 0 ? years - 1 : years,
            months: months < 0 ? months + 12 : months
        };

        const newAnimal: Partial<Livestock> = {
            ...values,
            weight: values.weight ? { value: parseFloat(values.weight), unit: 'kg' } : { value: 0, unit: 'kg' },
            age: age,
            // Additional defaults
            vaccinationStatus: "Up to date",
            purchaseDate: new Date().toISOString(),
            purchasePrice: 0,
            isFavorite: false,
            vaccinations: [],
            healthRecords: [],
            expenses: [],
            timeline: []
        };

        onAdd(newAnimal);
        form.reset();
        onClose();
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add New Livestock</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Animal Name / Tag ID</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Bessie or #1024" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Cow">Cow</SelectItem>
                                                <SelectItem value="Goat">Goat</SelectItem>
                                                <SelectItem value="Chicken">Chicken</SelectItem>
                                                <SelectItem value="Pig">Pig</SelectItem>
                                                <SelectItem value="Sheep">Sheep</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="breed"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Breed</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Holstein" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gender</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Male">Male</SelectItem>
                                                <SelectItem value="Female">Female</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight (kg) - Optional</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="0.0" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location / Barn</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Barn A, Pasture 2" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Health Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Healthy">Healthy</SelectItem>
                                                <SelectItem value="Sick">Sick</SelectItem>
                                                <SelectItem value="Under Treatment">Under Treatment</SelectItem>
                                                <SelectItem value="Quarantined">Quarantined</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <DialogFooter className="mt-6">
                            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                            <Button type="submit" className="bg-[#590156] hover:bg-[#450142] text-white">Add Livestock</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
