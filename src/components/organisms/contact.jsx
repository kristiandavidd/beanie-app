import { Input } from "../molecules/input";
import { Button } from "../molecules/button";
import Image from "next/image";
import { Heading1, Caption } from "../atoms/text";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-0">
        <Image
          src="/images/decor/leaf-left.png"
          alt="Leaf Decoration Left"
          width={216}
          height={216}
        />
      </div>
      <div className="absolute top-0 right-0">
        <Image
          src="/images/decor/leaf-right.png"
          alt="Leaf Decoration Right"
          width={216}
          height={216}
        />
      </div>
      <div className="relative flex flex-col w-[90dvw] gap-4 mx-auto text-center py-12">
        <Heading1>Subscribe Us</Heading1>
        <Caption>
          Subscribe to Our Recommendation discount codes and updates.
        </Caption>

        <form>
          <div className="relative mx-auto mt-4 md:w-1/2">
            <Input
              type="text"
              placeholder="Write your email address here.."
              className="px-2 py-1 pl-3 pr-8 border border-gray-300 rounded-full focus:outline-none"
            />
            <div className="absolute right-0 text-gray-500 transform -translate-y-1/2 top-1/2">
              <Button
                variant="outline"
                className="uppercase rounded-full hover:cursor-pointer"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </form>

        <div className="flex gap-6 mx-auto mt-4 text-muted-foreground">
          <IconBrandFacebookFilled
            strokeWidth={1.2}
            className="hover:text-secondary hover:cursor-pointer"
          />
          <IconBrandInstagram
            strokeWidth={1.2}
            className="hover:text-secondary hover:cursor-pointer"
          />
          <IconBrandTwitterFilled
            strokeWidth={1.2}
            className="hover:text-secondary hover:cursor-pointer"
          />
          <IconBrandLinkedin
            strokeWidth={1.2}
            className="hover:text-secondary hover:cursor-pointer"
          />
          <IconBrandYoutubeFilled
            strokeWidth={1.2}
            className="hover:text-secondary hover:cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
