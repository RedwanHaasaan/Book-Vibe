import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";
import useBookVibe from "../../hooks/useBookVibe";
const NoBookListed = () => {
    const {selectedTab}= useBookVibe();
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 text-center gap-4 border border-gray-300 rounded-lg">
      {/* Book Icon */}
      <BookOpen className="w-14 h-14 text-gray-400" />

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
        No Books Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base max-w-md">
        You haven’t added any books to your {selectedTab === "read" ? "read book list" : "wishlist"} yet.
      </p>

      {/* Button */}
      <Link to="/" className="btn btn-success rounded-full text-white px-6">
        Browse Books
      </Link>
    </div>
  );
};

export default NoBookListed;
