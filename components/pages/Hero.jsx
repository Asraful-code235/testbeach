import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="w-full max-h-screen relative -mt-10  bg-cover bg-center bg-no-repeat ">
      <div className="min-h-[30vh]">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/6359108537dd3e5b9cb8a528/aaf2af7d-0ede-4212-a00e-111b7cd7e9b4/NAO+BEACH-high.gif?format=2500w"
          }
          width={3200}
          height={1800}
          className="w-full min-h-[50vh]  object-cover object-center "
        />
      </div>

      <div className="absolute bottom-4 lg:bottom-0 w-full flex items-center justify-center ">
        <ArrowDownIcon className="w-10 h-10 text-gray-50  text-opacity-80 font-normal" />
      </div>
    </section>
  );
}
