import {
  IconCoffee,
  IconCup,
  IconTeapot,
  IconCircles,
} from "@tabler/icons-react";
import { Caption, Heading5 } from "../atoms/text";

export default function Benefits() {
  const benefits = [
    {
      title: "Quick Delivery",
      description:
        "Get your coffee delivered to your doorstep within 30 minutes.",
      icon: <IconCup strokeWidth={1.2} className="duration-300 ease-in-out text-muted-foreground hover:text-secondary" />,
    },
    {
      title: "Pickup In Store",
      description: "Order online and pick up your coffee at our store.",
      icon: <IconTeapot strokeWidth={1.2} className="duration-300 ease-in-out text-muted-foreground hover:text-secondary" />,
    },
    {
      title: "No Shipping Charge",
      description: "We offer free shipping on all orders over $50.",
      icon: <IconCoffee strokeWidth={1.2} className="duration-300 ease-in-out text-muted-foreground hover:text-secondary" />,
    },
    {
      title: "Friendly Service",
      description: "Our support team is available 24/7 to assist you.",
      icon: <IconCircles strokeWidth={1.2} className="duration-300 ease-in-out text-muted-foreground hover:text-secondary" />,
    },
  ];

  return (
    <section className="w-full my-24 border-t-2 border-b-5">
      <div className="grid justify-center grid-cols-1 gap-4 px-12 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-1 px-12 py-6 text-center "
          >
            <span className="text-2xl duration-300 ease-in-out hover:text-secondary">{benefit.icon}</span>
            <Heading5 className="font-semibold uppercase duration-300 ease-in-out hover:text-secondary">
              {benefit.title}
            </Heading5>
            <Caption className="mt-2 text-gray-600 md:mt-0">
              {benefit.description}
            </Caption>
          </div>
        ))}
      </div>
    </section>
  );
}
