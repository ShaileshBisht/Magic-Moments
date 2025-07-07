import dynamic from "next/dynamic";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import { GalleryLoader, FontShowcaseLoader } from "../src/loaders";
import { features } from "../src/constants";

// Lazy load heavy components
const Gallery = dynamic(() => import("../src/components/Gallery"), {
  loading: () => <GalleryLoader />,
});

const FontShowcase = dynamic(() => import("../src/components/FontShowcase"), {
  loading: () => <FontShowcaseLoader />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen -mt-16">
      <Hero />
      <Features features={features} />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
