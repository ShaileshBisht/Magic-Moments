import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import Gallery from "../src/components/Gallery";
import FontShowcase from "../src/components/FontShowcase";
import { features } from "../src/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features features={features} />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
