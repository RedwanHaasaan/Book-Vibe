import { useParams } from "react-router-dom";
import useBookVibe from './../hooks/useBookVibe';

export default function BookDetails() {
    const { id } = useParams();
    const {LoadBookDetails, error, addToReadBooks,addToWishlistBooks} = useBookVibe();
    const book = LoadBookDetails(id);
    
  //Error Handling
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full container mx-auto px-4">
      
      {/* Image Section */}
      <div className="w-full lg:w-2/5 flex justify-center items-center bg-base-200 rounded-2xl p-6">
        <img
          src={book.image}
          className="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-3/5">
        
        {/* Title */}
        <div className="flex flex-col gap-3 lg:gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-playfair line-clamp-2">
            {book.bookName}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-600">
            By: {book.author}
          </p>
        </div>

        <div className="divider"></div>

        {/* Category */}
        <div>
          <h1 className="text-lg sm:text-xl font-medium text-gray-700">
            {book.category}
          </h1>
        </div>

        <div className="divider"></div>

        {/* Review */}
        <div className="text-sm sm:text-base text-work">
          <span className="font-bold text-gray-800">Review: </span>
          <span className="font-normal text-gray-400">
            {book.review}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-col sm:flex-row gap-2 mt-6">
          <span className="font-bold">Tag</span>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {book?.tags?.map((tag, index) => (
              <div
                key={index}
                className="badge badge-soft badge-success font-semibold"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        {/* Book Info */}
        <div className="flex flex-col gap-3 max-w-full sm:max-w-md text-work text-sm sm:text-base">
          
          <div className="flex justify-between gap-6">
            <h1 className="text-gray-600">Number of Pages:</h1>
            <p className="font-semibold text-gray-900">{book.totalPages}</p>
          </div>

          <div className="flex justify-between gap-6">
            <h1 className="text-gray-600">Publisher:</h1>
            <p className="font-semibold text-gray-900">
              {book.publisher}
            </p>
          </div>

          <div className="flex justify-between gap-6">
            <h1 className="text-gray-600">Year of Publishing:</h1>
            <p className="font-semibold text-gray-900">{book.yearOfPublishing}</p>
          </div>

          <div className="flex justify-between gap-6">
            <h1 className="text-gray-600">Rating:</h1>
            <p className="font-semibold text-gray-900">{book.rating}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <a onClick={()=> addToReadBooks(book)} className="btn btn-outline border-gray-400 font-bold w-full sm:w-auto px-7 py-5">
            Read
          </a>
          <a onClick={()=> addToWishlistBooks(book)} className="btn btn-info text-white bg-sky-400 font-bold w-full sm:w-auto px-7 py-5">
            Wishlist
          </a>
        </div>

      </div>
    </div>
  );
}