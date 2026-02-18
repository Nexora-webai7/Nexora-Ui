"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/landing-page/Hero";
import { Services } from "@/components/landing-page/Services";
import { Portfolio } from "@/components/landing-page/Portfolio";
import { Process } from "@/components/landing-page/Process";
import { Contact } from "@/components/landing-page/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
