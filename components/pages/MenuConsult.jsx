import Image from "next/image";
import { FadeIn } from "../animation/FadeIn";
import Button from "../shared/Button";

export default function MenuConsult() {
  return (
    <section className=" md:mt-10 grid grid-cols-1 md:grid-cols-3 ">
      <FadeIn className="col-span-1  ">
        <div className="flex flex-col items-start gap-4 md:gap-14 justify-center p-14 h-full md:-mt-14">
          <h1 className="text-3xl italic -ml-10 md:ml-6 ">La carte</h1>
          <div className="flex text-sm md:text-base flex-col max-w-3xl md:max-w-5xl gap-2 md:gap-8 md:lg-6 lg:ml-14">
            <p className=" font-semibold">
              Une carte créée à quatre mains par les Chefs Kawaï et Delage,
              entre créations spéciales et plats signatures.
            </p>
            <p className=" font-medium">
              Parfaite fusion des talents et sensibilités culinaires de chacun,
              au profit d’une carte métissée, fraîche et contemporaine.
            </p>

            <Button
              variant="light"
              extraClassName="border border-orange-400 text-orange-400 w-fit "
            >
              Consulter la carte
            </Button>
          </div>
        </div>
      </FadeIn>
      <section className="col-span-1 md:col-span-2 max-h-[400px] md:max-h-screen ">
        <Image
          src={"/images/image3.jpg"}
          alt=""
          width={600}
          height={600}
          className="w-full h-full aspect-auto  px-4 md:px-0  object-center object-cover"
        />
      </section>
    </section>
  );
}
