import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className="w-screen container m-auto snap-child-start px-10 flex flex-col justify-center items-center min-h-screen max-md:pt-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2">
          <div className="w-full ">
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              Mech Suits
            </p>
            <p className="text-xs lg:text-sm text-justify">
              Mech Suits were invented as a solution to the evolving
              relationship between humans and Pays on Pavia. These advanced
              exo-suits were powered by pays and primarily built to improve
              mobility and to convert and store energy created through the Pav
              itself. Not every Pay is able to power a mech and compatibility
              depends entirely on how much energy a Pav produces
            </p>
          </div>
        </div>
        <div className="mt-5 lg:flex gap-10">
          <div className="lg:w-[90%]">
            <p className="lg:text-sm text-xs text-justify">
              Mechs were designed to explore terrain normally unobtainable to
              humans such as dense forests and rocky mountains. Heavy and
              durable, these suits allowed certain Pavs to gather resources from
              different parts of Pavia. All Mechs are also equipped with
              state-of-the-art defense systems, that protect the Pavs and serve
              as a shield against potential threats, both terrestrial and
              beyond. Advanced sensors detect even the subtlest disturbances,
              enabling rapid response Via the mech suits powerful strength and
              speed.
            </p>
            <p className="lg:text-2xl font-bold border-b border-white py-3 mb-4">
              The Crimson Lake
            </p>
            <div className="flex flex-col lg:gap-3 gap-2 lg:text-sm text-xs text-justify">
              <p>
                The Crimson Lake is nestled at the heart of the Pavia forest and
                is known for its distinctive red water. The Lake was discovered
                by early settlers of Pavia in the year 6AP shortly after initial
                colonization efforts began.
              </p>
              <p>
                Whilst not much is known about the Crimson Lake, it has sparked
                speculation among humans with some claiming that the lake&apos;s
                waters have special powers. Records show that some researchers
                have observed Pavs exhibiting an unsettling shift in behavior
                after reacting to the lake. The subsequent years would witness
                the unfolding of a complex series of events, as the lake&apos;s
                true nature and its impact on the behavior of Pavs became more
                frequent and dangerous.
              </p>
            </div>
          </div>
            <div className="lg:w-full lg:flex flex-col justify-center max-lg:pt-10">
              <img
                src="assets/images/crimson_lake.png"
                alt="PAV"
                className="rounded-xl w-full object-cover max-md:h-[15rem]"
              />
            </div>
                <p className="snap-child-end max-md:pb-36 xl:hidden"></p>
        </div>
      </motion.div>
    </div>
  );
}
