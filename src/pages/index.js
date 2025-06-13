import GuestLayout from "@/layout/guest-layout";
import Hero from "@/components/organisms/hero";
import ProductList from "@/components/organisms/product-list";
import TestimoniList from "@/components/organisms/testimoni-list";
import ProductGrid from "@/components/organisms/product-grid";
import CoffeeList from "@/components/organisms/coffee-list";
import Contact from "@/components/organisms/contact";
import Benefits from "@/components/organisms/benefits";
import BlogList from "@/components/organisms/blog-list";
import InstagramPost from "@/components/organisms/instagram-post";

export default function Home() {
  return (
    <GuestLayout title="Beanie - Your Best Coffee Shop">
      <Hero />
      <ProductList />
      <TestimoniList />
      <ProductGrid />
      <section className="container flex flex-col gap-8 py-16 mx-auto md:flex-row w-[90dvw]">
        <CoffeeList type="newest" title="New Arrivals" />
        <CoffeeList type="bestseller" title="Best Seller" />
      </section>
      <Contact />
      <Benefits />
      <BlogList />
      <InstagramPost />
    </GuestLayout>
  );
}
