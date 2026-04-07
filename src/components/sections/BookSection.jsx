import useBookVibe from '../../hooks/useBookVibe';
import Book from '../ui/Book';
const BookSection = () => {
    const {Books, Loading, error}=useBookVibe();
    if (Loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-gray-500">Loading books...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
      {
        Books.map((book) => (
        <Book key={book.bookId} book={book} />
      ))
      }
    </div>
    );
};

export default BookSection;