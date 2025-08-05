import SidebarList from "../Fragments/SidebarList";

const Sidebar = ({ isOpen, onClickToggle }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-68 bg-gray-800 text-white p-4 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Tombol tutup */}
      <div
        onClick={onClickToggle}
        className="text-2xl absolute right-2 top-2 w-12 h-12 cursor-pointer rounded-full hover:bg-slate-600 flex justify-center items-center"
      >
        ☰
      </div>

      <h2 className="text-xl font-bold mt-0.5 mb-6 mx-2">My Sidebar</h2>
      <SidebarList />
      
    </aside>
  );
};

export default Sidebar;