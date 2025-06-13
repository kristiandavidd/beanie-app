import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../molecules/product-card";
import { Button } from "../molecules/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/molecules/carousel";
import { ParagraphPrimary, Heading1, Caption } from "../atoms/text";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/product");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="w-[90dvw]" id="shop">
      <div className="flex flex-col items-center justify-between w-full my-4 md:flex-row">
        <Heading1 className="text-gray-800">SHOP BEST COFFEE</Heading1>
        <div className="flex items-center gap-2">
          <Button
            variant="link"
            size="sm"
            className="duration-300 ease-in-out hover:text-secondary"
          >
            <ParagraphPrimary className="underline hover:text-secondary">
              View All
            </ParagraphPrimary>
          </Button>
          <Button
            onClick={() => carouselRef.current?.scrollPrev()}
            variant="outline"
            size="icon"
            className="hover:bg-primary hover:text-white hover:cursor-pointer"
          >
            <IconChevronLeft />
          </Button>
          <Button
            onClick={() => carouselRef.current?.scrollNext()}
            variant="outline"
            size="icon"
            className="hover:bg-primary hover:text-white hover:cursor-pointer"
          >
            <IconChevronRight />
          </Button>
        </div>
      </div>

      {isLoading ? (
        <Caption className="py-8 text-center text-gray-500">
          Loading products...
        </Caption>
      ) : isError ? (
        <Caption className="py-8 text-center text-red-500">
          Failed to load products. Please try again later.
        </Caption>
      ) : products.length === 0 ? (
        <Caption className="py-8 text-center text-gray-500">
          No coffee products available.
        </Caption>
      ) : (
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          setApi={(api) => (carouselRef.current = api)}
        >
          <CarouselContent>
            {products.map((coffee) => (
              <CarouselItem
                key={coffee.id}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ProductCard coffee={coffee} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </section>
  );
}
