import { Link } from "react-router-dom";

const Badge = ({children}) => {
    return (
        <Link to="#" className="bg-gray-100 hover:bg-gray-200 text-dark text-sm font-semibold px-2.5 py-1 rounded-lg border border-gray-400 inline-flex items-center justify-center shadow">{children}</Link>
    );
}

export default Badge;