import Hero from "../components/Home/Hero";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Model from "../components/Layout/Model";

export default function Home() {
  return (
    <div className="w-full min-h-screen m-auto relative">
      <div className="w-full h-screen snap-parent-y-mandatory relative" id="cont">
        <Model />
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
};
