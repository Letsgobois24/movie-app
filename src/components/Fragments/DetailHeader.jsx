import Title from '../Elements/Title';
import Icon from '../Elements/Icon';
import Button from '../Elements/Button';
import { useWatchList } from '../../context/WatchListContext';

const DetailHeader = ({ movie }) => {
    const { addToWatchList } = useWatchList();
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;
    return (
        <section className="flex flex-col md:flex-row w-full">
            <img className="object-cover w-full rounded-lg h-96 md:h-auto md:w-64" src={BASEIMG + movie.poster_path} alt="" />
            <div className="flex flex-col py-4 px-0 md:px-8 leading-normal">
                <div className='mb-4 flex md:flex-row flex-col md:items-center justify-between'>
                    <div>
                        <Title size='4xl'>{movie.title}</Title>
                        <div className='flex flex-wrap space-x-2 mt-2'>
                            {movie.genres?.map(genre => (
                                <a href="#" key={genre.id} className="bg-gray-100 hover:bg-gray-200 text-dark text-sm font-semibold px-2.5 py-1 rounded-lg border border-gray-400 inline-flex items-center justify-center shadow">{genre.name}</a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center mt-4 md:mt-0'>
                            <Icon icon='star' size='36' className='text-yellow-300 mr-1' />
                            <h3 className='text-3xl mr-1.5 font-semibold'>{movie.vote_average}</h3>
                            <span className='self-end text-xl text-gray-700'>/10</span>
                        </div>
                        <span className='text-gray-600 text-sm'>{movie.vote_count} peoples rated</span>
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700">{movie.overview}</p>
                <div className='flex space-x-3 mt-1'>
                    <Button color='blue'>
                        <Icon icon="play" size="24" className="text-white mr-1" />
                        Play
                    </Button>
                    <Button color='yellow' onClick={() => addToWatchList(movie)}>
                        <span className='text-xl mr-2'>+</span>Add to Watchlist
                    </Button>

                </div>
                <div className='flex items-center'>
                </div>
            </div>
        </section>
    );
}

export default DetailHeader;