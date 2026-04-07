import ListedHeader from "../components/sections/ListedHeader";
import SortMenu from "../components/ui/SortMenu";
import BookCard from "../components/ui/BookCard";
import useBookVibe from "../hooks/useBookVibe";
import NoBookListed from "../components/ui/NoBookListed";

const ListedBooks = () => {
  const { readBooks, wishlistBooks, setSelectedTab ,selectedTab} = useBookVibe();
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <ListedHeader />

      {/* Tabs */}
      <div className="px-2 lg:px-0">
        <div role="tablist" className="tabs tabs-lift">
          {/* Read Tab */}
          <input
            type="radio"
            name="tabs"
            role="tab"
            className="tab text-base lg:text-lg font-semibold text-gray-600"
            aria-label="Read Books"
            checked={selectedTab === "read"}
            onChange={() => setSelectedTab("read")}
          />

          {/* Wishlist Tab */}
          <input
            type="radio"
            name="tabs"
            role="tab"
            className="tab text-base lg:text-lg font-semibold text-gray-600"
            aria-label="Wishlist Books"
            checked={selectedTab === "wishlist"}
            onChange={() => setSelectedTab("wishlist")}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-base-100 border-base-300 border-b-0 border-x-0 p-2 flex flex-col gap-6">
          {/* READ BOOKS */}
          {selectedTab === "read" &&
            (readBooks?.length === 0 ? (
              <NoBookListed />
            ) : (
              readBooks.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))
            ))}

          {/* WISHLIST BOOKS */}
          {selectedTab === "wishlist" &&
            (wishlistBooks?.length === 0 ? (
              <NoBookListed />
            ) : (
              wishlistBooks.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
