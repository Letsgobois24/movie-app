import Badge from '../Elements/Badge';

const BadgeList = ({genres}) => {
    return (
        <div className='flex flex-wrap gap-2'>
            {genres ?.map(genre => (
                <Badge key={genre.id}>{genre.name}</Badge>
            ))}
        </div>
    );
}

export default BadgeList;