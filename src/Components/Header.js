import { motion } from "framer-motion";
import React, { useRef } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { GoPrimitiveDot } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const scrollRef = useRef(null);
  let activeClassName = "text-primary bg-opacity-0";
  let deactiveClassName = "bg-opacity-0";
  let activeClass = "text-primary";
  let deactiveClass = "hidden";

    return (
        <div>
            {/* <div className="lg:hidden bg-black">
        <div className="pb-5 w-full">
          <Link to={'/'} className="btn hover:bg-opacity-0 btn-ghost block lg:hidden normal-case text-xl">
            <img
              src="https://raw.githubusercontent.com/MShafiMS/admission/d012ae18ebac5f6b6a2e94d3cecfdbe6d1eb4c97/bbq.svg"
              className="w-36 mx-auto"
              alt=""
            />
          </Link>
        </div>
        <div className="block w-11/12 mx-auto mt-12">
          <div className="dropdown w-full my-4">
            <label
              tabIndex={0}
              className="flex items-center text-xl p-2 text-white uppercase
             bg-[#252525] border-none w-full rounded-none"
            >
              <AiOutlineMenu />
              <span className="ml-2">Open Menu</span>
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content text-white bg-[#252525] text-sm normal-case w-full mt-2"
            >
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <a>About</a>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <a>Reservations</a>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <a>Catering</a>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <a>Gallery</a>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <a>Blog</a>
              </li>
              <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                <a>Contack</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <div className="flex w-full items-center justify-between px-10 fixed z-50 text-white">
        {/* <div>
            <Link to={'/'} className="hidden lg:inline normal-case">
              <img
                src="https://raw.githubusercontent.com/MShafiMS/admission/d012ae18ebac5f6b6a2e94d3cecfdbe6d1eb4c97/bbq.svg"
                alt=""
                className="w-44 drop-shadow-xl"
              />
            </Link>
          </div> */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal uppercase">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    {/* <GoPrimitiveDot /> */}
                  </NavLink>
                  Home
                </NavLink>
              </li>
              <li>
                <a>About</a>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to={"/menu"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/menu"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    {/* <GoPrimitiveDot /> */}
                  </NavLink>
                  Menu
                </NavLink>
                <ul className="menu bg-[#252525] text-sm normal-case w-72">
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <Link to={"/menu"}>Menu</Link>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 2</a>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>RESERVATIONS</a>
              </li>
              <li>
                <a>CATERING</a>
              </li>
              <li>
                <a>GALLERY</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.din className='relative'
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ root: scrollRef }}
      >
        <div className="left:0 lg:flex hidden bg-black bg-opacity-90 w-full items-center justify-between gap-7 px-10 fixed z-50 text-white">
          <div>
            <Link to={'/'} className="hidden lg:inline normal-case">
              <img
                src="https://raw.githubusercontent.com/MShafiMS/admission/d012ae18ebac5f6b6a2e94d3cecfdbe6d1eb4c97/bbq.svg"
                alt=""
                className="h-20"
              />
            </Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal uppercase">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    {/* <GoPrimitiveDot /> */}
                  </NavLink>
                  Home
                </NavLink>
              </li>
              <li>
                <a>About</a>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to={"/menu"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/menu"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    {/* <GoPrimitiveDot /> */}
                  </NavLink>
                  Menu
                </NavLink>
                <ul className="menu bg-[#252525] text-sm normal-case w-72">
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <Link to={"/menu"}>Menu</Link>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 2</a>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>RESERVATIONS</a>
              </li>
              <li>
                <a>CATERING</a>
              </li>
              <li>
                <a>GALLERY</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.din>
        </div>
    );
};

export default Header;