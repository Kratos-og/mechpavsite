import DetailsGrid from "@/components/Mint/DetailsGrid";
import { FaPlus } from "react-icons/fa";

export default function Mint() {
  return (
    <div className="relative container m-auto py-20 flex items-center flex-col" id="cont">
      <div className="font-black text-7xl mb-10">MINT INFORMATION</div>
      <div className="flex font-black gap-10 mb-10 py-10">
        <div className="w-1/2">
          <DetailsGrid />
        </div>
        <div className="flex justify-center items-center w-1/2">
          <ul className="list-disc flex flex-col gap-5 text-sm tracking-wider override">
            <li>5000 MECH CRATES WILL BE MINTED IN TOTAL WITH 50 BEING HELD BACK FOR THE TEAM AND COMMUNITY GIVEAWAYS.</li>
            <li>EACH CRATE CONTAINS 5 RANDOM NFT PARTS THAT GUARANTEE YOU A COMPLETE MECH.</li>
            <li>THERE ARE DIFFERENT CLASSES OF MECH ALONG WITH A VARIATION OF SKINS TO COLLECT</li>
            <li>ALL PARTS ARE INTERCHANGEABLE AND CAN BE BOUGHT, SOLD OR TRADED ON THE SECONDARY MARKET</li>
            <li>MECHS WILL BE USEABLE AVATARS THROUGHOUT THE PLAYGROUND AND PAVIA MAP</li>
            <li>EACH MECH HAS ADVANCED MOVEMENT MECHANICS AS WELL AS ACCESS TO EXCLUSIVE AREAS OF THE FULL PAVIA MAP WHEN IT LAUNCHES</li>
            <li>UNLOCK EXTRA UTILITY BY MATCHING CLASSES, SKINS, AND A COMBINATION OF BOTH TO COMPLETE YOUR MECH</li>
          </ul>
        </div>
      </div>


      <div className="text-pavia-green font-bold border-[3px] rounded-2xl flex items-center justify-between p-5 gap-32 mb-20 relative">
        <div className="w-40 flex flex-col items-center text-center gap-5">
          <p>BUY YOUR CRATE OCTOBER 25TH</p>
          <img src="assets/images/Box_1.png" alt="box_1" className="w-24 z-10 p-2 bg-black" />
        </div>
        <div className="w-40 flex flex-col items-center text-center gap-5">
          <p>OPEN YOUR CRATE NOVEMBER 1ST</p>
          <img src="assets/images/Box_2.png" alt="box_2" className="w-28 z-10 mt-3 p-2 bg-black" />
        </div>
        <div className="w-48 flex flex-col items-center text-center gap-5">
          <p>UNLOCK 5 PARTS THAT MAKE A FULL MECH</p>
          <img src="assets/images/Box_3.png" alt="box_3" className="w-24 p-2 z-10 bg-black" />
        </div>
        <div className="w-[70%] absolute border-dashed border-b-4 left-[6rem] mt-20"></div>
      </div>


      <div className="flex justify-evenly mb-10">
        <div className="w-full flex items-center flex-col">
          <div className="text-6xl font-black mb-6">PAVS UTILITY</div>
          <div className="w-[60%] flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <p className="text-bold text-[#1af8c4]"><FaPlus /></p>
              ALL PAVS WILL HAVE SPECIAL ACCESS TO CERTAIN AREAS OF THE PAVIA MAP
            </div>
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
