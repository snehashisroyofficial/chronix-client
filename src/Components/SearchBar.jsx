import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useProduct from "../Hooks/useProduct";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useProduct();

  const axiosSecure = useAxiosSecure();
  const [suggestData, setSuggestData] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  console.log(data);

  useEffect(() => {
    setData([]);
    axiosSecure
      .post("/search-data", { title: suggestData })
      .then((res) => {
        setError("");
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 404) {
          setError(error.response.data);
        }
      });
  }, [suggestData]);

  const handleSearch = (e) => {
    setSuggestData(e.target.value);
  };

  const handleSetValue = (data) => {
    setSearchValue(data);
  };

  return (
    <div className="relative w-full">
      <p>{searchValue}</p>

      <div className="relative flex items-center w-full">
        <Icon className="absolute text-3xl ml-2 " icon="eva:search-fill" />
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Here"
          className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="absolute w-full shadow-lg overflow-y-auto max-h-48">
        {error && (
          <p className=" text-2xl py-20 flex justify-center items-center font-semibold bg-white">
            {error}
          </p>
        )}
        {data.length > 0 && (
          <ul className="bg-white divide-y ">
            {data.map((item, idx) => (
              <li
                onClick={() => handleSetValue(item.title)}
                key={idx}
                className="px-4 py-2  hover:bg-gray-100"
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
