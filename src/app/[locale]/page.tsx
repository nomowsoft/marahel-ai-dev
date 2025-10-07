import { Challenges } from "@/components/challenges/Challenges";
import { CTA } from "@/components/CTA/cta";
import Hero from "@/components/hero/Hero";
import { Products } from "@/components/products/Products";
import { Trust } from "@/components/trust/trust";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Marahel Ai",
  description: "Marahel Ai",
  alternates:{
    canonical: `https://marahel.ai`
  }
}

export default function Home() {
  return (
    <section>
      <Hero />
      <Products />
      <Challenges />
      <Trust />
      <CTA />
    </section>
  );
}
