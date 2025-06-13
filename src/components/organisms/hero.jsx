import { Button } from "../molecules/button";
import { Caption, Heading1, Heading3, InlineSecondary } from "../atoms/text";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full transition-shadow ">
      <div className="flex flex-col w-[90dvw] overflow-hidden transition-shadow duration-300 ease-in-out md:flex-row rounded-2xl hover:shadow-2xl ">
        <div
          className="hidden md:block md:w-1/2 bg-primary"
          style={{
            backgroundImage: "url('/images/hero-image.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80dvh",
          }}
        ></div>
        <div className="md:w-1/2 bg-[#EEEDEB] relative  overflow-hidden h-[60vh] md:h-[80dvh]">
          <div
            className="flex flex-col items-center justify-center h-full p-8 opacity-20"
            style={{
              backgroundImage: "url('/images/hero-pattern.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80dvh",
            }}
          ></div>
          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full p-8 text-center ">
            <Heading1>
              SPECIAL <InlineSecondary inline>COFFEE</InlineSecondary>
            </Heading1>
            <Caption className="w-4/5 mb-6 text-sm text-gray-600 ">
              Morbi justo vel diam non leo elementum massa. Molestie ipsum
              condimentum egestas vitae ut cras aenean enim. Laoreet odio
              adipiscing auctor scelerisque phasellus nisl faucibus.
            </Caption>
            <Button
              variant="outline"
              className=" border uppercase hover:cursor-pointer border-primary font-semibold bg-[#EEEDEB]  rounded-full  transition-colors"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[40vh] md:h-[60vh] flex flex-col items-center justify-center w-full">
        <div className="relative flex items-center justify-between w-full h-full">
          <Image
            src="/images/decor/leaf-left.png"
            alt="Leaf Decoration Left"
            width={216}
            height={216}
            className="left-0 "
          />
          <Image
            src="/images/decor/leaf-right.png"
            alt="Leaf Decoration Left"
            width={216}
            height={216}
            className="right-0 "
          />
        </div>
        <Heading3 className="absolute w-3/5 mb-6 italic text-center text-gray-500 duration-300 ease-in-out hover:text-secondary ">
          Morbi justo vel diam non leo elementum massa. Molestie ipsum
          condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing
          auctor scelerisque phasellus nisl faucibus.
        </Heading3>
      </div>
    </section>
  );
}
