import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-navbar  ">
      <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-around py-10">
        <div>
          <h1 className="text-4xl lg:text-6xl font-DM">Chronix</h1>
          <p className="text-lg max-w-80 lg:max-w-sm">
            Discover premium watches that combine style, precision, and
            sophistication.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <p className="font-semibold">Social Media</p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Snehashisroy.official"
              target="_blank"
            >
              <Icon className=" text-2xl" icon="ic:baseline-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/snehashisroyofficial/"
              target="_blank"
            >
              <Icon className=" text-2xl" icon="mdi:linkedin" />
            </a>
            <a
              href="https://www.instagram.com/snehashis.official/"
              target="_blank"
            >
              <Icon className=" text-2xl" icon="mdi:instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <Icon icon="ic:baseline-copyright" />
        <p className="text-sm">Copyright 2024 | Chronix</p>
      </div>
    </div>
  );
};

export default Footer;
