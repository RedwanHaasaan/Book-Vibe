import { Link } from "react-router";
import { MapPin, UsersRound, NotebookText } from "lucide-react";

const BookCard = ({ book }) => {

  return (
    <div className="w-full p-2 sm:p-4 md:p-6 bg-white rounded-lg flex flex-col lg:flex-row gap-5 border border-gray-200 items-center">

      {/* Image Section */}
      <div className="bg-gray-100 rounded-2xl px-6 sm:px-10 md:px-14 py-6 flex justify-center items-center w-full lg:w-auto">
        <img
          src={book.image}
          className="h-40 sm:h-48 md:h-52 w-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 gap-4 w-full">

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-playfair line-clamp-2">
            {book.bookName}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-600">
            By: {book.author}
          </p>
        </div>

        {/* Tags + Year */}
        <div className="flex flex-col gap-4 md:flex-row lg:items-center lg:justify-start">

          {/* Tags */}
          <div className="flex flex-row items-center gap-2">
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              Tag
            </span>

            <div className="flex flex-wrap gap-2">
              {book.tags?.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-soft badge-success text-xs sm:text-sm font-semibold"
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>

          {/* Year */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <MapPin className="w-4 sm:w-5" />
            <span className="font-medium">Year:</span>
            <span className="font-semibold text-gray-900">{book.yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher + Pages */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">

          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <UsersRound className="w-4 sm:w-5" />
            <span className="font-medium">Publisher:</span>
            <span>{book.publisher}</span>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
            <NotebookText className="w-4 sm:w-5" />
            <span className="font-medium">Pages:</span>
            <span>{book.totalPages}</span>
          </div>

        </div>

        <div className="divider my-2"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between xl:justify-start">

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-soft badge-info py-2 sm:py-3 px-3 sm:px-4 rounded-full text-sm sm:text-base">
              <span className="font-semibold">Category:</span>
              <span className="ml-1">{book.category}</span>
            </div>

            <div className="badge badge-soft badge-warning py-2 sm:py-3 px-3 sm:px-4 rounded-full text-sm sm:text-base">
              <span className="font-semibold">Rating:</span>
              <span className="ml-1">{book.rating}/5</span>
            </div>
          </div>

          <Link to={`/bookdetails/${book.bookId}`} className="btn btn-success rounded-full text-white text-sm sm:text-base px-4 sm:px-6">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;