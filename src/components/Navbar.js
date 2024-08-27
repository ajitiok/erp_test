import { navLists } from "@/constants/navLists";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header id="home" className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="#home" className="px-2 py-2 text-4xl md:ml-1">
                Home
              </Link>

              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto text-black rounded-md lg:hidden hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navLists.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-6 py-2 -ml-1 text-black rounded-md hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 focus:outline-none"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-500 rounded-md lg:ml-5"
                  >
                    Login
                  </Link>
                </>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>

      <div className="hidden text-center lg:flex lg:items-center">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navLists.map((menu, index) => (
            <li className="mr-3" key={index}>
              <Link
                href={`#${menu}`}
                className="uppercase inline-block px-6 py-2 text-xl font-bold text-black no-underline rounded-md hover:text-blue-500 focus:text-blue-500  focus:outline-none"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/login"
          className="px-6 py-2 text-sky-500 bg-white border-2 border-sky-500 rounded-md md:ml-5"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
