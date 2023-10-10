import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className="w-screen container m-auto snap-child-start px-10 flex flex-col justify-center items-center min-h-screen max-md:pt-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2">
          <div className="w-full ">
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              Settlement on Pavia
            </p>
            <p className="text-xs lg:text-sm text-justify">
              It is believed that since the crash that brought them here, PAVS
              would spread across the land, multiplying and evolving into
              different forms. Over the next 40 years, their bodies would
              produce enough energy and oxygen to transform the atmosphere into
              breathable air, and in the few years leading up to the Horizon
              landing the lands across Pavia would grow grass, trees, plants and
              eventually form rivers and oceans, becoming habitable for
              humanity. In the year 2AP, the first PAVS would be discovered by
              humans and it is said that the very first PAV ever spotted was
              golden.
            </p>
          </div>
        </div>
        <div className="mt-5 lg:flex gap-10">
          <div className="lg:w-full lg:flex flex-col justify-center">
            <img
              src="assets/images/the_vita.png"
              alt="PAV"
              className="rounded-xl w-full object-cover max-md:h-[15rem]"
            />
          </div>
          <div className="lg:w-[80%]">
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              The Pillar of Vita
            </p>
            <div className="flex flex-col lg:gap-3 gap-2 lg:text-sm text-xs text-justify">
              <p>
                Thought to have been created between 20BP - 30BP, the Pilla of
                Vita (translated to the Pillar Of life) was believed to be a
                sacred shrine built by the PAVS. Discovered in 50AK, a human
                recon team discovered a large altar built from colossal pieces
                of stone amongst the jungle on the Planet&apos;s surface. The
                stones were tall and each was engraved with different markings
                and symbols. Whilst the origins of these sacred stones and how
                they were moved are unknown, researchers concluded that PAVS
                would use this area as a place of worship.
              </p>
            </div>

            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              Relationship with humans
            </p>
            <div className="flex flex-col lg:gap-3 gap-2 lg:text-sm text-xs text-justify">
              <p>
                In the year 61AK humans would colonize Pavia, discovering
                thousands of different types of PAVS, many of which had unique
                abilities and traits. Humans would later come to accept PAVS as
                an integral part of the planet&apos;s ecosystem and in the year
                62AK the people of Pavia passed a law stating that no human
                could harm a PAV making them a protected species throughout the
                planet. Although they are independent and free-thinking animals,
                humans primarily kept their distance from PAVS as their behavior
                could be irrational and unpredictable, staying clear of
                mountains and jungle areas where PAVS presided.
              </p>
            </div>
          </div>
        </div>
        <p className="snap-child-end max-md:pb-28  md:hidden"></p>
      </motion.div>
    </div>
  );
}
