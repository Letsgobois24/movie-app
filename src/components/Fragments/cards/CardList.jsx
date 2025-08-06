import CardMovie from "./CardMovie"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CardList = ({ movies }) => {

    return (
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
                    <CardMovie title={movie.original_title} imgPath={movie.poster_path} />
                </SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
            <div className="custom-prev left-0 top-1/2 -translate-y-1/2">
                ❮
            </div>
            <div className="custom-next right-0 top-1/2 -translate-y-1/2">
                ❯
            </div>
        </Swiper>
    )
}

export default CardList;