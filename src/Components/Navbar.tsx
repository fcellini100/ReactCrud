import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <NavLink
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark navbar-link"
        >
          🏠 Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/companies"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 navbar-link"
        >
          Companies
        </NavLink>
        <NavLink
          to="/employees"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 navbar-link"
        >
          Employees
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
