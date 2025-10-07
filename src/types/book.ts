export interface Book {
  id?: string; // opcional, usado quando buscarmos livros
  title: string;
  author: string;
  synopsis: string;
  publisher: string;
  status: "read" | "reading" | "want-to-read";
}