// src/services/bookService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Função para salvar um livro
export const addBook = async (book:any) => {
  try {
    const docRef = await addDoc(collection(db, "books"), book);
    console.log("Livro adicionado com ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Erro ao adicionar livro: ", e);
  }
};