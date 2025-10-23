import Logo from "../../assets/MealsNaija.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ImMenu3 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <nav className="flex items-center justify-around px-4 md:px-8 py-3 max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="MealsNaija" className="h-16 w-16 md:h-20 md:w-20" />
        </a>
          <div className="hidden md:flex items-center gap-8 text-white text-sm lg:text-base font-medium">
            <a href="/" smooth duration={500} className="nav-link">
              Home
            </a>
            <a href="#about" smooth duration={500} className="nav-link">
              About
            </a>
            <a href="#features" smooth duration={500} className="nav-link">
              Features
            </a>
            <a href="#menu" smooth duration={500} className="nav-link">
              Menu
            </a>
            <a href="#gallery" smooth duration={500} className="nav-link">
              Product Gallery
            </a>
            <a href="#reviews" smooth duration={500} className="nav-link">
              Reviews
            </a>
        </div>

        <div className="button hidden md:flex items-center text-white">
          <a
            href="#contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-center font-semibold py-2 px-4 rounded cursor-pointer transition"
          >
            Book Now
            <IoIosArrowDroprightCircle className="text-xl translate-y-[1px]" />
          </a>
        </div>

        
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <IoMdClose /> : <ImMenu3 />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 text-white flex flex-col items-center gap-4 py-6">
          <a href="#home" smooth duration={500} className="nav-link">
              Home
            </a>
            <a href="#about" smooth duration={500} className="nav-link">
              About
            </a>
            <a href="#menu" smooth duration={500} className="nav-link">
              Menu
            </a>
            <a href="#gallery" smooth duration={500} className="nav-link">
              Product Gallery
            </a>
            <a href="#reviews" smooth duration={500} className="nav-link">
              Reviews
            </a>
            <a href="#contact" smooth duration={500} className="nav-link">
              Contact
            </a>

          <a
            href="#contact"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 rounded-full transition"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
