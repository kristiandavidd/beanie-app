import Image from "next/image";
import { Caption, Heading6 } from "../atoms/text";

export default function CoffeeItem({ coffee }) {
  return (
    <div className="flex items-center justify-between w-full py-2 bg-white rounded-lg hover:cursor-pointer hover:bg-accent ">
      <div className="flex items-center justify-start w-1/8">
        <Image
          width={100}
          height={100}
          src={coffee.img_url}
          alt={coffee.name}
          className="object-cover rounded-full size-12"
        />
      </div>
      <div className="w-5/8 md:w-6/8">
        <Heading6 className="duration-300 ease-in-out hover:text-secondary">
          {coffee.name}
        </Heading6>
        <Caption className="text-gray-600 duration-300 ease-in-out line-clamp-1 hover:text-secondary">
          {coffee.desc}
        </Caption>
      </div>
      <Caption className="text-xl text-center duration-300 ease-in-out w-1/8 text-primary hover:text-secondary">
        ${coffee.price}
      </Caption>
    </div>
  );
}
