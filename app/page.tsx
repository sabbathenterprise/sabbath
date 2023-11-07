


import Image from "next/image";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Teams from "@/components/Teams";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Teams />
    </>
  );
}
