import Image from "next/image";
import Button from "../shared/Button";
import { FadeIn } from "../animation/FadeIn";

export default function BgCoverInfo() {
  return (
    <FadeIn>
      <section className="min-h-screen md:max-h-[40vh] relative bg-white">
        <Image
          src={"/images/image4.jpg"}
          alt=""
          width={1000}
          height={1000}
          layout="responsive"
          className="w-full min-h-screen md:max-h-[40vh] aspect-auto  object-center object-cover
         "
        />
        <span className="absolute inset-0 gap-6 md:gap-16 px-4 text-white bg-black bg-opacity-30 flex flex-col items-center justify-center text-center">
          <strong className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto  ">
            Quand le raffinement japonais côtoie la chatoyante Méditerranée
          </strong>
          <p className="font-medium md:text-base text-sm max-w-5xl mx-auto ">
            NAO BEACH s&apos;inspire de l&apos;essence de la dolce vita de la
            Riviera, pour un moment de vie unique au coeur des Caraïbes
          </p>
          <Button variant="light" extraClassName="rounded-full px-10">
            Reserver
          </Button>
        </span>
      </section>
    </FadeIn>
  );
}
