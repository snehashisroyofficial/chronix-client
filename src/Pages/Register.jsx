import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { email: form.email.value, password: form.password.value };
    createUser(form.email.value, form.password.value)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "success",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });

    console.log(data);
  };

  return (
    <div className="h-full   flex justify-center items-center">
      <div className="w-full max-w-sm border-2 p-10 rounded-md space-y-5">
        <h1 className="text-2xl flex items-center gap-3">
          Create Account <Icon icon="ic:baseline-create" />
        </h1>
        <form className="space-y-5" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              className="block w-full px-4 py-2 border-2 rounded-md focus:outline-green-400   "
              name="email"
              type="email"
              placeholder=" your email address"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="block w-full px-4 py-2 border-2 rounded-md focus:outline-green-400  "
              name="password"
              type="password"
              placeholder="your password"
            />
          </div>
          <div>
            <button
              className="py-4 w-full bg-green-500 rounded-lg text-xl font-semibold text-white"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
