import { useState } from "react";
import SectionTitle from "../../Shired/SectionTitle";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="my-24">
      <SectionTitle subHeading={"Testimonial"} heading={"Our Students Say!"} />

      <div className="max-w-7xl mx-auto mt-10 bg-[#1e8fff2a] p-5 rounded-sm">
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          loop={true}
          className="mySwiper2"
        >
          <SwiperSlide className="text-center  p-5">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#1E90FF] p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
            />
            <h4 className="text-2xl mt-4">Alisa</h4>
            <p className="w-3/4 mx-auto text-gray-500 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est
              suscipit a accusantium, officiis, eos alias vitae recusandae
              consequatur earum assumenda. Deleniti iure itaque quod natus
              sapiente, officia corporis omnis.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#1E90FF] p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
            />
            <h4 className="text-2xl mt-4">Alisa</h4>
            <p className="w-3/4 mx-auto text-gray-500 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est
              suscipit a accusantium, officiis, eos alias vitae recusandae
              consequatur earum assumenda. Deleniti iure itaque quod natus
              sapiente, officia corporis omnis.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#1E90FF] p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
            />
            <h4 className="text-2xl mt-4">Alisa</h4>
            <p className="w-3/4 mx-auto text-gray-500 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est
              suscipit a accusantium, officiis, eos alias vitae recusandae
              consequatur earum assumenda. Deleniti iure itaque quod natus
              sapiente, officia corporis omnis.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#1E90FF] p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
            />
            <h4 className="text-2xl mt-4">Alisa</h4>
            <p className="w-3/4 mx-auto text-gray-500 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est
              suscipit a accusantium, officiis, eos alias vitae recusandae
              consequatur earum assumenda. Deleniti iure itaque quod natus
              sapiente, officia corporis omnis.
            </p>
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={1}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper mt-6 "
        >
          <div className="cursor-pointer mt-4">
            <SwiperSlide className="">
              <img
                className="w-10 h-10 mx-auto rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="w-10 h-10 mx-auto rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
              />
            </SwiperSlide>

            <SwiperSlide className="">
              <img
                className="w-10 h-10 mx-auto rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="w-10 h-10 mx-auto rounded-full object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2riP8voMUg0gwEjGair8TzZbeZW0IdxL6Q&s"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
