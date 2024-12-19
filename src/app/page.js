"use client";

import Categories from "@/components/categories";
import Hero from "@/components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".first_container, .second_container", {
      y: 10,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      stagger: 0.18,
    });
  });
  return (
    <div>
      <div className="first_container">
        <Hero />
      </div>
      <div className="second_container">
        <Categories />
      </div>
    </div>
  );
}
