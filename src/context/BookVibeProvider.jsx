import { BookVibeContext } from "./BookVibeContext";
import { useState, useEffect } from "react";
const BookVibeProvider = ({ children }) => {
  //State
  const [Books, setBooks] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //Load Books Data
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetch("/booksData.json");
        if (!res.ok) {
          throw new Error("Failed to fetch books data");
        }
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  //Book details page data loading
  const LoadBookDetails = (id)=>{
    try {
        const foundedBook = Books.find((book)=> book.bookId ===  parseInt(id));
        if(!foundedBook){
            throw new Error("Book not found");
        }
        return foundedBook;
    }
    catch(err){
        setError(err.message);
    }
  }

  //Context Value
  const contextValue = {
    Books,
    LoadBookDetails,
    Loading,
    error
  };
  return (
    <BookVibeContext.Provider value={contextValue}>
      {children}
    </BookVibeContext.Provider>
  );
};

export default BookVibeProvider;
