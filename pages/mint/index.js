import { motion } from "framer-motion";
import Utility from "../../components/Mint/Utility";
import Dot from '../../components/Mint/Dot'
import DetailsGrid from "@/components/Mint/DetailsGrid";
export default function index() {
  return (
    <div
      className="relative container m-auto py-20 flex items-center flex-col"
      id="cont"
    >
      <div className="relative pb-10">
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            left: "100%",
            transition: { delay: 0.5, duration: 1 },
          }}
          className="w-full bg-black h-full absolute"
        ></motion.div>
        <motion.span
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.5 },
          }}
          exit={{ visibility: "hidden" }}
          className="lg:text-[4rem] 2xl:text-[100px] whitespace-nowrap font-bold tracking-wider text-[2rem]"
        >
          MINT INFORMATION
        </motion.span>
      </div>
      {/* <div className="font-black text-7xl mb-10">MINT INFORMATION</div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 1 },
        }}>
        <div className="flex font-black gap-10 mb-10 flex-wrap md:flex-nowrap py-10">
          <div className="w-full md:w-1/2">
            <DetailsGrid />
          </div>
          <div className="flex justify-center items-center w-full px-5 md:w-1/2">
            <div className="flex flex-col gap-4 text-sm">
              <Dot>5000 MECH CRATES WILL BE MINTED IN TOTAL WITH 50 BEING HELD BACK FOR THE TEAM AND COMMUNITY GIVEAWAYS.</Dot>
              <Dot>EACH CRATE CONTAINS 5 RANDOM NFT PARTS THAT GUARANTEE YOU A COMPLETE MECH.</Dot>
              <Dot>THERE ARE DIFFERENT CLASSES OF MECH ALONG WITH A VARIATION OF SKINS TO COLLECT</Dot>
              <Dot>ALL PARTS ARE INTERCHANGEABLE AND CAN BE BOUGHT, SOLD OR TRADED ON THE SECONDARY MARKET</Dot>
              <Dot>MECHS WILL BE USEABLE AVATARS THROUGHOUT THE PLAYGROUND AND PAVIA MAP</Dot>
              <Dot>EACH MECH HAS ADVANCED MOVEMENT MECHANICS AS WELL AS ACCESS TO EXCLUSIVE AREAS OF THE FULL PAVIA MAP WHEN IT LAUNCHES</Dot>
              <Dot>UNLOCK EXTRA UTILITY BY MATCHING CLASSES, SKINS, AND A COMBINATION OF BOTH TO COMPLETE YOUR MECH</Dot>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.5, duration: 1 },
        }}>
        <div className="text-pavia-green font-bold border-[3px] rounded-2xl flex flex-col md:flex-row items-center justify-between p-5 gap-32 mb-20 relative">
          <div className="w-44 flex flex-col items-center text-center gap-5 z-10 bg-black">
            <p>BUY YOUR CRATE OCTOBER 25TH</p>
            <img src="assets/images/Box_1.png" alt="box_1" className="w-24" />
          </div>
          <div className="w-44 flex flex-col items-center text-center gap-5 z-10 bg-black p-2">
            <p>OPEN YOUR CRATE NOVEMBER 1ST</p>
            <img src="assets/images/Box_2.png" alt="box_2" className="w-28 mt-3" />
          </div>
          <div className="w-52 flex flex-col items-center text-center gap-5 bg-black z-10 p-2">
            <p>UNLOCK 5 PARTS THAT MAKE A FULL MECH</p>
            <img src="assets/images/Box_3.png" alt="box_3" className="w-24" />
          </div>
          <div className="w-[70%] hidden md:block absolute border-dashed border-b-4 left-[6rem] mt-20"></div>
          <div className="h-[70%] md:hidden w-2 absolute border-dashed border-r-4 mt-20"></div>
        </div>
      </motion.div>


      <div className="flex justify-evenly mb-10 max-md:flex-col px-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0, duration: 1 },
          }}>
          <div className="w-full flex items-center flex-col">
            <div className="text-6xl font-black mb-6 max-md:text-4xl">PAVS UTILITY</div>
            <div className="w-[60%] flex flex-col gap-5 max-md:w-full max-md:pb-10">
              <Utility>ALL PAVS WILL HAVE SPECIAL ACCESS TO CERTAIN AREAS OF THE PAVIA MAP</Utility>
              <Utility>1ST GENERATION PAVS WILL HAVE EXCLUSIVE ACCESS TO THE PILLAR OF VITA</Utility>
              <Utility>MECH PAVS WILL GIVE SPEED AND JUMP BUFFS TO MECHS AS WELL AS ALLOWING THEM ACCESS TO PARTS OF THE MOUNTAINS</Utility>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0, duration: 1 },
          }}>
          <div className=" w-full flex items-center flex-col">
            <div className="text-6xl font-black mb-6 max-md:text-4xl">MECH UTILITY</div>
            <div className="w-[60%] flex flex-col gap-5 max-md:w-full">
              <Utility>USEABLE AVATAR THROUGHOUT THE PLAYGROUND AND PAVIA MAP</Utility>
              <Utility>ADVANCED MOVEMENT MECHANICS AND CAPABILITIES</Utility>
              <Utility>MECH EMOTES AND SOUND EFFECTS</Utility>
              <Utility>INTERCHANGEABLE PARTS THAT CAN BE BOUGHT, SOLD OR TRADED</Utility>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0, duration: 1 },
        }}>
        <div className="text-sm px-5">*Generation 1 PAVS: Alfonso, Sky, Cyber, Lucia, Max, Mittens, Mucca, Pavy Jones, Rex, Pav Bot, Shell and Sparkles</div>
      </motion.div>
    </div>
  );
}
