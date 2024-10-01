import Image from "next/image";

import Grasu from "../app/images/grasu.svg";

export default function Hero() {
    return (
        <div className="relative lg:h-svh lg:h-6/6 flex justify-center items-center flex-col lg:flex-row gap-10 overflow-hidden">
            <Image className="max-w-3xl max-h-80 lg:max-h-full" src={Grasu} alt="Hero" />

            <div className="flex flex-col gap-5 text-center lg:text-left justify-center items-center lg:items-start">
                <div className="font-poppins-big text-white max-w-[450px] text-4xl">Merry Christmas and Happy New Year!</div>
                <div className="font-poppins-mobile-small text-[#C2BDBD] max-w-[360px] lg:max-w-[380px]">Christmas and a new year is about to begin, all good wishes and successes.</div>

                <button className="bg-[#DC3845] w-48 h-16 rounded-full text-white font-poppins-small">Get Started</button>
            </div>
        </div>
    );
}