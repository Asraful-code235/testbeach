import Image from "next/image";
import { FadeIn } from "../animation/FadeIn";
import Button from "../shared/Button";

export default function Clubs() {
  return (
    <section className="px-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 md:mx-28 bg-white">
      <section className=" col-span-1 order-2 md:order-1 flex items-center justify-center max-h-[60vh] md:gap-4 lg:gap-16 p-14 py-16 bg-[#f0ede2]">
        <div className="space-y-2 h-full">
          <Image
            src={"/images/image3.jpg"}
            alt=""
            width={600}
            height={600}
            className="w-full h-full aspect-video md:aspect-auto object-center object-cover"
          />
          <p>BEACH CLUB</p>
        </div>
        <div className="space-y-2 h-full">
          <Image
            src={"/images/image3.jpg"}
            alt=""
            width={600}
            height={600}
            className="w-full h-full aspect-video md:aspect-auto  object-center object-cover"
          />
          <p>RESTAURANT</p>
        </div>
      </section>
      <FadeIn className="col-span-1 h-full order-1 md:order-2">
        <div className="flex flex-col items-start gap-4 md:gap-14 justify-center p-14 h-full md:-mt-14">
          <h1 className="text-3xl italic -ml-10 md:-ml-0 ">Reservations</h1>
          <div className="flex text-sm md:text-base flex-col max-w-3xl md:max-w-5xl gap-2 md:gap-8 md:lg-6 lg:ml-14">
            <p className=" font-semibold">
              Rejoignez-nous tout au long de la journée au restaurant, au bar et
              sur les sunbeds du Beach Club.
            </p>

            <Button
              variant="light"
              extraClassName=" w-fit md:mt-10 !text-[#bf5d38] border-[1px] !border-[#bf5d38]"
            >
              Reserver
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
