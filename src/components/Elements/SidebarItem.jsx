import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const SidebarItem = ({ to = '#', icon, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
      isActive
      ? "bg-gray-700 px-2 py-2 rounded flex gap-3"
      : "hover:bg-gray-700 px-2 py-2 rounded flex gap-3"
      }
    >
      <Icon icon={icon} size="24" />
      <span>{children}</span>
    </NavLink>
  )
}

export default SidebarItem;