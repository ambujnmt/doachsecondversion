import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "@mui/material/Container";



export default function StateSlider() {
    return (
        <Container maxWidth="lg">
            <h3 className="text-3xl text-center font-bold text-white mb-8">Find Your NFTC Location</h3>

            <Swiper
                modules={[Navigation]}
                navigation
                loop={false}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1, 
                    },
                    640: {
                        slidesPerView: 2, 
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="text-center">
                        <img src="https://image.newyork.co.uk/wp-content/uploads/2024/07/What-to-do-in-New-York-the-best-attractions-Helicopter-Flight.jpg.webp" alt="image" className="w-[100%] h-[250px] object-cover" />
                        <p className="p-[12px] rounded-full mt-2 !border-yellow-500 cursor-pointer text-[#000] hover:bg-[#000] duration-300 hover:text-[#fff] bg-[#FFC32B] font-semibold"> View Location </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img src="https://columbusregion.com/wp-content/uploads/2022/08/Homepage_HERO-2.jpg" alt="image" className="w-[100%] h-[250px] object-cover" />
                        <p className="p-[12px] rounded-full mt-2 !border-yellow-500 cursor-pointer text-[#000] hover:bg-[#000] duration-300 hover:text-[#fff] bg-[#FFC32B] font-semibold"> View Location </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img src="https://kommwirmachendaseinfach.de/wp-content/uploads/2019/07/highlights-singapur-marina-bay-sands-hotel.jpg" alt="image" className="w-[100%] h-[250px] object-cover" />
                        <p className="p-[12px] rounded-full mt-2 !border-yellow-500 cursor-pointer text-[#000] hover:bg-[#000] duration-300 hover:text-[#fff] bg-[#FFC32B] font-semibold"> View Location </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/-1x-1.webp" alt="image" className="w-[100%] h-[250px] object-cover" />
                        <p className="p-[12px] rounded-full mt-2 !border-yellow-500 cursor-pointer text-[#000] hover:bg-[#000] duration-300 hover:text-[#fff] bg-[#FFC32B] font-semibold"> View Location </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
