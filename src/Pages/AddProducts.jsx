import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Axios/useAxiosSecure";

const AddProducts = () => {
  const axiosSecure = useAxiosSecure();

  const { register, reset, handleSubmit } = useForm();

  const imageBBAPi = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;

  const handleOnSubmit = async (data) => {
    const file = { image: data.file[0] };

    const res = await axios.post(imageBBAPi, file, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const formData = {
      image: res.data.data.display_url,
      title: data.title,
      // subtitle: data.subtitle,
      price: data.price,
      discounted_price: data.dprice,
      reviews: "",
      description: data.description,
    };

    console.log(formData);

    axiosSecure
      .post("/add-product", formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-fit border-2 p-6 rounded-xl border-blue-600 ">
        {/* image upload input  */}
        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
          {/* image  */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Image
            </label>

            <input
              type="file"
              name="file"
              className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
              {...register("file", { required: "choose any image" })}
            />
          </div>
          {/* title  */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Title
            </label>

            <input
              type="text"
              placeholder="Enter Product title"
              name="title"
              className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              {...register("title", { required: true })}
            />
          </div>
          {/* subtitles
          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Subtitle
            </label>

            <input
              type="text"
              name="subtitle"
              placeholder="Enter Product subtitle "
              className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              {...register("subtitle", { required: true })}
            />
          </div> */}
          <div className=" flex  items-center gap-2">
            {/* price  */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Price
              </label>

              <input
                type="number"
                name="price"
                placeholder="Actual Price"
                className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                {...register("price", { required: true })}
              />
            </div>
            {/* discounted price */}
            <div>
              <label
                htmlFor="dis-price"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Discounted Price
              </label>

              <input
                type="number"
                name="dis-price"
                placeholder="Discounted price amount"
                className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                {...register("dprice", { required: true })}
              />
            </div>
          </div>
          {/* reviews 
          <div>
            <label
              htmlFor="review"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Review
            </label>

            <input
              type="review"
              name="review"
              placeholder="Product Review"
              className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              {...register("reviews", { required: true })}
            />
          </div> */}
          {/* description  */}
          <div>
            <label
              htmlFor="text"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Description
            </label>

            <textarea
              cols={40}
              rows={5}
              placeholder="Enter product description here..."
              className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              name="description"
              id=""
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 flex  items-center justify-center gap-2 text-lg font-semibold bg-blue-600 text-white"
          >
            <Icon className="text-2xl" icon="gg:add" />
            <p>Add Product</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
