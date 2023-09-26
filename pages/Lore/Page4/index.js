import React, { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";

export default function Index(props) {
  const [scroll, setScroll] = useState();
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2));
  });
  return (
    <div className="w-full h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scroll >= 0.8 && scroll <= 1 ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
        className="fixed top-0"
      >
        <div className=" text-[1.1rem] tracking-widest m-[5%]">
            <p className="italic border-b-2 border-green-500 pb-3">ORIGINS</p>
            <p className="pt-3">Pavs were first discovered when Pavia Corp was exploring the planet Pavia on an expedition mission. The team would discover large numbers of creatures roaming the land in dense terrains such as forests and mountains and though their origins are unknown, many are believed to have been brought here by the unknown crashed spacecraft first discovered by the Horizon in QAP.</p>
            <p>Small in size, Pavia Corp believed that Pavs were light-dependant creatures that could convert sunlight into energy and clean air. They would act as air purifiers when congregated in large numbers over long periods of time on planets with unbreathable air and could counterbalance certain properties within atmospheres on planets to make them habitable for humans to populate. It has been said that some Pavs even have the ability to change the weather. Pavs were known to be tough and could survive in space as well as on harsh planet terrains. Though their true molecular composition is unknown, they are considered to be comprised of various elements from hearby meteors, stars, and asteroids.</p>

            <p className="italic border-b-2 border-green-500 pt-14 pb-3">SETTLEMENT ON PAVIA</p>
            <p className="pt-3">It is believed that since the crash that brought them here, Pavs would spread across the land, multiplying and evolving into different. forms. Over the next 40 years, their bodies would produce enough energy and oxygen to transform the atmosphere into breathable air, and in the few years leading up to the Horizon landing the lands across Payia would grow grass; trees, and plants and eventually form rivers and oceans, becoming habitable for humanity. In the year 2AP, the first Pavs would be discovered by humans and it is said that the very first Pav ever spotted was golden.</p>
        </div>
      </motion.div>
    </div>
  );
}
