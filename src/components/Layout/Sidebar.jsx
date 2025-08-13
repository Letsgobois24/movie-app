import SidebarList from "../Fragments/SidebarList";
import NavbarButton from "../Elements/NavbarButton";

const Sidebar = ({ isOpen, onClickToggle }) => {
  return (
    <aside
      className={`p-4 fixed inset-y-0 left-0 transform bg-dark text-light transition-transform duration-300 ease-in-out
          w-68 md:translate-x-0 md:relative z-15
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <NavbarButton className='md:hidden absolute right-2 top-2' onClick={onClickToggle}>
        <span className="text-2xl">☰</span>
      </NavbarButton>
      
      <div className="mt-4 mb-8">
        <img src="/movie-logo.png" alt="Movie Logo" className="w-4/5 mx-auto" />
      </div>
      <SidebarList />

    </aside>
  );
};

export default Sidebar;