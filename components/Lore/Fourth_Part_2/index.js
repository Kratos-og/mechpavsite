import { motion } from "framer-motion";

export default function index() {
  return (
    <div className="w-screen container m-auto snap-child-start max-lg:px-10 flex flex-col justify-center items-center min-h-screen max-md:pt-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2">
          <div className="w-full ">
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4 w-full flex">
              TIMELINE OF EVENTS
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              41BP Crash landing of the spaceship of unknown origin
            </p>
            <p className="text-xs lg:text-sm text-justify">
              An unknown spacecraft crash lands on the surface of Pavia. Nothing
              more is known about this landing other than it is the first
              recorded event on the planet.
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              38BP Moonforce is formed on earth
            </p>
            <p className="text-xs lg:text-sm text-justify">
              In the year 38BP a group of scientists formed the top-secret
              organization Moonforce. Made up of 12 members including lead
              scientist Alfonso Finkso, Moonforce would flee from Earth aboard a
              ship named the Horizon in an attempt to work on a solution to the
              planet&apos;s growing climate problem. Moonforce would spend many
              years navigating space working with high-end tech and classified
              equipment in an attempt to solve the rapidly growing climate
              crisis back on Earth.
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              1BP Alfonso Finkso Dies
            </p>
            <p className="text-xs lg:text-sm text-justify">
              In the year 1BP Alfonso Finkso, leader and founder of Moonforce
              and inventor of a lot of the tech aboard the Horizon dies aged 62
              while onboard the ship. Finkso died of unknown causes and was
              found unconscious by his daughter Floella Finkso in the Horizon
              laboratory. In his later years, Finkso slowly became ill while
              experimenting on himself after he had concluded Earth was no
              longer savable and had started to lose hope. Finkso had always
              kept his work secretive and in a last effort to preserve his
              memory, Finkso&apos;s last act had been to download his
              consciousness onto the ship&apos;s system core to conserve his
              memory. In years to follow, Finkso&apos;s encrypted records
              remained a puzzle, a testament to his determination to safeguard
              knowledge beyond the grave.
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              OAP Moonforce landing
            </p>
            <p className="text-xs lg:text-sm text-justify">
              The Moonforce group, now led by Finkso&apos;s daughter Floella,
              leaves Earth&apos;s solar system on the Horizon on a recon mission
              in search of a habitable planet to recolonize humanity. A year
              after Finkso&apos;s death, the Horizon picks up a distress signal
              from an unknown source on the planet Pavia, a planet located in a
              nearby solar system several light years from Earth that was deemed
              to have habitable qualities such as a similar day and night cycle,
              gravitational pull, and sufficient water on the planet&apos;s
              surface.
            </p>
            <p className="text-xs lg:text-sm text-justify pt-2">
              Whilst on a mission, the Horizon picks up an emergency beacon from
              a crash site that was sent as part of a failsafe when the
              spacecraft started to lose power upon entry into Pavia's
              atmosphere. After tracking the beacon to Pavia the Horizon was
              able to land safely on the planet and excavate the crash site. The
              remains of the unknown ship were mostly intact, however, the
              Horizon crew could find no functional equipment or an entry to the
              spacecraft anywhere in the area. Shortly after the discovery of
              Pavia, the Horizon crew formed an expedition team named 'Pavia
              Corp' whose purpose was to explore the surface of Pavia, setting
              up a number of different outposts along their journey.
            </p>
            <p className="snap-child-end max-md:pb-36 md:hidden"></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
