export type Author = {
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    birthCertificate: string;
};

export type Decision = { value: false; reason: string } | { value: true };

export type ArtWork = {
    id: number;
    author: Author;
    created_date: string;
    competition: string;
    url: string;
    decision: Decision | null;
};
