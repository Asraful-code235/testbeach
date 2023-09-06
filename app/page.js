import BgCoverInfo from "@/components/pages/BgCoverInfo";
import Clubs from "@/components/pages/Clubs";
import ContactPage from "@/components/pages/Contact";
import FestiveInfo from "@/components/pages/FestiveInfo";
import FestivePage from "@/components/pages/FestivePage";
import GroupCarousel from "@/components/pages/GroupCarousel";
import Hero from "@/components/pages/Hero";
import MenuConsult from "@/components/pages/MenuConsult";

export default function Home() {
  return (
    <>
      <Hero />
      <FestiveInfo />
      <BgCoverInfo />
      <MenuConsult />
      <Clubs />
      <GroupCarousel />
      <FestivePage />
      <ContactPage />
    </>
  );
}
