import React from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import "./Content.css";
import content from "../image/content.jpg";
import content1 from "../image/content1.jpg";
import content2 from "../image/content2.jpg";
import content3 from "../image/content3.jpg";

const container = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Content = () => {
  return (
    <div>
      {/* <motion.div
        className="hidden lg:grid  py-81 lg:grid-cols-4 text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
      >
        <div class="container relative ">
          <img src={content} alt="Avatar" class="image" />
          <h3 className="absolute top-8 left-16 text-3xl">David Yassky</h3>
          <div class="overlay text-left pl-8 relative">
            <div class="my-8 ">
              <p className="text-3xl">David Yassky</p>
              <p>PARTNER PRESIDENT</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia pariatur dolorem fugit ratione veritatis
                inventore minima at incidunt harum vel laborum nihil dicta enim
                eos, animi, aspernatur necessitatibus nulla!
              </p>
            </div>

            <div className="snip1135 absolute top-72 left-2">
              <li>
                <a href="#">READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div class="container relative ">
          <img src={content1} alt="Avatar" class="image" />
          <h3 className="absolute top-8 left-16 text-3xl">Jacquelyn Laufer</h3>
          <div class="overlay text-left pl-8 relative">
            <div class="my-8 ">
              <p className="text-3xl">Jacquelyn Laufer</p>
              <p>PARTNER COO, HEAD OF ECOMMERCE</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia pariatur dolorem fugit ratione veritatis
                inventore minima at incidunt harum vel laborum nihil dicta enim
                eos, animi, aspernatur necessitatibus nulla!
              </p>
            </div>

            <div className="snip1135 absolute top-72 left-2 mt-8">
              <li>
                <a href="#">READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div class="container relative ">
          <img src={content2} alt="Avatar" class="image" />
          <h3 className="absolute top-8 left-16 text-3xl">Mark Perini</h3>
          <div class="overlay text-left pl-8 relative">
            <div class="my-8 ">
              <p className="text-3xl">Mark Perini</p>
              <p>CONSULTING CTO</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia pariatur dolorem fugit ratione veritatis
                inventore minima at incidunt harum vel laborum nihil dicta enim
                eos, animi, aspernatur necessitatibus nulla!
              </p>
            </div>

            <div className="snip1135 absolute top-72 left-2">
              <li>
                <a href="#">READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div class="container relative ">
          <img src={content3} alt="Avatar" class="image" />
          <h3 className="absolute top-8 left-16 text-3xl">Tina Liberty</h3>
          <div class="overlay text-left pl-8 relative">
            <div class="my-8 ">
              <p className="text-3xl">Tina Liberty</p>
              <p>LEAD DESIGNER</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia pariatur dolorem fugit ratione veritatis
                inventore minima at incidunt harum vel laborum nihil dicta enim
                eos, animi, aspernatur necessitatibus nulla!
              </p>
            </div>

            <div className="snip1135 absolute top-72 left-2">
              <li>
                <a href="#">READ MORE</a>
              </li>
            </div>
          </div>
        </div>
      </motion.div> */}

      <div className="hidden lg:grid grid-cols-1 text-white">
        <Swiper
          slidesPerView={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 1000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="container relative ">
              <img src={content} alt="Avatar" class="image" />
              <h3 className="absolute top-8 left-16 text-3xl">David Yassky</h3>
              <div class="overlay text-left pl-8 relative">
                <div class="my-8 ">
                  <p className="text-3xl">David Yassky</p>
                  <p>PARTNER PRESIDENT</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container relative w-full">
              <div className="w-full">
                <img src={content1} alt="Avatar" class="image" />
                <h3 className="absolute top-8 left-16 text-3xl">
                  Jacquelyn Laufer
                </h3>
              </div>
              <div class="overlay text-left pl-8 relative w-full">
                <div class="my-8 ">
                  <p className="text-3xl">Jacquelyn Laufer</p>
                  <p>PARTNER COO, HEAD OF ECOMMERCE</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2 mt-8  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container relative ">
              <img src={content2} alt="Avatar" class="image" />
              <h3 className="absolute top-8 left-16 text-3xl">Mark Perini</h3>
              <div class="overlay text-left pl-8 relative">
                <div class="my-8 ">
                  <p className="text-3xl">Mark Perini</p>
                  <p>CONSULTING CTO</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container relative ">
              <img src={content3} alt="Avatar" class="image" />
              <h3 className="absolute top-8 left-16 text-3xl">Tina Liberty</h3>
              <div class="overlay text-left pl-8 relative">
                <div class="my-8 ">
                  <p className="text-3xl">Tina Liberty</p>
                  <p>LEAD DESIGNER</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:hidden grid sm:grid-cols-1 md:grid-cols-1 text-white">
        <Swiper
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 1000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="container relative ">
              <img src={content} alt="Avatar" class="image" />
              <h3 className="absolute top-8 left-16 text-3xl">David Yassky</h3>
              <div class="overlay text-left pl-8 relative">
                <div class="my-8 ">
                  <p className="text-3xl">David Yassky</p>
                  <p>PARTNER PRESIDENT</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container relative w-full">
              <div className="w-full">
                <img src={content1} alt="Avatar" class="image" />
                <h3 className="absolute top-8 left-16 text-3xl">
                  Jacquelyn Laufer
                </h3>
              </div>
              <div class="overlay text-left pl-8 relative w-full">
                <div class="my-8 ">
                  <p className="text-3xl">Jacquelyn Laufer</p>
                  <p>PARTNER COO, HEAD OF ECOMMERCE</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2 mt-8  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container relative ">
              <img src={content2} alt="Avatar" class="image" />
              <h3 className="absolute top-8 left-16 text-3xl">Mark Perini</h3>
              <div class="overlay text-left pl-8 relative">
                <div class="my-8 ">
                  <p className="text-3xl">Mark Perini</p>
                  <p>CONSULTING CTO</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container relative ">
              <img src={content3} alt="Avatar" class="image" />
              <h3 className="absolute top-8 left-16 text-3xl">Tina Liberty</h3>
              <div class="overlay text-left pl-8 relative">
                <div class="my-8 ">
                  <p className="text-3xl">Tina Liberty</p>
                  <p>LEAD DESIGNER</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quia pariatur dolorem fugit ratione veritatis
                    inventore minima at incidunt harum vel laborum nihil dicta
                    enim eos, animi, aspernatur necessitatibus nulla!
                  </p>
                </div>

                <div className="snip1135 absolute top-72 left-2  ">
                  <li>
                    <a href="#">READ MORE</a>
                  </li>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Content;
