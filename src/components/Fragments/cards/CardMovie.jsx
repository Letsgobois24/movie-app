import { Link } from "react-router-dom";

const CardMovie = ({title, imgPath}) => {
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;
    
    return (
        <div className="swipermax-w-60 hover:scale-102 bg-light hover:bg-white border border-gray-200 rounded-lg shadow-sm">
            <Link to="#">
                <img className="rounded-t-lg" src={BASEIMG + imgPath} alt="" />
            </Link>
            <Link to="#" className="p-5 inline-block w-full">
                <h5 className="min-h-24 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
        </div>
    )
}

export default CardMovie;