import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Stethoscope, Building2, MapPin } from 'lucide-react';
import type { RegistrationFormData } from '../types';

interface StepOneProps {
    formData: RegistrationFormData;
    updateFormData: (data: Partial<RegistrationFormData>) => void;
    onNext: () => void;
}

const roles = [
    {
        id: 'farmer',
        label: 'Farmer',
        icon: User,
        description: 'Manage livestock & access insights'
    },
    {
        id: 'veterinarian',
        label: 'Veterinarian',
        icon: Stethoscope,
        description: 'Verify health & compliance'
    },
    {
        id: 'district_authority',
        label: 'District Authority',
        icon: MapPin,
        description: 'Monitor district-level data'
    },
    {
        id: 'province_authority',
        label: 'Province Authority',
        icon: Building2,
        description: 'Oversee provincial statistics'
    }
];

export default function StepOne({ formData, updateFormData, onNext }: StepOneProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        updateFormData({ [id]: value });
    };

    const handleRoleSelect = (roleId: string) => {
        updateFormData({ role: roleId });
    };

    const isFormValid = () => {
        return (
            formData.fullName &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.role
        );
    };

    return (
        <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        placeholder="+250..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-3">
                <Label>Select Your Role</Label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {roles.map((role) => {
                        const Icon = role.icon;
                        const isSelected = formData.role === role.id;
                        return (
                            <div
                                key={role.id}
                                onClick={() => handleRoleSelect(role.id)}
                                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 text-center transition-all hover:bg-purple-50 ${isSelected
                                    ? 'border-[#590156] bg-purple-50/50'
                                    : 'border-gray-200 hover:border-purple-200'
                                    }`}
                            >
                                <Icon className={`mb-2 h-6 w-6 ${isSelected ? 'text-[#590156]' : 'text-gray-500'}`} />
                                <span className={`text-sm font-semibold ${isSelected ? 'text-[#590156]' : 'text-gray-900'}`}>
                                    {role.label}
                                </span>
                                <span className="text-xs text-muted-foreground mt-1">
                                    {role.description}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Location Selection (Simplified for Demo) */}
            {/* In a real app, these would be dependent dropdowns */}
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Province</Label>
                    <Select
                        value={formData.location.province}
                        onValueChange={(val) => updateFormData({ location: { ...formData.location, province: val } })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Province" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="kigali">Kigali City</SelectItem>
                            <SelectItem value="eastern">Eastern Province</SelectItem>
                            {/* More options... */}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>District</Label>
                    <Select
                        value={formData.location.district}
                        onValueChange={(val) => updateFormData({ location: { ...formData.location, district: val } })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select District" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="gasabo">Gasabo</SelectItem>
                            <SelectItem value="nyarugenge">Nyarugenge</SelectItem>
                            {/* More options... */}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Button
                onClick={onNext}
                disabled={!isFormValid()}
                className="w-full bg-[#590156] hover:bg-[#4a0148]"
            >
                Continue to Role Details
            </Button>
        </div>
    );
}
