export type AnimalType = 'Cow' | 'Goat' | 'Chicken' | 'Pig' | 'Sheep';
export type Gender = 'Male' | 'Female';
export type HealthStatus = 'Healthy' | 'Sick' | 'Under Treatment' | 'Quarantined';
export type VaccinationStatus = 'Up to date' | 'Due soon' | 'Overdue';

export interface Age {
    years: number;
    months: number;
}

export interface Weight {
    value: number;
    unit: 'kg' | 'lbs';
}

export interface VaccinationRecord {
    id: string;
    vaccineName: string;
    dateAdministered: string;
    nextDueDate: string;
    veterinarian: string;
    cost: number;
    status: VaccinationStatus;
}

export interface HealthRecord {
    id: string;
    date: string;
    issue: string;
    diagnosis: string;
    treatment: string;
    veterinarian: string;
    cost: number;
    status: 'Resolved' | 'Ongoing';
    notes: string;
}

export interface Expense {
    id: string;
    category: 'Feed' | 'Medical' | 'Other';
    amount: number;
    date: string;
    description: string;
    receipt?: string;
}

export interface TimelineEvent {
    id: string;
    date: string;
    event: string;
    description: string;
}

export interface Livestock {
    id: string;
    type: AnimalType;
    breed: string;
    age: Age;
    dateOfBirth: string;
    gender: Gender;
    healthStatus: HealthStatus;
    vaccinationStatus: VaccinationStatus;
    lastVaccination?: string;
    nextVaccinationDue?: string;
    location: string;
    weight?: Weight;
    purchaseDate: string;
    purchasePrice: number;
    notes?: string;
    isFavorite: boolean;
    vaccinations: VaccinationRecord[];
    healthRecords: HealthRecord[];
    expenses: Expense[];
    timeline: TimelineEvent[];
}

export interface LivestockFilters {
    search: string;
    type: AnimalType | 'All';
    healthStatus: HealthStatus | 'All';
    gender: Gender | 'All';
    ageRange: 'All' | '0-6 months' | '6-12 months' | '1-2 years' | '2+ years';
}

export interface LivestockStats {
    totalAnimals: number;
    animalTypes: number;
    healthyCount: number;
    needAttentionCount: number;
    totalExpenses: number;
}
