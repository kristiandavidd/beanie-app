import React, { useEffect, useState } from "react";
import CoffeeItem from "../molecules/coffee-item";
import { Caption, Heading1 } from "../atoms/text";
import Link from "next/link";
import { Button } from "../molecules/button";

function CoffeeList({ type = "default", title = "Our Coffee" }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(
          type === "newest" || type === "bestseller"
            ? `/api/product?type=${type}`
            : "/api/product"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching coffee products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [type]);

  return (
    <div className="w-[90dvw] px-4 md:w-1/2">
      <Heading1 className="mb-4">{title}</Heading1>

      {isLoading ? (
        <Caption className="py-4 text-gray-500">Loading coffee products...</Caption>
      ) : isError ? (
        <Caption className="py-4 text-red-500">Failed to load products. Please try again later.</Caption>
      ) : products.length === 0 ? (
        <Caption className="py-4 text-gray-500">No coffee available at the moment.</Caption>
      ) : (
        <div className="flex flex-col gap-2">
          {products.map((item) => (
            <CoffeeItem key={item.id} coffee={item} />
          ))}
        </div>
      )}

      <Button
        variant="link"
        className="px-0 mt-4 underline text-primary hover:text-secondary"
      >
        <Link href="/" className="underline text-primary hover:text-secondary">
          View All Coffee
        </Link>
      </Button>
    </div>
  );
}

export default CoffeeList;
