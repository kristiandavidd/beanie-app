import Logo from "../atoms/logo";
import { Input } from "../molecules/input";
import { Caption } from "../atoms/text";
import { IconSearch, IconHeart, IconBell } from "@tabler/icons-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex z-100 items-center justify-between w-[90dvw]  px-4 py-4 border-t-1 border-b-1 border-gray-200 bg-white my-4 md:my-12">
      <nav className="flex items-center w-2/5 gap-4 uppercase ">
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="#shop" className="text-gray-700 hover:text-gray-900">
          Shop
        </Link>
        <Link href="#blog" className="text-gray-700 hover:text-gray-900">
          Blog
        </Link>
        <Link href="#pages" className="text-gray-700 hover:text-gray-900">
          Pages
        </Link>
      </nav>
      <Link href="/" className="relative flex items-center w-1/5 gap-2 top-1">
        <Logo
          className="absolute transform -translate-x-1/2 left-1/2"
          width={240}
          height={240}
        />
      </Link>
      <nav className="items-center justify-end hidden w-2/5 gap-4 md:flex">
        <form action="">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 pl-3 pr-8 border border-gray-300 rounded-full focus:outline-none "
            />
            <div className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2">
              <IconSearch className="w-5 h-5" />
            </div>
          </div>
        </form>
        <IconHeart className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <Caption className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700">
          <IconBell className="w-5 h-5 " />
          (01)
        </Caption>
      </nav>
    </header>
  );
}
