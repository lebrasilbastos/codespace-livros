import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import BookList from "./src/screens/BookList";
import BookReader from "./src/screens/BookReader";
import { Book } from "./src/data/books";

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  if (selectedBook) {
    return (
      <>
        <BookReader book={selectedBook} onGoBack={() => setSelectedBook(null)} />
        <StatusBar style="dark" />
      </>
    );
  }

  return (
    <>
      <BookList onSelectBook={setSelectedBook} />
      <StatusBar style="dark" />
    </>
  );
}
