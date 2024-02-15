import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 pt-12 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                className="mr-3 h-10 sm:h-9"
                alt="NotiKube Logo"
                width={20}
                height={20}
              />
              <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                NotiKube
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="/auth/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="text-white bg-NotikubeRed hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
