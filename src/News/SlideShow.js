import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import news1 from "../image/news1.jpg";
import news2 from "../image/news2.jpg";
import news3 from "../image/news3.jpg";
import news4 from "../image/news4.jpg";
import news5 from "../image/news5.jpg";
import "./SlideShow.css";

const SlideShow = () => {
  return (
    <div>
      <div class="carousel bg-[#FFF4EE] pt-12 pb-72 hidden lg:flex">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={news1} class="w-full px-16 " />
          <div className="bg-[#E1CEC0] py-12 px-40 absolute left-56 -bottom-32">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="text-2xl">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <a href="#slide2" className="text-2xl">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>

        <div id="slide2" class="carousel-item relative w-full">
          <img src={news2} class="w-full px-16" />
          <div className="bg-[#E1CEC0] py-12 px-40 absolute left-56 -bottom-32">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-2xl">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <a href="#slide3" className="text-2xl">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>

        <div id="slide3" class="carousel-item relative w-full">
          <img src={news3} class="w-full px-16" />
          <div className="bg-[#E1CEC0] py-12 px-40 absolute left-56 -bottom-32">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-2xl">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <a href="#slide4" className="text-2xl">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src={news4} class="w-full px-16" />
          <div className="bg-[#E1CEC0] py-12 px-40 absolute left-56 -bottom-32">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-2xl">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <a href="#slide5" className="text-2xl">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div id="slide5" class="carousel-item relative w-full">
          <img src={news5} class="w-full px-16" />
          <div className="bg-[#E1CEC0] py-12 px-40 absolute left-56 -bottom-32">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-2xl">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <a href="#slide1" className="text-2xl">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>

      <div class="lg:hidden carousel bg-[#FFF4EE] sm:grid-cols-1 md:grid-cols-1 pb-44">
        <div id="item1" class="carousel-item relative w-full h-full">
          <img className="w-full" src={news1} alt="" />
          <div className="bg-[#E1CEC0] absolute left-0 -bottom-40 w-full pb-4">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div id="item2" class="carousel-item relative w-full">
          <img className="w-full" src={news2} alt="" />
          <div className="bg-[#E1CEC0] absolute left-0 -bottom-40 w-full pb-4">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div id="item3" class="carousel-item relative w-full pb-4">
          <img className="w-full" src={news3} alt="" />
          <div className="bg-[#E1CEC0] absolute left-0 -bottom-40 w-full pb-4">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div id="item4" class="carousel-item relative w-full">
          <img className="w-full" src={news4} alt="" />
          <div className="bg-[#E1CEC0] absolute left-0 -bottom-40 w-full pb-4">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
        </div>
        <div id="item5" class="carousel-item relative w-full">
          <img className="w-full" src={news5} alt="" />
          <div className="bg-[#E1CEC0] absolute left-0 -bottom-40 w-full pb-4">
            <h3 className="text-3xl hover:text-[#E51D28]">
              My Business Partner is a Rockstar – Literally.
            </h3>
            <p className="py-6">
              David Yassky profiles Jacquelyn Laufer – Ryal
            </p>
            <div className="snip1135">
              <li>
                <a>READ MORE</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#FFF4EE] lg:hidden flex justify-center w-full pt-4 pb-36 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
        <a href="#item5" class="btn btn-xs">
          5
        </a>
      </div>
    </div>
  );
};

export default SlideShow;
