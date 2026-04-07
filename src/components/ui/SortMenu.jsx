import { ChevronDown, ChevronUp } from "lucide-react";
import useBookVibe from './../../hooks/useBookVibe';

const SortMenu = () => {
    const {isOpen,setIsOpen}=useBookVibe();
  return (
    <div className="relative inline-block">
      
      {/* Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="btn btn-success text-white flex items-center gap-2"
      >
        Sort By {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute mt-2 w-52 bg-base-100 rounded-box shadow z-50 p-2">
          <li>
            <button className="w-full text-left hover:bg-base-200 px-2 py-1 rounded">
              Rating
            </button>
          </li>
          <li>
            <button className="w-full text-left hover:bg-base-200 px-2 py-1 rounded">
              Number of Pages
            </button>
          </li>
          <li>
            <button className="w-full text-left hover:bg-base-200 px-2 py-1 rounded">
              Publishing Year
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortMenu;