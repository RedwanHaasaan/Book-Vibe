import HeroSection from "../components/sections/HeroSection";
import BookSection from "../components/sections/BookSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mt-5 md:mt-10 flex flex-col gap-4 lg:gap-16">
        <h1 className="text-playfair font-bold text-4xl md:text-5xl text-center">
          Books
        </h1>
        <BookSection />
      </div>
    </>
  );
};

export default Home;
