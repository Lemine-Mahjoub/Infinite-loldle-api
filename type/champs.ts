export interface Champ {
    _id: string;
    championId: string;
    championName: string;
    species: string[];
    regions: string[];
    positions: string[];
    hp_min: number;
    hp_max: number;
    resource: string;
    release_date: string;
    range_type: string[];
    store_price: number[];
    gender: string;
    originalSpecies: string[];
    newSpecies: string[];
}