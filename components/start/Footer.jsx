import Image from "next/image";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] text-sm font-medium bg-[#f0ede2] w-full flex flex-col items-center justify-center gap-10">
      <div className="flex items-center gap-6">
        <p>Nous contacter </p>
        <p> Mentions Légales</p>
      </div>
      <div>
        <Image
          src={"/images/logo.png"}
          width={400}
          height={400}
          className="w-72 h-24 aspect-video "
          alt=""
        />
      </div>
      <div className="text-center space-y-2">
        <p>Baie de Saint-Jean, 97133 Saint-Barthélémy</p>
        <p>contact@naobeachclub.com</p>
        <p>+590 590 77 47 48</p>
        <p>Powered bylequipecreative.com</p>
      </div>
    </footer>
  );
}
