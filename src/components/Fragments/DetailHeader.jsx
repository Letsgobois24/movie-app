import Title from '../Elements/Title';
import Icon from '../Elements/Icon';
import Button from '../Elements/Button';
import BadgeList from './BadgeList';
import { useWatchList } from '../../context/WatchListContext';

const DetailHeader = ({ movie }) => {
    const { addToWatchList } = useWatchList();
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;

    return (
        <section className="flex flex-col md:flex-row w-full items-center">
            <img className="object-cover w-full rounded-lg md:min-h-96 md:w-64" src={movie.poster_path ? BASEIMG + movie.poster_path : '/image/no-image.png'} alt="" />
            <div className="flex flex-col py-4 px-0 md:px-8 leading-normal">
                <div className='mb-2 flex md:flex-row flex-col md:items-center justify-between'>
                    <div>
                        <Title size='4xl'>{movie.title}</Title>
                    </div>
                    <div>
                        <div className='flex items-center mt-4 md:mt-0 min-h-12'>
                            <Icon icon='star' size='36' className='text-yellow-300 mr-1' />
                            <h3 className='text-3xl mr-1.5 font-semibold'>{movie.vote_average}</h3>
                            <span className='self-end text-xl text-gray-700'>/10</span>
                        </div>
                        <p className='text-gray-600 text-xs'>{movie.vote_count} peoples rated</p>
                    </div>
                </div>
                <div className='mb-3'>
                    <BadgeList genres={movie.genres} />
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