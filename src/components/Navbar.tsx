import Toggle from "./form/Toggle";
const Navbar = () => {
  return (
    <nav className="py-4 border-b shadow-cyan-500/50 sticky top-0 bg-white shadow-lg">
      <div className="container md:flex justify-between items-center">
        <h2 className="text-gray-500 font-semibold text-lg">
          Pakan <span className="text-amber-700">Ternak</span>
        </h2>

        <ul className="hidden text-gray-600 md:flex items-center gap-12">
          <li>
            <Toggle />
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
