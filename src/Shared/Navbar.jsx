import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarlinks } from "./NavLinks";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubtitles, setOpenSubtitles] = useState(true);
  console.log(menuOpen);
  return (
    <div className="">
      <div className="h-20 lg:h-28 flex justify-between lg:justify-around items-center bg-navbar px-2 relative">
        {/* menu bar mobile devices */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden pl-4">
          {menuOpen ? (
            <Icon
              className="text-4xl"
              icon="line-md:menu-to-close-transition"
            />
          ) : (
            <Icon className="text-4xl" icon="material-symbols:menu" />
          )}
        </div>

        {/* logo section */}
        <div>
          <img
            src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/logo.png"
            className="h-16 py-2 lg:py-0"
            alt=""
          />
        </div>
        {/* menu section  */}
        <div>
          <ul className="hidden lg:flex items-center justify-center gap-6 font-semibold">
            {navbarlinks.map((data, idx) => (
              <div className="relative group " key={idx}>
                <Link to={data.link}>
                  <li>{data.title}</li>
                </Link>

                <span className="absolute h-0.5 w-full left-0 -bottom-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out "></span>

                {data.subtitles && (
                  <div className=" hidden absolute flex-col  justify-center items-center group-hover:flex ">
                    <div className="py-4  w-full"></div>
                    <div className=" px-10 py-10  bg-navbar flex justify-center items-center gap-10">
                      {data?.subtitles?.map((item, idx) => (
                        <div className="hover:text-blue-600" key={idx}>
                          <Link to={item.link}>
                            <li>{item.title}</li>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
        {/* right icons  */}
        <div
          onClick={() => setMenuOpen(false)}
          className="flex  items-center lg:gap-8 gap-2"
        >
          {/* my account  */}
          <div className=" relative group ">
            <div className="hover:scale-110 hover:duration-300 hover:ease-linear hover:transition-all">
              <div className="flex flex-col items-center">
                <Icon className="text-2xl" icon="ph:user" />
                <p>Account</p>
              </div>
              <span className="h-0.5 bg-black w-full absolute -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out "></span>
            </div>

            {/* hover area  */}
            <div className=" hidden absolute group-hover:flex flex-col items-center justify-center -left-32 top-14">
              <div className="w-full lg:py-3"></div>
              <div className=" w-full p-10 bg-navbar flex flex-col  items-center text-nowrap gap-4">
                <div>
                  <h1 className="uppercase font-semibold text-2xl text-center">
                    My account
                  </h1>
                  <p>login to access your account</p>
                </div>

                <div className="flex gap-4">
                  <Link to="/login">
                    <button className="font-semibold text-white px-4 py-2 bg-blue-500">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="font-semibold text-white px-4 py-2 bg-green-500">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* wishlist  */}
          <button className=" flex flex-col items-center group hover:scale-110 hover:duration-300 hover:ease-linear hover:transition-all">
            <Icon className="text-2xl" icon="ph:heart" />
            <p>WishList</p>

            <span className="h-0.5 w-full left-0 -bottom-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out "></span>
          </button>

          {/* cart  */}
          <button className="flex flex-col items-center group hover:scale-110 hover:duration-300 hover:ease-linear hover:transition-all">
            <Icon className="text-2xl" icon="bitcoin-icons:cart-outline" />
            <p>Cart</p>
            <span className="h-0.5 w-full bg-black left-0 -bottom-1 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>

      {/* mobile side drawer  */}

      <div
        className={`h-screen lg:hidden bg-navbar w-full absolute transition-all duration-300 ease-in-out p-10  ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className=" flex flex-col  gap-6 text-lg">
          {navbarlinks.map((data, idx) => (
            <div key={idx}>
              {data.link ? (
                <Link to={data.link}>
                  <li className="font-semibold">{data.title}</li>
                </Link>
              ) : (
                <div
                  onClick={() => setOpenSubtitles(!openSubtitles)}
                  className="flex items-center gap-4"
                >
                  <Link>
                    <li className="font-semibold">{data.title}</li>
                  </Link>
                  {openSubtitles ? (
                    <Icon className="text-2xl" icon="iconamoon:arrow-up-2" />
                  ) : (
                    <Icon className="text-2xl" icon="iconamoon:arrow-down-2" />
                  )}
                </div>
              )}

              {/* mobile sublinks */}
              {data.subtitles && (
                <div
                  className={`p-4 rounded-md mt-3 bg-[#F0E8D0]  flex-col gap-6 ${
                    openSubtitles ? "flex" : "hidden"
                  }`}
                >
                  {data?.subtitles?.map((item, idx) => (
                    <Link to={item.link} key={idx}>
                      <div>
                        <li>{item.title}</li>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
