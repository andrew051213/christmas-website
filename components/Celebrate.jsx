import Image from "next/image"

import Furnace from "../app/images/furnace.svg"

export default function Celebrate() {
    return (
        <div className="relative lg:h-svh flex justify-center items-center flex-col lg:flex-row lg:gap-32 overflow-hidden">
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-5">
                <div className="font-poppins-small text-3xl text-white max-w-[290px] text-center lg:text-left">Celebrate With A Lot Of Love</div>
                <div className="font-poppins-small text-[#C2BDBD] max-w-[360px] lg:max-w-[380px]">In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends and neighbors, wishing them a good Christmas message.</div>

                <button className="bg-[#282525] w-56 h-16 rounded-full text-white font-poppins-small" onClick={() => alert("We don't have a backend yet")}>Send Good Wishes</button>
            </div>

            <Image src={Furnace} alt="Furnace" className="w-full lg:w-4/12" />
        </div>
    )
}