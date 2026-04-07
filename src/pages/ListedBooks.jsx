import React from "react";
import ListedHeader from "../components/sections/ListedHeader";
import SortMenu from "../components/ui/SortMenu";
import BookCard from "../components/ui/BookCard";

const ListedBooks = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <ListedHeader />
      </div>
      <div className="px-2 lg:px-0">
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-base lg:text-lg font-semibold text-gray-600"
            aria-label="Read Books"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 border-b-0 border-x-0 p-2">
            <BookCard/>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-base lg:text-lg font-semibold text-gray-600"
            aria-label="Wishlist Books"
          />
          <div className="tab-content bg-base-100 border-base-300 border-b-0 border-x-0 p-6">
            Tab content 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
