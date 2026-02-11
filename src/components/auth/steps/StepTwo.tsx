import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Upload } from 'lucide-react';
import type { RegistrationFormData } from '../types';

interface StepTwoProps {
    formData: RegistrationFormData;
    updateFormData: (data: Partial<RegistrationFormData>) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepTwo({ formData, updateFormData, onNext, onBack }: StepTwoProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        updateFormData({ [id]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        updateFormData({ uploadedFile: file });
    }

    const renderFarmerFields = () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="farmName">Farm Name</Label>
                <Input
                    id="farmName"
                    placeholder="Green Valley Farm"
                    value={formData.farmName}
                    onChange={handleChange}
                />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="livestockCount">Est. Livestock Count</Label>
                    <Input
                        id="livestockCount"
                        type="number"
                        placeholder="e.g. 50"
                        value={formData.livestockCount}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size (Hectares)</Label>
                    <Input
                        id="farmSize"
                        type="number"
                        placeholder="e.g. 2.5"
                        value={formData.farmSize}
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* Multi-select for Livestock Types would go here - simplified for now */}
            <div className="space-y-2">
                <Label>Livestock Types</Label>
                <div className="text-sm text-muted-foreground p-3 border rounded-md bg-gray-50">
                    Cows, Goats, Sheep, Chickens (Multi-select placeholder)
                </div>
            </div>
        </div>
    );

    const renderVetFields = () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="licenseNumber">Professional License Number</Label>
                <Input
                    id="licenseNumber"
                    placeholder="VET-12345678"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Assigned District</Label>
                <Input
                    value={formData.location?.district || "N/A"}
                    disabled
                    className="bg-gray-100"
                />
                <p className="text-xs text-muted-foreground">Auto-filled from Step 1</p>
            </div>

            <div className="space-y-2">
                <Label>Upload Proof of Certification (PDF)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                    <input
                        type="file"
                        accept=".pdf"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm font-medium text-gray-700">
                        {formData.uploadedFile ? formData.uploadedFile.name : "Click or drag to upload"}
                    </p>
                    <p className="text-xs text-gray-500">PDF only, max 5MB</p>
                </div>
            </div>
        </div>
    );

    const renderAuthorityFields = () => (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="staffCode">Staff Code</Label>
                    <Input
                        id="staffCode"
                        placeholder="GOV-XXX"
                        value={formData.staffCode}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="officialId">Official ID Number</Label>
                    <Input
                        id="officialId"
                        placeholder="ID Number"
                        value={formData.officialId}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="officeName">Office Name / Title</Label>
                <Input
                    id="officeName"
                    placeholder="e.g. Director of Agriculture"
                    value={formData.officeName}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="officialEmail">Official Gov Email</Label>
                <Input
                    id="officialEmail"
                    type="email"
                    placeholder="name@gov.rw"
                    value={formData.officialEmail}
                    onChange={handleChange}
                />
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                    {formData.role === 'farmer' && 'Farm Details'}
                    {formData.role === 'veterinarian' && 'Professional Credentials'}
                    {typeof formData.role === 'string' && formData.role.includes('authority') && 'Official Information'}
                </h3>
                <p className="text-sm text-muted-foreground">
                    Please provide specific details for your role.
                </p>
            </div>

            {formData.role === 'farmer' && renderFarmerFields()}
            {formData.role === 'veterinarian' && renderVetFields()}
            {(formData.role === 'district_authority' || formData.role === 'province_authority') && renderAuthorityFields()}

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    onClick={onBack}
                    className="w-1/3"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Button
                    onClick={onNext}
                    className="w-2/3 bg-[#590156] hover:bg-[#4a0148]"
                >
                    Continue to Review
                </Button>
            </div>
        </div>
    );
}
