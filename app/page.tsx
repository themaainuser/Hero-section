import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
    </div>
  );
}
