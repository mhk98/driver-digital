import { motion } from "framer-motion";
import banner from "../image/banner.jpg";
import banner1 from "../image/banner1.jpg";
import banner2 from "../image/banner2.jpg";
import banner3 from "../image/banner3.jpg";
import jabboud from "../image/jabboud.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextScrolling from "./TextScrolling";
import Clients from "./Clients";
import "./BannerContent.css";

const BannerContent = () => {
  return (
    <motion.div className="bg-[#FFF4EE]">
      <motion.div
        className=" hidden px-40  py-24 mb-4 text-left lg:grid grid-cols-1"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl">
          Web Design & Development{" "}
          <small className="text-red-300 text-2xl">/</small> Ecommerce – Shopify
          & Shopify Plus <small className="text-red-300 text-2xl">/</small>{" "}
          Ecommerce Optimization Strategy{" "}
          <small className="text-red-300 text-2xl">/</small> User Experience{" "}
          <small className="text-red-300 text-2xl">/</small> User Interface
          Design <small className="text-red-300 text-2xl">/</small> Migrations &
          Replatforming <small className="text-red-300 text-2xl">/</small> Email
          Marketing <small className="text-red-300 text-2xl">/</small> Project
          Management <small className="text-red-300 text-2xl">/</small> ADA
          Compliance
        </h2>
      </motion.div>
      <motion.div
        className=" lg:hidden px-4  py-24 mb-4 text-left grid grid-cols-1"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl">
          Web Design & Development{" "}
          <small className="text-red-300 text-2xl">/</small> Ecommerce – Shopify
          & Shopify Plus <small className="text-red-300 text-2xl">/</small>{" "}
          Ecommerce Optimization Strategy{" "}
          <small className="text-red-300 text-2xl">/</small> User Experience{" "}
          <small className="text-red-300 text-2xl">/</small> User Interface
          Design <small className="text-red-300 text-2xl">/</small> Migrations &
          Replatforming <small className="text-red-300 text-2xl">/</small> Email
          Marketing <small className="text-red-300 text-2xl">/</small> Project
          Management <small className="text-red-300 text-2xl">/</small> ADA
          Compliance
        </h2>
      </motion.div>
      
      <motion.div
        className="hidden lg:flex items-center lg:gap-16 lg:px-16 lg:responsive"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div className="text-left">
          <p className="">
            <a className="hover:border-b-2 border-black">SONA HOME</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              Vibrant Living. From Our Table To Yours.
            </a>
          </h2>
        </div>

        <div>
          <img src={banner} alt="" />
        </div>
      </motion.div>
      <motion.div
        className="lg:hidden flex items-center responsive px-4"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >

        <div>
          <img src={banner} alt="" />
        </div>

        <div className="text-left">
          <p className="py-8">
            <a className="hover:border-b-2 border-black">SONA HOME</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              Vibrant Living. From Our Table To Yours.
            </a>
          </h2>
        </div>

      </motion.div>

      <motion.div
        className="hidden pt-32 pb-28 px-16 lg:grid grid-cols-1"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div>
          <img src={banner1} alt="" />
        </div>

        <motion.div className="text-center mt-8">
          <p>
            <a className="hover:border-b-2 border-black">MIZENSIR PARFUMS</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              Swiss Perfume Precision.
            </a>
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        className="lg:hidden pt-32 pb-28 px-4 grid grid-cols-1"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div>
          <img src={banner1} alt="" />
        </div>

        <motion.div className="text-left mt-8">
          <p className="mb-4">
            <a className="hover:border-b-2 border-black">MIZENSIR PARFUMS</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              Swiss Perfume Precision.
            </a>
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:flex items-center gap-16 px-16"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div>
          <img src={jabboud} alt="" />
        </div>

        <motion.div className="lg:text-right">
          <p>
            <a className="hover:border-b-2 border-black">JOSEPH ABBOUD</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              The Fit. The Fabric. The Man.
            </a>
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        className="lg:hidden flex items-center px-4 responsive"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div>
          <img src={jabboud} alt="" />
        </div>

        <motion.div className="text-left">
          <p className="py-8">
            <a className="hover:border-b-2 border-black">JOSEPH ABBOUD</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              The Fit. The Fabric. The Man.
            </a>
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden pt-32 pb-8 px-28 lg:grid grid-cols-1"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div>
          <img src={banner2} alt="" />
        </div>

        <motion.div className="text-center mt-8">
          <p className="pb-4">
            <a className="hover:border-b-2 border-black">HANKY PANKY</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              Comfort without compromise. Since 1977.
            </a>
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        className="lg:hidden pt-32 pb-8 px-4 grid grid-cols-1"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div>
          <img src={banner2} alt="" />
        </div>

        <motion.div className="text-left mt-8">
          <p className="pb-4">
            <a className="hover:border-b-2 border-black">HANKY PANKY</a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              Comfort without compromise. Since 1977.
            </a>
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:flex items-center gap-16 px-16 py-20 mb-8 "
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >

        <motion.div className="text-left">
          <p className="pb-4">
            <a className="hover:border-b-2 border-black">
              THE SALON AT BERGDORF GOODMAN
            </a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              A global artist collective. An iconic point of view.
            </a>
          </h2>
        </motion.div>

        <div className="pb-8">
          <img src={banner3} alt="" />
        </div>

      </motion.div>
 
      <motion.div
        className="lg:hidden flex items-center pt-20 mb-8 px-4 responsive"
        initial={{ y: 200 }}
        whileInView={{ y: -20 }}
        transition={{ type: "spring", duration: 1, delay: 0.5, stiffness: 100 }}
        viewport={{ once: true }}
      >
        <div className="pb-8">
          <img src={banner3} alt="" />
        </div>

        <motion.div className="text-left">
          <p className="pb-4">
            <a className="hover:border-b-2 border-black">
              THE SALON AT BERGDORF GOODMAN
            </a>
          </p>
          <h2>
            <a className="hover:border-b-4 text-3xl border-black">
              A global artist collective. An iconic point of view.
            </a>
          </h2>
        </motion.div>
      </motion.div>
 
      <motion.div className=" pt-12"
      
      >
        <h1 className="text-xl">VIEW MORE +</h1>
      </motion.div>

      <div>
        <TextScrolling></TextScrolling>
      </div>

      <div>
        <Clients></Clients>
      </div>

      <div className="hidden text-left bg-[#FFF4EE] py-28 px-16 lg:grid grid-cols-1">
        <h2 className="text-4xl pb-8">
          <span className="font-bold">DRIVER</span> CREATIVE
        </h2>
        <h3 className="text-3xl">
          Our creative services sister agency: creative
        </h3>
        <h3 className="text-3xl pb-8">
          partnership + imaginative storytelling.
        </h3>
        <p className="text-xl">
          DRIVERCREATIVE.COM
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </p>
      </div>
      <div className="lg:hidden text-left bg-[#FFF4EE] py-28 px-4 grid grid-cols-1">
        <h2 className="text-4xl pb-8">
          <span className="font-bold">DRIVER</span> CREATIVE
        </h2>
        <h3 className="text-3xl pb-8">
          Our creative services sister agency: creative. partnership + imaginative storytelling.
        </h3>
    
        <p className="text-xl">
          DRIVERCREATIVE.COM
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </p>
      </div>
    </motion.div>
  );
};

export default BannerContent;
