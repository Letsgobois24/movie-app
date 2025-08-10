import Badge from '../Elements/Badge';

const BadgeList = ({genres}) => {
    return (
        <div className='flex gap-2 overflow-x-scroll scrollbar-hide'>
            {genres ?.map(genre => (
                <Badge key={genre.id} genre={genre} />
            ))}
        </div>
    );
}

export default BadgeList;