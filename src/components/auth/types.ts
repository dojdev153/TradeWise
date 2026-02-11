export type UserRole = 'farmer' | 'veterinarian' | 'district_authority' | 'province_authority';

export interface LocationData {
    province: string;
    district: string;
    sector: string;
    cell: string;
}

export interface RegistrationFormData {
    // Step 1
    fullName: string;
    email: string;
    phone: string;
    password?: string;
    confirmPassword?: string;
    role: UserRole | string; // Allow string initial state
    location: LocationData;

    // Step 2
    farmName?: string;
    livestockTypes?: string[];
    livestockCount?: string;
    farmSize?: string;
    licenseNumber?: string;
    assignedDistrict?: string;
    uploadedFile?: File | null;
    staffCode?: string;
    officeName?: string;
    officialEmail?: string;
    officialId?: string;
    additionalNotes?: string;
    [key: string]: any; // Allow dynamic access
}
