import Hero from "@/app/home/sections/Hero";
import Navbar from "@/app/home/sections/Navbar";
import { PageShell } from "@/components/layouts/page-shell";
import About from "./home/sections/About";
import Skills from "./home/sections/Skills";
import WhyChooseMe from "./home/components/why-choose-me/WhyChooseMe";
import MyLatestWork from "./home/sections/MyLatestWork";
import MyWorkExperience from "./home/sections/MyWorkExperience";
import SuccessStories from "./home/sections/SuccessStories";
import HaveQuestions from "./home/sections/HaveQuestions";
import Contact from "./home/sections/Contact";
import Footer from "./home/sections/Footer";

export default function Home() {
  return (
    <PageShell>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <WhyChooseMe />
        <MyLatestWork />
        <MyWorkExperience />
        <SuccessStories />
        <HaveQuestions />
        <Contact />
        <Footer />
      </main>
    </PageShell>
  );
}
