
import { motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
export default function Index(props) {
  const [scroll, setScroll] = useState(0);
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2));
  });
  console.log(scroll)
  return (
    <div className="w-screen container m-auto snap-child-start px-10 flex flex-col justify-center items-center min-h-screen py-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-3/5">
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              PAVS
            </p>
            <p className="text-xs lg:text-sm text-justify">
              PAVS are 4-legged creatures from the planet Pavia. They are
              light-dependant animals that can create energy and clean air by
              converting sunlight within their bodies. They are composed of a
              variety of unknown elements believed to be derived from nearby
              meteors and asteroids from local solar systems. PAVS are
              incredibly resistant and even have the unique ability to
              regenerate lost limbs, though this process has been found to be
              slow. PAVS are curious and inquisitive in nature and though they
              are extremely loyal, generally avoid interactions with humans.
              They are telepathic and have no vocal cords to speak so
              communicate by producing grunts and whistles from time to time.
              They can often be found in rough terrains such as mountains and
              forests and although harmless at first glance, they can be
              aggressive when threatened and have been known to seriously injure
              humans due to their short temperament.
            </p>
          </div>
          <div className="lg:w-2/5">
            <img
              src="assets/images/pav.png"
              alt="PAV"
              className="rounded-xl w-full object-cover max-md:h-[10rem]"
            />
          </div>
        </div>
        <div className="mt-5">
          <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
            Origins
          </p>
          <div className="flex flex-col lg:gap-3 gap-2 lg:text-sm text-xs text-justify">
            <p>
              PAVS were first discovered when Pavia Corp was exploring the
              planet Pavia on an expedition mission. The team would discover
              large numbers of creatures roaming the land in dense terrains such
              as forests and mountains and though their origins are unknown,
              many are believed to have been brought here by the unknown crashed
              spacecraft first discovered by the Horizon in 0AP.
            </p>
            <p>
              Small in size, Pavia Corp believed that PAVS were light-dependant
              creatures that could convert sunlight into energy and clean air.
              They would act as air purifiers when congregated in large numbers
              over long periods of time on planets with unbreathable air and
              could counterbalance certain properties within atmospheres on
              planets to make them habitable for humans to populate. It has been
              said that some PAVS even have the ability to change the weather.
              PAVS were known to be tough and could survive in space as well as
              on harsh planet terrains. Though their true molecular composition
              is unknown, they are considered to be comprised of various
              elements from nearby meteors, stars, and asteroids.
            </p>
          </div>
          <p className=" snap-child-end mt-28">

          </p>
        </div>
      </motion.div>
    </div>
  );
}