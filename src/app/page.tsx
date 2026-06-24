import Hero from "@/app/home/sections/Hero";
import Navbar from "@/app/home/sections/Navbar";
import { PageShell } from "@/components/layouts/page-shell";

export default function Home() {
  return (
    <PageShell>
      <Navbar />

      <main>
        <Hero />
      </main>
    </PageShell>
  );
}