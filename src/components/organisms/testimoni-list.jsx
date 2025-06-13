"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules/carousel";
import { Caption, Heading3 } from "../atoms/text";

export default function TestimoniList() {
  const [testimoni, setTestimoni] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTestimoni() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/testimoni");
        const data = await res.json();
        setTestimoni(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTestimoni();
  }, []);

  return (
    <section className="flex items-center justify-center w-[90dvw] px-4 py-10 bg-white md:px-12">
      {isLoading ? (
        <Caption className="mt-6 text-center text-gray-500">
          Loading testimonials...
        </Caption>
      ) : isError ? (
        <Caption className="mt-6 text-center text-red-500">
          Failed to load testimonials. Please try again later.
        </Caption>
      ) : testimoni.length > 0 ? (
        <div className="w-6/7 md:w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimoni.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="flex flex-col items-center justify-center px-4 md:px-8"
                >
                  <Heading3 className="w-full text-base italic text-center text-gray-500 transition duration-300 ease-in-out sm:w-3/4 sm:text-lg md:text-xl hover:text-secondary">
                    {item.desc}
                  </Heading3>
                  <Caption className="mt-4 text-sm font-medium text-center text-gray-600 uppercase sm:text-base">
                    {item.name}
                  </Caption>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      ) : (
        <Caption className="mt-6 text-center text-gray-500">
          No testimonials available.
        </Caption>
      )}
    </section>
  );
}
