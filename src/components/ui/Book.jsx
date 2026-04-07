import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/bookdetails/${book.bookId}`}>
      <div className="w-xs p-6 rounded-2xl border border-gray-300 flex flex-col gap-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] cursor-pointer">
        <div className="bg-gray-100 rounded-2xl px-24 py-9 flex justify-center items-center h-52">
          <img src={book.image} className="h-40 w-28 object-cover" />
        </div>
        <div className="flex flex-col gap-4 text-work">
          <div className="flex gap-2 flex-wrap">
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-soft badge-success font-semibold"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-playfair font-bold text-2xl line-clamp-2">
              {book.bookName}
            </h1>
            <p className="text-base font-medium text-gray-600">
              By: {book.author}
            </p>
          </div>
          <hr className="border-t border-dashed border-gray-300" />
          <div className="flex justify-between text-base font-medium text-gray-700">
            <span>{book.category}</span>
            <div className="flex flex-row gap-1">
              <span>{book.rating}</span>
              <div className="rating">
                <div className="mask mask-star" aria-label="1 star"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
