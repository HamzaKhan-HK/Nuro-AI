import DownloadPrompt from "@/components/DownloadPrompt";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Pricing />
      <DownloadPrompt />
      <Footer />
    </>
  );
}
