import { Icon } from "@iconify/react/dist/iconify.js";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { email: form.email.value, password: form.password.value };
    console.log(data);

    // blank form validation
    if (!data.email || !data.password) {
      return Swal.fire({
        icon: "error",
        title: "Please typing valid data",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // email signin
    signIn(form.email.value, form.password.value)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // google signin
  const googleSignIn = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="w-full max-w-sm border-2 p-10 rounded-md space-y-5">
        <h1 className="text-2xl flex items-center gap-3">
          Login page <Icon icon="uiw:login" />
        </h1>
        <form className="space-y-5" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              className="block w-full px-4 py-2 border-2 rounded-md focus:outline-sky-400 focus:shadow-sm focus:shadow-sky-400  "
              name="email"
              type="email"
              placeholder=" your email address"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="block w-full px-4 py-2 border-2 rounded-md focus:outline-sky-400 focus:shadow-sm focus:shadow-sky-400 "
              name="password"
              type="password"
              placeholder="your password"
            />
          </div>
          <div>
            <button
              className="py-4 w-full bg-sky-500 rounded-lg text-xl font-semibold text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center">Login with social</p>
        <hr />
        <div className="flex justify-center items-center gap-6">
          <button onClick={googleSignIn}>
            <Icon className="text-4xl" icon="devicon:google" />
          </button>
          <Icon className="text-4xl" icon="logos:facebook" />
          <Icon className="text-4xl" icon="logos:github-icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
