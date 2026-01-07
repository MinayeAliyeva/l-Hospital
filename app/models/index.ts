export interface IDoctor {
    id: number;
    name: string;
    title: string;
    image: string;
    experience: string;
    patientCount: number;
    reviewCount: number;
    position: string;
    center: string;
    education: string[];
    services: string[];
    articles: never[];
    reviews: never[];
}