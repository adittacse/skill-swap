import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

const HeroSlider = () => {
    const image1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";
    const image2 = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop";
    const image3 = "";
    return (
        <div className="my-6">
            <Swiper modules={[Autoplay, Pagination]}
                    spaceBetween={5}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{delay: 5000}}
                    pagination={{ clickable: true }}
                >
                <SwiperSlide>
                    <div className="hero min-h-[0px] bg-base-200 rounded-xl">
                        <div className="hero-content text-center">
                            <img className="w-full h-[400px]" src={image1} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero max-h-[100px] bg-base-200 rounded-xl">
                        <div className="hero-content text-center">
                            <img className="w-full h-[400px]" src={image2} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;