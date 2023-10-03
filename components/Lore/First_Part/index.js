
import { motion } from "framer-motion";
export default function Index() {
  return (
    <div className="h-screen w-screen lg:px-40 px-10 flex flex-col justify-center max-md:mt-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2 max-md:flex-col-reverse">
          <div className="w-full">
            <p className="lg:text-2xl font-bold border-b-[1px] border-white lg:pb-3 lg:mb-3 mb-2 pt-2">
              PAVS
            </p>
            <p className="lg:text-sm text-justify text-[0.60rem]">
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
          <div className="lg:w-[40rem]">
            <img
              src="assets/images/pav.png"
              alt="PAV"
              className="rounded-xl w-full object-cover max-md:h-[10rem]"
            />
          </div>
        </div>
        <div>
          <p className="lg:text-2xl font-bold border-b-[1px] border-white lg:pb-3 lg:mb-3 mb-2 pt-2">
            Origins
          </p>
          <div className="flex flex-col lg:gap-3 gap-2 lg:text-sm text-[0.60rem] text-justify">
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
        </div>
        <div>
          <p className="lg:text-2xl font-bold border-b-[1px] border-white lg:pb-3 lg:my-3 mb-2 pt-2">
            Settlement on Pavia
          </p>
          <p className="lg:text-sm text-[0.60rem] text-justify">
            It is believed that since the crash that brought them here, PAVS
            would spread across the land, multiplying and evolving into
            different forms. Over the next 40 years, their bodies would produce
            enough energy and oxygen to transform the atmosphere into breathable
            air, and in the few years leading up to the Horizon landing the
            lands across Pavia would grow grass, trees, plants and eventually
            form rivers and oceans, becoming habitable for humanity. In the year
            2AP, the first PAVS would be discovered by humans and it is said
            that the very first PAV ever spotted was golden.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
