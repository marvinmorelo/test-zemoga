export default interface Celebrity {
    id?: string;
    name: string;
    description: string;
    category: string;
    picture: string;
    lastUpdated: string;
    votes: Votes;
    featured: boolean;
    createdAt: string;
}

export interface Votes {
    positive: number;
    negative: number;
}