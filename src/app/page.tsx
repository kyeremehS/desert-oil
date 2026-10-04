import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Stations from "@/components/Stations";
import Why from "@/components/Why";
import Delivery from "@/components/Delivery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Stations />
      <Why />
      <Delivery />
      <Contact />
    </main>
  );
}
