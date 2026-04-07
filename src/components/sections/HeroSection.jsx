import { Link } from "react-router";
import BookImage from "../../assets/HeroImage.jpg"
const HeroSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-5">
      <div className="hero bg-base-200 text-playfair py-12 sm:py-16 lg:py-24 rounded-2xl lg:rounded-3xl">
        <div className="hero-content flex flex-col md:flex-row-reverse gap-10 lg:gap-16">
          {/* Image */}
          <img
            src={BookImage}
            alt="Books"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-xl rounded-lg xl:shadow-2xl"
          />
          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">
              Books to freshen up your bookshelf
            </h1>
            <Link
              to="/listedbooks"
              className="inline-block bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl font-bold rounded-md w-full sm:w-fit text-center hover:bg-green-600 transition-all duration-200">
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;