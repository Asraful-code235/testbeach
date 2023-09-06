import Image from "next/image";
import { FadeIn } from "../animation/FadeIn";

export default function FestiveInfo() {
  return (
    <section className="grid grid-cols-1 bg-white md:grid-cols-3 h-full md:min-h-screen text-gray-900">
      <div className="order-2 md:order-1 col-span-1 md:col-span-2">
        <Image
          src={"/images/image2.jpg"}
          width={1000}
          height={1000}
          priority
          className="w-full aspect-auto h-full object-cover object-center"
          alt=""
        />
      </div>
      <FadeIn className="flex order-1 md:order-2 flex-col gap-10 items-start md:m-10 md:mt-[10vh]  justify-center  p-10">
        <h1 className="text-2xl font-bold w-full md:max-w-[410px]  mb-6">
          L’ ESCALE CHIC & FESTIVE, DANS L’UNE DES PLUS BELLES BAIES DU MONDE
        </h1>
        <div className="w-full flex flex-col gap-6 md:gap-20 md:max-w-[410px] md:my-10 md:ml-10">
          <p>
            Au coeur de la baie de Saint-Jean, NAO BEACH est une ode à la
            douceur de vivre insulaire, ses horizons turquoises et ses rivages
            paradisiaques. Un nouveau beach club & restaurant où l’on se laisse
            bercer par le son des vagues et la chaude brise caribéenne pour une
            expérience culinaire & festive à Saint-Barthélemy.
          </p>
          <p className="w-full md:max-w-[410px] mb-6">
            Restaurant I Bar I Sunbeds I DJ set tous les jours
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
