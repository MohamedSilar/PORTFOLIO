
import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxDemo";

const Clients = dynamic(() => import('@/components/Clients'), {
  loading: () => <p>Loading Clients...</p>,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <p>Loading Footer...</p>,
});
const Grid = dynamic(() => import('@/components/Grid'), {
  loading: () => <p>Loading Grid...</p>,
});

const RecentProjects = dynamic(() => import('@/components/RecentProjects'), {
  loading: () => <p>Loading Recent Projects...</p>,
});

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <p>Loading Experience...</p>,
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
          />
        <Hero />
        <Grid />
        <RecentProjects />
        <BackgroundBoxesDemo />
        <Clients />
        <Experience />
        <Approach/>
        <Footer />
      </div>
    </main>    
  );
}
