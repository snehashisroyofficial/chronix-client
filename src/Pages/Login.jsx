import { Icon } from "@iconify/react/dist/iconify.js";

const Login = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { email: form.email.value, password: form.password.value };
    console.log(data);
  };

  return (
    <div className="h-full   flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default Login;
