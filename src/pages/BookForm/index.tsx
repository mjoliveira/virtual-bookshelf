import React, { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { addBook } from "../../services/bookService";
import { Book } from "../../types/book";
import '../../styles/bookForm.scss';

const BookForm: React.FC = () => {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    synopsis: "",
    publisher: "",
    status: "want-to-read",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addBook(book); // Aqui chamamos a função que salva no Firestore

    // Aqui você pode salvar no Firestore, Supabase ou LocalStorage
    console.log("Novo livro cadastrado:", book);

    // Limpa o formulário depois do cadastro
    setBook({
      title: "",
      author: "",
      synopsis: "",
      publisher: "",
      status: "want-to-read",
    });
  };

  return (
    <>
      <h1>Cadastro de Livro</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, m: "auto" }}
      >
        <TextField
          label="Título"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Autor"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <TextField
          label="Sinopse"
          name="synopsis"
          value={book.synopsis}
          onChange={handleChange}
          multiline
          rows={3}
        />
        <TextField
          label="Editora"
          name="publisher"
          value={book.publisher}
          onChange={handleChange}
        />
        <TextField
          select
          label="Status"
          name="status"
          value={book.status}
          onChange={handleChange}
        >
          <MenuItem value="read">Já li</MenuItem>
          <MenuItem value="reading">Estou lendo</MenuItem>
          <MenuItem value="want-to-read">Quero ler</MenuItem>
        </TextField>
        <Button 
        className="save-button" 
        type="submit"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
        }}>
          Cadastrar Livro
        </Button>
      </Box>
    </>
  );
};

export default BookForm;