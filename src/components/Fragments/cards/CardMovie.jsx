import { Link } from "react-router-dom";

const CardMovie = ({title, imgPath}) => {
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;
    
    return (
        <div className="swiper bg-light group hover:bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition duration-250">
            <Link to="#">
            <div className="overflow-hidden">
                <img className="rounded-t-lg group-hover:scale-125 transition duration-250" src={BASEIMG + imgPath} alt="" />
            </div>
            </Link>
            <Link to="#" className="p-5 inline-block w-full">
                <h5 className="min-h-24 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
        </div>
    )
}

export default CardMovie;