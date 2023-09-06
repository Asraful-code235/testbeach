import { FadeIn } from "../animation/FadeIn";
import Button from "../shared/Button";

export default function FestivePage() {
  return (
    <FadeIn>
      <section className=" min-h-screen gap-10 md:gap-16 font-bold flex-col text-white flex items-center justify-center  w-full h-full bg-[url('/images/bg.jpg')] bg-no-repeat bg-cover bg-center z-10 ">
        <strong className=" text-2xl md:text-5xl px-4 text-center">
          NAO BEACH la festive
        </strong>
        <p className="px-4 text-center">
          Le Beach Club s&apos;embrasera chaque après-midi au rythme des DJs,
          dans une célébration du moment présent et du bonheur d&apos;être
          ensemble.
        </p>
        <Button variant="light" extraClassName="px-24">
          Nous suivre
        </Button>
      </section>
    </FadeIn>
  );
}
