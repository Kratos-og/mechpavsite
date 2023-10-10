import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className="w-screen container m-auto snap-child-start max-lg:px-10 flex flex-col justify-center items-center min-h-screen max-md:pt-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2">
          <div className="w-full ">
            
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
            2AP PAVS are found
            </p>
            <p className="text-xs lg:text-sm text-justify">
            2 years after the Horizon discovered the crash site on Pavia, the Pavia Corp expedition team was tasked to explore the planet whilst the Horizon sent messages back to Earth confirming Pavia to be a habitable and suitable alternative to Earth's climate problem. Months into the exploration, the Pavia Corp team discovers large numbers of creatures roaming the land in dense terrain such as forests and mountains which they would later name Pavs. Small in size, PAVS were light-dependant animals that could convert sunlight into energy and clean air, and Pavia Corp members that studied them believed they could counterbalance certain atmospheric properties on planets to make them habitable. Pavs could survive in space as well as on harsh planet terrains and though their origins are unknown, many are believed to have been brought here by the unknown crashed spacecraft. Though little is known about Pavs, scientists believe they are comprised of various elements from nearby meteors, stars, and asteroids.
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
            3AP The Pillar of Vita is Discovered
            </p>
            <p className="text-xs lg:text-sm text-justify">
            Shortly after exploring the surface of the planet, the Pavia Corp exploration team uncovered a large shrine built from colossal pieces of stone hidden amongst the thick jungle on the Planet's surface. Each stone was engraved with different markings and whilst the origins of these sacred stones and how they were moved are unknown, researchers believed that Pavs would use this area as a place of worship and would eventually name it 'The Pillar Of Vita Early settlers believed that the Pillar of Vita might hold insights into the past, potentially unlocking the mysteries of Pavs origins and their profound connection to Pavia. Some even hypothesize that the Pillor is a repository of knowledge, a time capsule left behind by an advanced civilization that once graced the planet. Yet, despite the tantalizing theories, the true nature of the Pillar and the secrets it guards remain elusive. As Pavia continues to evolve and humanity's connection with the PAVS deepens, the Pillar of Vita remains a symbol of unity between the two species. It stands as a testament to the planet's rich history.
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
            8AP Humans colonize
            </p>
            <p className="text-xs lg:text-sm text-justify">
            5 years after The Pillar of Vita is discovered, Earth receives messages from the Horizon that Pavia is a safe habitable alternative to Earth's overpopulation and climate crisis. Pavia Corp would then send instructions to the people back on earth, helping them build commercial vessels to transport humans to Pavia. Later that year the first settlements of humans would colonize Pavia and begin to build, starting with the central plaza. The building of the Plaza was a monumental endeavor that marked a pivotal milestone in the planet's colonization and the establishment of a new human civilization, a hub of innovation, culture, and connectivity. Shortly after the creation of the plaza, Portals were created to overcome the challenges of traversing the expansive land. Leveraging advanced technology and their evolving understanding of PAVS unique energy-conversion capabilities, the settlers devised a network of portals that spanned Pavia's diverse terrain to be used by both Humans and Pavs.
            </p>
            <p className="snap-child-end max-md:pb-36 md:hidden"></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
