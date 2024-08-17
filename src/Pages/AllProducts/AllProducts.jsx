import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

import Sort from "../../Components/Sort";

import { PacmanLoader } from "react-spinners";
import SearchBar from "../../Components/SearchBar";
import BrandName from "../../Components/BrandName";
import useProduct from "../../Hooks/useProduct";
import useAxiosSecure from "../../Axios/useAxiosSecure";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [filterProduct, setFilterProduct] = useState([]);
  const { products, refetch, loading } = useProduct();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(8);

  console.log(filterProduct);

  useEffect(() => {
    axiosSecure
      .get(`/pagination?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => {
        console.log(res.data);
        setFilterProduct(res.data);
      });
  }, [currentPage, itemPerPage, products, refetch]);

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <PacmanLoader color="#0019ff" />
      </div>
    );
  }

  const prductsLength = products.length;
  const totalPage = Math.ceil(prductsLength / itemPerPage);
  const pages = [...Array(totalPage).keys()];

  const handleSetPerPage = (e) => {
    const input = parseInt(e.target.value);
    setItemPerPage(input);
    setCurrentPage(0);
  };

  const handlePre = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="h-screen max-w-7xl mx-auto ">
      <div className="flex items-center gap-4 py-6 ">
        <SearchBar />
        <Sort />
        <div className="flex items-center gap-2">
          <button onClick={handlePre} className="bg-gray-200 px-4 py-2">
            <Icon className="text-lg" icon="lucide:arrow-left" />
          </button>
          <button onClick={handleNext} className="bg-gray-200 px-4 py-2">
            <Icon className="text-lg" icon="lucide:arrow-right" />
          </button>
        </div>
      </div>
      <div className="flex ">
        <div className="pr-6 ">
          <BrandName />
        </div>

        {/* products data show  */}

        <div className="flex flex-col justify-around">
          <div className="grid grid-cols-4 gap-10">
            {filterProduct.map((item, idx) => (
              <div
                key={idx}
                className=" p-4 border-2 rounded-2xl flex flex-col justify-around"
              >
                <div className="max-h-60  overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className=" flex  flex-col justify-between">
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p>
                    {" "}
                    {item.description.length > 50
                      ? item.description.substring(0, 50) + "..."
                      : item.description}
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <Icon
                      className="text-amber-600"
                      icon="ic:outline-star-half"
                    />{" "}
                    {item.reviews}
                  </p>
                  <span className="flex items-center gap-2 font-semibold ">
                    <p className="text-2xl">₹ {item.discounted_price}</p>
                    <p className="line-through text-red-500">₹ {item.price} </p>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="flex flex-col justify-center items-center py-10">
            <div className="flex justify-center">
              <button onClick={handlePre} className="bg-gray-200 px-4 py-2">
                <Icon className="text-lg" icon="lucide:arrow-left" />
              </button>

              {pages.map((item, idx) => (
                <button
                  onClick={() => setCurrentPage(item)}
                  key={idx}
                  className={`px-4 py-2  ${
                    currentPage == item ? "bg-amber-300" : "bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}

              <select
                onChange={handleSetPerPage}
                className="outline-none bg-gray-100"
                defaultValue={0}
                name=""
                id=""
              >
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
              </select>
              <button onClick={handleNext} className="bg-gray-200 px-4 py-2">
                <Icon className="text-lg" icon="lucide:arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
