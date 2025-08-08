import SidebarList from "../Fragments/SidebarList";

const Sidebar = ({ isOpen, onClickToggle }) => {
  return (
    <aside
      className={`p-4 fixed inset-y-0 left-0 transform bg-dark text-light transition-transform duration-300 ease-in-out
          w-68 md:translate-x-0 md:relative z-15
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Tombol tutup */}
      <div
        onClick={onClickToggle}
        className="text-2xl absolute right-2 top-2 w-12 h-12 cursor-pointer rounded-full hover:bg-slate-600 flex justify-center items-center md:hidden"
      >
        ☰
      </div>

      <h2 className="text-xl font-bold mt-0.5 mb-6 mx-2">Movie App</h2>
      <SidebarList />
      
    </aside>
  );
};

export default Sidebar;