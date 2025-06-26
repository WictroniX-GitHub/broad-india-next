import Applications from "@/components/Applications";
import CoreValues from "@/components/CoreValues";
import CTA from "@/components/CTA";
import Figures from "@/components/Figures";
import HomePageCarousel from "@/components/HomePageCarousel";
import IntroText from "@/components/IntroText";
import MissionFocus from "@/components/MissionFocus";
import RecentInstallations from "@/components/RecentInstallations";
import RecentNews from "@/components/RecentNews";
import SpecialistsProduct from "@/components/SpecialistsProduct";
import Sustainable from "@/components/Sustainable";
import TrustedClients from "@/components/TrustedClient";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#eee", paddingLeft: "0" }}>
      <HomePageCarousel />
      <IntroText />
      <Figures />
      <Sustainable />
      <SpecialistsProduct />
      <MissionFocus />
      <RecentInstallations />
      <CoreValues />
      <TrustedClients />
      <Applications />
      <RecentNews />
      <CTA />
    </div>
  );
}
