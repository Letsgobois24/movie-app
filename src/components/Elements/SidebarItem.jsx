import { Link } from "react-router-dom";

const SidebarItem = ({to = '#', icon, children }) => {
    return (
        <Link to={to} className="hover:bg-gray-700 px-2 py-2 rounded flex gap-3">
          <img className="text-white" src="icons/user-circle.svg" alt="" />
          <span>{children}</span>
        </Link>
    )
}

export default SidebarItem;