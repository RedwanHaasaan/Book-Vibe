const ListedHeader = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/944631208/photo/education-concept-with-book-in-library.jpg?s=612x612&w=0&k=20&c=uJF-uOU5MRR-iwXqJEPAdXeaH-VJ-nqt6TdKUpEdEkk=)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Book Collection</h1>
          <p className="mb-5">
            Explore all the books you’ve added to your collection. Keep track of
            your reading journey and manage your favorite titles in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListedHeader;
