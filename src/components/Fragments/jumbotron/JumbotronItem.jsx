import { Link } from "react-router-dom";

const JumbotronItem = ({ movie }) => {
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;

    return (
        <section className="bg-center h-[calc(100vh-64px)] bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover" style={{ backgroundImage: `url(${BASEIMG + movie.backdrop_path})` }}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-40">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl min-h-20 flex items-center justify-center">{movie.title}</h1>
                <p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{movie.overview.substring(0, 120)}...</p>
                <div className="mb-4 flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ms-2 text-sm font-bold text-light">{movie.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-300 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-light underline hover:no-underline">{movie.vote_count} reviews</a>
                </div>
                <div className="flex space-x-3 sm:flex-row justify-center sm:space-y-0">
                    <Link to="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z" /></svg>
                        Play
                    </Link>
                    <Link to="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Detail
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default JumbotronItem;