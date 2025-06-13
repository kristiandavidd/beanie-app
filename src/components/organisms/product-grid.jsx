import { Button } from "@/components/molecules/button";
import { Caption, Heading5 } from "../atoms/text";

export default function ProductGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[90dvw] mx-auto  text-center">
      <div
        className="bg-center bg-cover aspect-square "
        style={{ backgroundImage: "url('/images/instant-coffee.jpg')" }}
      ></div>
      <div className="p-4 ">
        <div className="flex flex-col items-center justify-center h-full p-4 transition-colors duration-300 ease-in-out border border-gray-200 rounded-md hover:bg-accent">
          <Heading5 className="mb-2 font-semibold uppercase ">
            Instant Coffee
          </Heading5>
          <Caption className="text-gray-700">
            Café instantaneus est sapor vividus et exquisitus, aptus in quovis
            tempore frangendi fastidium celeriter.
          </Caption>
          <Button variant="link" size="sm" className="mt-2 underline uppercase">
            Shop Category
          </Button>
        </div>
      </div>
      <div
        className="bg-center bg-cover aspect-square "
        style={{ backgroundImage: "url('/images/coffee-makers.jpg')" }}
      ></div>
      <div className="p-4 ">
        <div className="flex flex-col items-center justify-center h-full p-4 transition-colors duration-300 ease-in-out border border-gray-200 rounded-md hover:bg-accent">
          <Heading5 className="mb-2 font-semibold uppercase ">
            Coffee Makers
          </Heading5>
          <Caption className="text-gray-700">
            Signa coffeeae adhibentur ut distinguantur flavors intensiores, ac
            perfectus est hoc in omnibus rebus.
          </Caption>
          <Button variant="link" size="sm" className="mt-2 underline uppercase">
            Shop Category
          </Button>
        </div>
      </div>
      <div className="p-4 ">
        <div className="flex flex-col items-center justify-center h-full p-4 transition-colors duration-300 ease-in-out border border-gray-200 rounded-md hover:bg-accent">
          <Heading5 className="mb-2 font-semibold uppercase ">
            Coffee Accessories
          </Heading5>
          <Caption className="text-gray-700">
            Accessoria coffeeae perfectam experientiam augent, qualitate pretii
            et utilitate in omnem usum confestim.
          </Caption>
          <Button variant="link" size="sm" className="mt-2 underline uppercase">
            Shop Category
          </Button>
        </div>
      </div>
      <div
        className="bg-center bg-cover aspect-square "
        style={{ backgroundImage: "url('/images/coffee-accessories.jpeg')" }}
      ></div>

      <div className="p-4 ">
        <div className="flex flex-col items-center justify-center h-full p-4 transition-colors duration-300 ease-in-out border border-gray-200 rounded-md hover:bg-accent">
          <Heading5 className="mb-2 font-semibold uppercase ">
            Coffee Gift Sets
          </Heading5>
          <Caption className="text-gray-700">
            Optimae dona pro amatoribus coffeeae, quae gustum subtilissimum
            augent, ac cor movent donum meliore.
          </Caption>
          <Button variant="link" size="sm" className="mt-2 underline uppercase">
            Shop Category
          </Button>
        </div>
      </div>
      <div
        className="bg-center bg-cover aspect-square "
        style={{ backgroundImage: "url('/images/coffee-gift-sets.jpg')" }}
      ></div>
    </section>
  );
}
