import CardMovie, { CardMovieSkeleton } from "./CardMovie"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CardList = ({ movies }) => {

    return (
        <>
            {movies.length === 0 && <CardListSkeleton count={4} />}
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    },
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <CardMovie movie={movie} />
                    </SwiperSlide>
                ))}

                {/* Custom navigation buttons */}
                <div className="custom-prev left-2 top-1/2 -translate-y-1/2">
                    ❮
                </div>
                <div className="custom-next right-2 top-1/2 -translate-y-1/2">
                    ❯
                </div>
            </Swiper>
        </>
    )
}

export default CardList;

export const CardListSkeleton = ({count}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-x-2.5'>
            {Array(count).fill(0).map(_ => <CardMovieSkeleton />)}
        </div>
    );
}