import Link from "next/link";

export default function Footer() {
  return (
    <footer className="justify-between w-full text-gray-600 ">
      <div className="grid grid-cols-2 gap-4   lg:grid-cols-4 justify-between w-[90dvw] px-4 mx-auto">
        <div className="flex flex-col w-1/2 lg:w-1/4">
          <Link href="" className="hover:text-gray-800">
            Home
          </Link>
          <Link href="" className="hover:text-gray-800">
            About
          </Link>
          <Link href="" className="hover:text-gray-800">
            Shop
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
          <Link href="" className="hover:text-gray-800">
            Shop Single
          </Link>
          <Link href="" className="hover:text-gray-800">
            Blog
          </Link>
          <Link href="" className="hover:text-gray-800">
            Contact
          </Link>
        </div>
        <div className="flex flex-col w-full text-gray-400 md:w-1/2 lg:w-1/4">
          <Link href="" className="hover:text-gray-800">
            Terms & Conditions
          </Link>
          <Link href="" className="hover:text-gray-800">
            Services
          </Link>
          <Link href="" className="hover:text-gray-800">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
          <Link href="" className="hover:text-gray-800">
            Address Location
          </Link>
          <Link href="" className="hover:text-gray-800">
            YourWebsite.com
          </Link>
          <Link href="" className="hover:text-gray-800">
            ID 553 660
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto mb-6">
        <hr className="my-6 border-1" />
        <div className="flex flex-col items-center justify-between text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Beanie. All rights reserved by{" "}
            <span className="underline uppercase">Beanie Coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
