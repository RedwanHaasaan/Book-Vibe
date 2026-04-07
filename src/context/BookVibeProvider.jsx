import { BookVibeContext } from "./BookVibeContext";
import { useState, useEffect } from "react";
const BookVibeProvider = ({ children }) => {
  //State
  const [Books, setBooks] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [selectedTab, setSelectedTab] = useState("read");
  const [sortBy, setSortBy] = useState("");
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

  //Read Books and Wishlist Books management
  const addToReadBooks = (book)=>{
    setReadBooks((prevBooks)=> [...prevBooks, book]);
  };

  const addToWishlistBooks = (book)=>{
    setWishlistBooks((prevBooks)=> [...prevBooks, book]);
  };

  //Sorting Logic
  const getSortedBooks = (books) =>{
    if(!sortBy) return books;
    const sortedBooks = [...books];
    
    switch(sortBy){
      case "rating":
        return sortedBooks.sort((a,b)=> b.rating - a.rating);
      case "pages":
        return sortedBooks.sort((a,b)=> b.totalPages - a.totalPages);
      case "year":
        return sortedBooks.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
      default:
        return books;
    }
  }
  //Context Value
  const contextValue = {
    Books,
    LoadBookDetails,
    Loading,
    error,
    isOpen,
    setIsOpen,
    readBooks,
    addToReadBooks,
    wishlistBooks,
    addToWishlistBooks,
    selectedTab,
    setSelectedTab,
    sortBy,
    setSortBy,
    getSortedBooks
  };
  return (
    <BookVibeContext.Provider value={contextValue}>
      {children}
    </BookVibeContext.Provider>
  );
};

export default BookVibeProvider;
