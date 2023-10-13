import { motion } from "framer-motion";
import Utility from "./Utility";
import Dot from './Dot'
export default function index() {
  return (
    <div
      className=" w-screen relative overflow-hidden bg-fixed lg:px-40 px-10 mt-16 flex items-center flex-col"
      id="cont"
    >
      <div>
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            left: "100%",
            transition: { delay: 0.5, duration: 1 },
          }}
          className="w-full bg-black h-[7%] absolute"
        ></motion.div>
        <motion.span
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.5 },
          }}
          exit={{ visibility: "hidden" }}
          className="lg:text-[4rem] 2xl:text-[200px] whitespace-nowrap font-bold tracking-wider text-[2rem]"
        >
          MINT INFORMATION
        </motion.span>
      </div>
      {/* <div className="font-black text-7xl mb-10">MINT INFORMATION</div> */}


      <div className="flex font-black gap-10 mb-10 max-md:flex-col">
        <div className="flex text-xl">
          <div className="border-r-2 border-[#1af8c4] px-5 text-[#1af8c4]">
          <p className="flex justify-end">PRICE</p>
          <p className="flex justify-end">MINT DATE</p>
          <p className="flex justify-end">MINT OPENS</p>
          <p className="flex justify-end">MINT DURATION</p>
          <p className="flex justify-end">TOTAL MECH CRATES</p>
          <p className="flex justify-end">MAX CRATES PER WALLET</p>
          <p className="flex justify-end">LOCATION</p>
          <p className="flex justify-end">WHITELIST</p>
          <p className="flex justify-end">ROYALTIES</p>
          </div>
          <div className="px-5">
            <p>400 ADA</p>
            <p>OCT 25TH</p>
            <p>10 pm BST, 4 pm CST</p>
            <p>OPEN UNTIL SOLD OUT</p>
            <p>5000</p>
            <p>10</p>
            <p>PAVS.IO</p>
            <p>LAND AND PAV HOLDERS</p>
            <p>FOR THE FIRST 48 HOURS</p>
            <p>5%</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col gap-4">
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


      <div className="text-[#1af8c4] font-bold border-[3px] rounded-xl flex p-10 gap-20 mb-10 relative pb-28 max-md:scale-50">
        <div className="w-40 flex flex-col items-center text-center gap-2"><p>BUY YOUR CRATE OCTOBER 25TH</p> <img src="assets/images/Box_1.png" alt="box_1" className="w-16 absolute top-[6.5rem] z-10"/></div>
        <div className="w-40 flex flex-col items-center text-center gap-2">OPEN YOUR CRATE NOVEMBER 1ST <img src="assets/images/Box_2.png" alt="box_2" className="w-20 absolute top-[6.5rem] z-10"/></div>
        <div className="w-48 flex flex-col items-center text-center gap-2">UNLOCK 5 PARTS THAT MAKE A FULL MECH <img src="assets/images/Box_3.png" alt="box_3" className="w-16 absolute top-[6.5rem] z-10"/></div>
        <div className="border-b-2 w-[70%] absolute top-36 border-dashed left-[6rem]"></div>
      </div>


      <div className="flex justify-evenly mb-10 max-md:flex-col">
        <div className="w-full flex items-center flex-col">
          <p className="text-6xl font-black mb-6 max-md:text-4xl">PAVS UTILITY</p>
          <div className="w-[60%] flex flex-col gap-5 max-md:w-full max-md:pb-10">
          <Utility>ALL PAVS WILL HAVE SPECIAL ACCESS TO CERTAIN AREAS OF THE PAVIA MAP</Utility>
          <Utility>1ST GENERATION PAVS WILL HAVE EXCLUSIVE ACCESS TO THE PILLAR OF VITA</Utility>
          <Utility>MECH PAVS WILL GIVE SPEED AND JUMP BUFFS TO MECHS AS WELL AS ALLOWING THEM ACCESS TO PARTS OF THE MOUNTAINS</Utility>
          </div>
        </div>
        <div className=" w-full flex items-center flex-col">
          <p className="text-6xl font-black mb-6 max-md:text-4xl">MECH UTILITY</p>
          <div className="w-[60%] flex flex-col gap-5 max-md:w-full">
          <Utility>USEABLE AVATAR THROUGHOUT THE PLAYGROUND AND PAVIA MAP</Utility>
          <Utility>ADVANCED MOVEMENT MECHANICS AND CAPABILITIES</Utility>
          <Utility>MECH EMOTES AND SOUND EFFECTS</Utility>
          <Utility>INTERCHANGEABLE PARTS THAT CAN BE BOUGHT, SOLD OR TRADED</Utility>
          </div>
        </div>
      </div>

      <div className="text-sm">*Generation 1 PAVS: Alfonso, Sky, Cyber, Lucia, Max, Mittens, Mucca, Pavy Jones, Rex, Pav Bot, Shell and Sparkles</div>
    </div>
  );
}
