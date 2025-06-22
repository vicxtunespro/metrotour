import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import TourAreas from "@/components/quaterGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 md:px-16 lg:px-36 py-4">
      <Banner />
      <TourAreas/>
    </div>
  );
}
