import React, { useEffect, useState } from "react";
import { Button } from "../molecules/button";
import { Caption, Heading1, Heading3 } from "../atoms/text";
import Image from "next/image";

export default function BlogList() {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, []);

  return (
    <section className="my-12 w-[90dvw]" id="blog">
      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <Heading1 className="text-3xl text-center uppercase">
          Read Our Blogs
        </Heading1>
        <Button variant="link" className="underline uppercase">
          Read Blog Posts
        </Button>
      </div>

      {isLoading ? (
        <p className="py-6 text-center text-gray-500">Loading blog posts...</p>
      ) : isError ? (
        <p className="py-6 text-center text-red-500">
          Failed to load blogs. Please try again later.
        </p>
      ) : blog.length === 0 ? (
        <p className="py-6 text-center text-gray-500">No blog posts available.</p>
      ) : (
        <div className="flex flex-col justify-center w-full gap-6 md:flex-row">
          {blog.map((item, index) => (
            <div
              key={item.id}
              className="w-full py-6 transition-shadow duration-300 bg-white rounded-lg h-fit hover:cursor-pointer hover:bg-accent"
            >
              <div
                className={`w-full overflow-hidden rounded-md mb-4 ${
                  index === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  width={500}
                  height={300}
                  src={item.img_url}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <Heading3 className="duration-300 ease-in-out hover:text-secondary">
                {item.title}
              </Heading3>
              <Caption className="mt-2 text-gray-600 line-clamp-2">
                {item.content}
              </Caption>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
