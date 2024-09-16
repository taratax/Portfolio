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

  const lnavItems = [
    { name: language === "pl" ? navItems[0].name[1] : navItems[0].name[0], link: navItems[0].link },
    { name: language === "pl" ? navItems[1].name[1] : navItems[1].name[0], link: navItems[1].link },
    { name: language === "pl" ? navItems[2].name[1] : navItems[2].name[0], link: navItems[2].link },
    { name: language === "pl" ? navItems[3].name[1] : navItems[3].name[0], link: navItems[3].link },
  ];


  return (

    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip" suppressHydrationWarning={true}>
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={lnavItems}
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
