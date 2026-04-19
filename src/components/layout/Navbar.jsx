import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";


const Navbar = () => {
  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full theme-dark:bg-gray-900 theme-dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between bg-white theme-dark:bg-gray-900 text-black theme-dark:text-white">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-green-600">
          FinanceLearn
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600 theme-dark:text-gray-300 hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600 theme-dark:text-gray-300 hover:text-green-600"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600 theme-dark:text-gray-300 hover:text-green-600"
            }
          >
            Quiz
          </NavLink>

          <NavLink
            to="/policies"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600 theme-dark:text-gray-300 hover:text-green-600"
            }
          >
            Policies
          </NavLink>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
<div className="flex items-center gap-3">
  <ThemeToggle />
</div>
          

          {/* Buttons */}
          <Link
            to="/login"
            className="text-sm text-gray-600 theme-dark:text-gray-300 hover:text-green-600"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-green-600"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </header>
        {/* Search 
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border rounded-lg px-3 py-1 text-sm"
          />*/}
          </>
  );
};

export default Navbar;