import { NavLink } from "react-router";
const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Listed Books", path: "/listedbooks" },
    { name: "Pages to Read", path: "/pagestoread" },
  ];
  const navClass =
    "px-4 py-2 border rounded-md text-gray-600 hover:border-green-500 hover:text-green-500 transition-all duration-200 cursor-pointer";
  return (
    <div className="navbar bg-base-100 shadow-sm text-work sticky top-0 z-50 lg:px-10 xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Reads</a>
            </li>
            <div className="flex flex-row gap-4 pt-5">
              <a className="btn btn-success text-white">Sign In</a>
              <a className="btn btn-info text-white">Sign Up</a>
            </div>
          </ul>
        </div>
        <a className="text-md md:text-xl lg:text-2xl xl:text-3xl text-work font-bold">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 font-normal flex gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${navClass} ${
                    isActive ? "border-green-500 text-green-500" : "border-transparent"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4 hidden md:flex">
        <a className="btn btn-success text-white">Sign In</a>
        <a className="btn btn-info text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;