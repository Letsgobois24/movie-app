import Badge from '../Elements/Badge';
import Skeleton from 'react-loading-skeleton';

const BadgeList = ({ genres, count }) => {
    return (
        <div className='flex gap-2 overflow-x-scroll scrollbar-hide'>
            {genres.length == 0 && <BadgeListSkeleton count={count} />}
            {genres.map(genre => (
                <Badge key={genre.id} genre={genre} />
            ))}
        </div>
    );
}

const BadgeListSkeleton = ({count = 14}) => {
    return (
        <>
            {Array(count).fill(0).map(genre => (
                <Skeleton width={70} height={28} />
            ))}
        </>
    );
}

export default BadgeList;