"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/landing-page/Hero";
import { Services } from "@/components/landing-page/Services";
import { PastProjects } from "@/components/landing-page/PastProjects";
import { Process } from "@/components/landing-page/Process";
import { Pricing } from "@/components/landing-page/Pricing";
import { Contact } from "@/components/landing-page/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <PastProjects />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
