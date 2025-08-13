import SidebarItem from "../Elements/SidebarItem";

const SidebarList = () => {
    return (
        <nav className="flex flex-col space-y-2">
            <SidebarItem to="/" icon='home' >
                Home
            </SidebarItem>
            {/* <SidebarItem to="/profile" icon='profile' >
                Profile
            </SidebarItem> */}
        </nav>
    );
}

export default SidebarList;