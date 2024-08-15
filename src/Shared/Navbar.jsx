import React from "react";
import { Link } from "react-router-dom";
import { navbarlinks } from "./NavLinks";

const Navbar = () => {
  console.log(navbarlinks[1].subtitles);
  return (
    <div className="h-28 flex justify-around items-center bg-green-100">
      {/* logo section */}
      <div>
        <img
          src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/logo.png"
          className="h-16"
          alt=""
        />
      </div>
      {/* menu section  */}
      <div>
        <ul className="flex items-center justify-center gap-6 font-semibold">
          {navbarlinks.map((data, idx) => (
            <div className="relative group " key={idx}>
              <Link to={data.link}>
                <li>{data.title}</li>
              </Link>

              <span className="absolute h-0.5 w-full left-0 -bottom-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out "></span>

              {data.subtitles && (
                <div className=" hidden absolute flex-col  justify-center items-center group-hover:flex ">
                  <div className="py-4  w-full"></div>
                  <div className=" px-10 py-10  bg-green-100 flex justify-center items-center gap-10">
                    {data?.subtitles?.map((item, idx) => (
                      <div key={idx}>
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
      <div></div>
    </div>
  );
};

export default Navbar;
