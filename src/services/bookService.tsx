import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Book } from "../types/book";

// Adiciona um livro ao Firestore
export const addBook = async (book:any) => {
  try {
    const docRef = await addDoc(collection(db, "books"), book);
    console.log("Livro adicionado com ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Erro ao adicionar livro: ", e);
  }
};

// Busca todos os livros cadastrados
export const getBooks = async (): Promise<Book[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "books"));
    const books: Book[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Book, "id">),
    }));
    return books;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
};

// Deleta um livro pelo ID
export const deleteBook = async (id: string) => {
  try {
    await deleteDoc(doc(db, "books", id));
    console.log("Livro deletado com ID:", id);
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
  }
};