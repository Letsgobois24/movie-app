import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import JumbotronItem from "./JumbotronItem";


const Jumbotron = ({movies}) => {
    console.log(movies);
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            pagination={{ clickable: true }}
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
    )
}

export default Jumbotron;