import React, { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";

type Book = {
  title: string;
  author: string;
  synopsis: string;
  publisher: string;
  status: "read" | "reading" | "want-to-read";
};

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      <Button type="submit" variant="contained" color="primary">
        Cadastrar Livro
      </Button>
    </Box>
  );
};

export default BookForm;