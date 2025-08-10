import { Link } from "react-router-dom";

const Badge = ({ genre }) => {
    return (
        <Link
            to={`/search?genre=${genre.id}`}
            state={{genreName: genre.name}}
            className="whitespace-nowrap py-1 bg-gray-100 hover:bg-gray-200 text-dark text-sm font-semibold px-2.5 rounded-lg border border-gray-400 inline-flex items-center justify-center shadow"
        >
            {genre.name}
        </Link>
    );
}

export default Badge;