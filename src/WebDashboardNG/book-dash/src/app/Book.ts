import { Author } from "./Author";

export class Book {
  id: number;
  title: string;
  description: string;
  authors: Author[];
  totalNumber: number;
}
