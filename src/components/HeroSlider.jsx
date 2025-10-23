import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        src: "https://i.ibb.co.com/cKBbFSWR/Slider-1.jpg",
        title: "Learn Web Development",
        subtitle: "HTML, CSS, JavaScript and more.",
    },
    {
        id: 2,
        src: "https://i.ibb.co.com/vxmxdPKs/Slider-2.jpg",
        title: "Modern JavaScript",
        subtitle: "ES6+ features with hands-on practice.",
    },
    {
        id: 3,
        src: "https://i.ibb.co.com/TqF86vDc/Slider-3.jpg",
        title: "TypeScript for React",
        subtitle: "Stronger types for safer apps.",
    },
];

const HeroSlider = () => {
    return (
        <div className="my-6">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop
                speed={700}
                grabCursor
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                className="rounded-xl overflow-hidden shadow"
            >
                {
                    slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px]">
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* subtle dark overlay */}
                                <div className="absolute inset-0 bg-black/30" />

                                <div className="absolute inset-x-0 bottom-6 md:bottom-10 px-4 md:px-8 text-white">
                                    <h2 className="text-lg md:text-3xl font-bold drop-shadow">{slide.title}</h2>
                                    <p className="text-xs md:text-base opacity-90">{slide.subtitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeroSlider;
