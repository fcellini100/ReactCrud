import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 h-6 sm:mb-0">
        <NavLink
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:cursor-pointer"
        >
          <span>Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/companies"
          className="text-lg no-underline text-grey-darkest ml-2 hover:cursor-pointer"
        >
          <span className={"hidden [&.active]:block"}>&gt; </span>
          Companies
        </NavLink>
        <NavLink
          to="/employees"
          className="text-lg no-underline text-grey-darkest ml-2 hover:cursor-pointer"
        >
          Employees
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
