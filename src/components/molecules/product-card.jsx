import Image from "next/image";
import { Heading5, InlineSecondary } from "@/components/atoms/text";

export default function ProductCard({ coffee }) {
  return (
    <div className="flex flex-col w-full transition-colors duration-300 ease-in-out rounded-sm hover:bg-accent hover:cursor-pointer">
      <Image
        width={400}
        height={400}
        src={coffee.img_url}
        alt={coffee.name}
        className="w-full h-[60vh] object-cover rounded-sm mb-4"
      />
      <Heading5 className="block leading-snug text-gray-800">
        {coffee.name}
      </Heading5>
      <InlineSecondary className="text-lg text-primary">
        ${coffee.price.toFixed(2)}
      </InlineSecondary>
    </div>
  );
}
