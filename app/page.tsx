'use client'
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useContext } from "react";
import Image from "next/image";

import { LanguageContext } from "./layout";


export default function Home() {
  const { language } = useContext(LanguageContext);
  return (

    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip" suppressHydrationWarning={true}>
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero language={language} />
        <Grid language={language} />
        <RecentProjects language={language} />
        {/* <Clients language={language} /> */}
        <Experience language={language} />
        <Process />
        <Footer language={language} />
      </div>
    </main>

  );
}
