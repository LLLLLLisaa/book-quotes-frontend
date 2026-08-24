export interface Book {
    id: number;
    title: string;
    author: string;
    publicationDate: string;
  }

export type BookRequest = {
  title: Book['title'];
  author: Book['author'];
  publishedDate: string;
};
  