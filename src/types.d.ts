type Region = {
    kopuk: string;
    fullname: string;
    territory: string;
    libraries: number;
    address: string;
    subscribers: number;
    computers: number;
    employees: number;
    digital_catalogs: number;
    funds_budget: number;
    funds_used: number;
};

type RegionDataExistence = Region | undefined | null;
