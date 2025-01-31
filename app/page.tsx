import CoreValues from "@/components/CoreValues";
import CTA from "@/components/CTA";
import Figures from "@/components/Figures";
import HomePageCarousel from "@/components/HomePageCarousel";
import IntroText from "@/components/IntroText";
import RecentInstallations from "@/components/RecentInstallations";
import RecentNews from "@/components/RecentNews";
import SpecialistsProduct from "@/components/SpecialistsProduct";
import Sustainable from "@/components/Sustainable";
import TrustedClients from "@/components/TrustedClient";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#eee", paddingLeft: "0" }}>
      <HomePageCarousel />
      <CTA />
      <Figures />
      <IntroText />
      <Sustainable />
      <SpecialistsProduct />
      <RecentInstallations />
      <CoreValues />
      <TrustedClients />
      <RecentNews />
    </div>
  );
}
