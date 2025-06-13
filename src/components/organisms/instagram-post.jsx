import Image from "next/image";
import { AspectRatio } from "@/components/molecules/aspect-ratio";
import { Heading1 } from "@/components/atoms/text";

export default function InstagramPost() {
  const images = [
    "/images/instagram/instagram-post-1.jpg",
    "/images/instagram/instagram-post-2.jpg",
    "/images/instagram/instagram-post-3.jpg",
    "/images/instagram/instagram-post-4.jpg",
    "/images/instagram/instagram-post-5.jpg",
    "/images/instagram/instagram-post-6.jpg",
  ];

  return (
    <section
      className="flex flex-col w-[90dvw] gap-4 my-24 text-center"
      id="pages"
    >
      <Heading1 className="uppercase">Follow Our Instagram #Beanie</Heading1>
      <div className="grid w-full grid-cols-3 gap-4 md:grid-cols-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:translate-y-1 hover:shadow-lg"
          >
            <AspectRatio ratio={1} className="w-full">
              <Image
                src={image}
                alt={`Instagram Post ${index + 1}`}
                layout="fill"
                className="object-cover rounded-lg shadow-lg"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  );
}
