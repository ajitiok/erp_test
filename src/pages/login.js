import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="container flex items-center justify-center p-8 mx-auto xl:px-0">
      <div className="flex flex-wrap mt-10 lg:mt-52 border-2 border-sky-600 rounded p-5">
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <div className="max-w-4xl mb-8 ">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Login
            </h1>

            <div className="sm:col-span-4 mt-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="John doe"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="**********"
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start mt-10 space-y-5 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/"
                className="px-8 py-2 text-lg font-medium text-center text-white bg-sky-400 rounded-md "
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/images/undraw_login.svg"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
