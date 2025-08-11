import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import JumbotronItem from "./JumbotronItem";
import JumbotronSkeleton from "./JumbotronSkeleton";

const Jumbotron = ({ movies }) => {
    return (
        <>
            {movies.length == 0 && <JumbotronSkeleton />}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <JumbotronItem movie={movie} />
                    </SwiperSlide>
                ))}

                {/* Custom navigation buttons */}
                <div className="custom-prev left-4 top-1/2 -translate-y-1/2">
                    ❮
                </div>
                <div className="custom-next right-4 top-1/2 -translate-y-1/2">
                    ❯
                </div>
            </Swiper>
        </>
    )
}

export default Jumbotron;