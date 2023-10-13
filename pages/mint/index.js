import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa"
export default function index() {
  return (
    <div
      className=" w-screen relative overflow-hidden bg-fixed px-40 mt-16 flex items-center flex-col"
      id="cont"
    >
      <div className="font-black text-7xl mb-10">MINT INFORMATION</div>


      <div className="flex font-black gap-10 mb-10">
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
        <div className="flex justify-center items-center">
          <ul>
            <p>5000 MECH CRATES WILL BE MINTED IN TOTAL WITH 50 BEING HELD BACK FOR THE TEAM AND COMMUNITY GIVEAWAYS.</p>
            <p>EACH CRATE CONTAINS 5 RANDOM NFT PARTS THAT GUARANTEE YOU A COMPLETE MECH.</p>
            <p>THERE ARE DIFFERENT CLASSES OF MECH ALONG WITH A VARIATION OF SKINS TO COLLECT</p>
            <p>ALL PARTS ARE INTERCHANGEABLE AND CAN BE BOUGHT, SOLD OR TRADED ON THE SECONDARY MARKET</p>
            <p>MECHS WILL BE USEABLE AVATARS THROUGHOUT THE PLAYGROUND AND PAVIA MAP</p>
            <p>EACH MECH HAS ADVANCED MOVEMENT MECHANICS AS WELL AS ACCESS TO EXCLUSIVE AREAS OF THE FULL PAVIA MAP WHEN IT LAUNCHES</p>
            <p>UNLOCK EXTRA UTILITY BY MATCHING CLASSES, SKINS, AND A COMBINATION OF BOTH TO COMPLETE YOUR MECH</p>
          </ul>
        </div>
      </div>


      <div className="text-[#1af8c4] font-bold border-[3px] rounded-xl flex p-10 gap-20 mb-10 relative pb-28">
        <div className="w-40 flex flex-col items-center text-center gap-2"><p>BUY YOUR CRATE OCTOBER 25TH</p> <img src="assets/images/Box_1.png" alt="box_1" className="w-16 absolute top-[6.5rem] z-10"/></div>
        <div className="w-40 flex flex-col items-center text-center gap-2">OPEN YOUR CRATE NOVEMBER 1ST <img src="assets/images/Box_2.png" alt="box_2" className="w-20 absolute top-[6.5rem] z-10"/></div>
        <div className="w-48 flex flex-col items-center text-center gap-2">UNLOCK 5 PARTS THAT MAKE A FULL MECH <img src="assets/images/Box_3.png" alt="box_3" className="w-16 absolute top-[6.5rem] z-10"/></div>
        <div className="border-b-2 w-[70%] absolute top-36 border-dashed left-[6rem]"></div>
      </div>


      <div className="flex justify-evenly mb-10">
        <div className="w-full flex items-center flex-col">
          <p className="text-6xl font-black mb-6">PAVS UTILITY</p>
          <div className="w-[60%] flex flex-col gap-5">
          <p className="flex items-center gap-5"><p className="text-bold text-[#1af8c4]"><FaPlus/></p>ALL PAVS WILL HAVE SPECIAL ACCESS TO CERTAIN AREAS OF THE PAVIA MAP</p>
          <p>1ST GENERATION PAVS WILL HAVE EXCLUSIVE ACCESS TO THE PILLAR OF VITA</p>
          <p>MECH PAVS WILL GIVE SPEED AND JUMP BUFFS TO MECHS AS WELL AS ALLOWING THEM ACCESS TO PARTS OF THE MOUNTAINS</p>
          </div>
        </div>
        <div className=" w-full flex items-center flex-col">
          <p className="text-6xl font-black mb-6">MECH UTILITY</p>
          <div className="w-[60%] flex flex-col gap-5">
          <p>USEABLE AVATAR THROUGHOUT THE PLAYGROUND AND PAVIA MAP</p>
          <p>ADVANCED MOVEMENT MECHANICS AND CAPABILITIES</p>
          <p>MECH EMOTES AND SOUND EFFECTS</p>
          <p>INTERCHANGEABLE PARTS THAT CAN BE BOUGHT, SOLD OR TRADED</p>
          </div>
        </div>
      </div>

      <div className="text-sm">*Generation 1 PAVS: Alfonso, Sky, Cyber, Lucia, Max, Mittens, Mucca, Pavy Jones, Rex, Pav Bot, Shell and Sparkles</div>
    </div>
  );
}
