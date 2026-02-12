import type { Livestock } from '@/types/livestock';

export const sampleLivestock: Livestock[] = [
    {
        id: "COW-001",
        type: "Cow",
        breed: "Holstein",
        age: { years: 2, months: 3 },
        dateOfBirth: "2022-08-15",
        gender: "Female",
        healthStatus: "Healthy",
        vaccinationStatus: "Up to date",
        lastVaccination: "2025-12-15",
        nextVaccinationDue: "2026-06-15",
        location: "Barn A",
        weight: { value: 650, unit: "kg" },
        purchaseDate: "2024-01-15",
        purchasePrice: 1200,
        notes: "High milk production",
        isFavorite: true,
        vaccinations: [
            {
                id: "V001",
                vaccineName: "Brucellosis",
                dateAdministered: "2025-12-15",
                nextDueDate: "2026-06-15",
                veterinarian: "Dr. Sarah Johnson",
                cost: 45,
                status: "Up to date"
            }
        ],
        healthRecords: [],
        expenses: [
            {
                id: "E001",
                category: "Feed",
                amount: 120,
                date: "2026-01-15",
                description: "Monthly feed supply"
            }
        ],
        timeline: [
            {
                id: "T001",
                date: "2024-01-15",
                event: "Added to farm",
                description: "Purchased from Valley Farm"
            },
            {
                id: "T002",
                date: "2024-01-20",
                event: "First health checkup",
                description: "Initial examination - healthy"
            }
        ]
    },
    {
        id: "COW-002",
        type: "Cow",
        breed: "Jersey",
        age: { years: 3, months: 6 },
        dateOfBirth: "2021-05-10",
        gender: "Female",
        healthStatus: "Healthy",
        vaccinationStatus: "Up to date",
        lastVaccination: "2026-01-05",
        nextVaccinationDue: "2026-07-05",
        location: "Barn A",
        weight: { value: 550, unit: "kg" },
        purchaseDate: "2023-06-20",
        purchasePrice: 1350,
        isFavorite: false,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    },
    {
        id: "GT-001",
        type: "Goat",
        breed: "Boer",
        age: { years: 1, months: 8 },
        dateOfBirth: "2023-05-20",
        gender: "Male",
        healthStatus: "Sick",
        vaccinationStatus: "Up to date",
        lastVaccination: "2025-11-10",
        nextVaccinationDue: "2026-05-10",
        location: "Pasture 2",
        weight: { value: 45, unit: "kg" },
        purchaseDate: "2024-08-15",
        purchasePrice: 280,
        notes: "Currently has fever - under observation",
        isFavorite: false,
        vaccinations: [],
        healthRecords: [
            {
                id: "H001",
                date: "2026-02-10",
                issue: "Fever",
                diagnosis: "Viral infection",
                treatment: "Antibiotics prescribed",
                veterinarian: "Dr. Mike Chen",
                cost: 85,
                status: "Ongoing",
                notes: "Monitor temperature daily"
            }
        ],
        expenses: [],
        timeline: []
    },
    {
        id: "GT-002",
        type: "Goat",
        breed: "Alpine",
        age: { years: 2, months: 1 },
        dateOfBirth: "2022-12-25",
        gender: "Female",
        healthStatus: "Healthy",
        vaccinationStatus: "Due soon",
        lastVaccination: "2025-06-20",
        nextVaccinationDue: "2026-02-20",
        location: "Pasture 2",
        weight: { value: 52, unit: "kg" },
        purchaseDate: "2024-03-10",
        purchasePrice: 320,
        isFavorite: true,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    },
    {
        id: "CHK-001",
        type: "Chicken",
        breed: "Rhode Island Red",
        age: { years: 0, months: 9 },
        dateOfBirth: "2025-05-01",
        gender: "Female",
        healthStatus: "Healthy",
        vaccinationStatus: "Up to date",
        lastVaccination: "2025-10-15",
        nextVaccinationDue: "2026-04-15",
        location: "Coop 1",
        weight: { value: 2.5, unit: "kg" },
        purchaseDate: "2025-06-01",
        purchasePrice: 15,
        notes: "Good egg layer",
        isFavorite: false,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    },
    {
        id: "PIG-001",
        type: "Pig",
        breed: "Yorkshire",
        age: { years: 1, months: 3 },
        dateOfBirth: "2023-10-15",
        gender: "Male",
        healthStatus: "Under Treatment",
        vaccinationStatus: "Overdue",
        lastVaccination: "2025-04-10",
        nextVaccinationDue: "2025-10-10",
        location: "Pen 3",
        weight: { value: 180, unit: "kg" },
        purchaseDate: "2024-02-01",
        purchasePrice: 450,
        notes: "Skin infection - applying topical treatment",
        isFavorite: false,
        vaccinations: [],
        healthRecords: [
            {
                id: "H002",
                date: "2026-02-08",
                issue: "Skin infection",
                diagnosis: "Bacterial dermatitis",
                treatment: "Topical antibiotic cream twice daily",
                veterinarian: "Dr. Sarah Johnson",
                cost: 120,
                status: "Ongoing",
                notes: "Should resolve in 10-14 days"
            }
        ],
        expenses: [],
        timeline: []
    },
    {
        id: "SHP-001",
        type: "Sheep",
        breed: "Merino",
        age: { years: 2, months: 0 },
        dateOfBirth: "2023-01-10",
        gender: "Female",
        healthStatus: "Quarantined",
        vaccinationStatus: "Up to date",
        lastVaccination: "2025-12-01",
        nextVaccinationDue: "2026-06-01",
        location: "Quarantine Area",
        weight: { value: 65, unit: "kg" },
        purchaseDate: "2024-05-15",
        purchasePrice: 380,
        notes: "Recently purchased - in quarantine period",
        isFavorite: false,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    },
    // Additional animals for pagination testing
    {
        id: "COW-003",
        type: "Cow",
        breed: "Angus",
        age: { years: 4, months: 2 },
        dateOfBirth: "2020-11-12",
        gender: "Male",
        healthStatus: "Healthy",
        vaccinationStatus: "Up to date",
        location: "Pasture 1",
        purchaseDate: "2022-03-15",
        purchasePrice: 1800,
        isFavorite: false,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    },
    {
        id: "GT-003",
        type: "Goat",
        breed: "Saanen",
        age: { years: 1, months: 5 },
        dateOfBirth: "2023-08-20",
        gender: "Female",
        healthStatus: "Healthy",
        vaccinationStatus: "Up to date",
        location: "Pasture 2",
        purchaseDate: "2024-10-01",
        purchasePrice: 295,
        isFavorite: false,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    },
    {
        id: "CHK-002",
        type: "Chicken",
        breed: "Leghorn",
        age: { years: 1, months: 1 },
        dateOfBirth: "2024-01-05",
        gender: "Female",
        healthStatus: "Healthy",
        vaccinationStatus: "Up to date",
        location: "Coop 1",
        purchaseDate: "2024-02-15",
        purchasePrice: 18,
        isFavorite: true,
        vaccinations: [],
        healthRecords: [],
        expenses: [],
        timeline: []
    }
];

// Calculate statistics
export const calculateLivestockStats = (livestock: Livestock[]) => {
    const uniqueTypes = new Set(livestock.map(l => l.type)).size;
    const healthyCount = livestock.filter(l => l.healthStatus === 'Healthy').length;
    const needAttention = livestock.filter(l =>
        l.healthStatus === 'Sick' ||
        l.healthStatus === 'Under Treatment' ||
        l.healthStatus === 'Quarantined' ||
        l.vaccinationStatus === 'Overdue'
    ).length;
    const totalExpenses = livestock.reduce((sum, animal) => {
        return sum + animal.expenses.reduce((expSum, exp) => expSum + exp.amount, 0);
    }, 0);

    return {
        totalAnimals: livestock.length,
        animalTypes: uniqueTypes,
        healthyCount,
        needAttentionCount: needAttention,
        totalExpenses
    };
};
