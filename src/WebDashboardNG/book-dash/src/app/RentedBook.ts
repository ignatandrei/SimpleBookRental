import { RentedAuthors } from './RentedAuthors';

export class RentedBook {
    id: number;
    title: string;
    description: string;
    authors: RentedAuthors[];
}