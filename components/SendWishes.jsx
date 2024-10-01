import Image from "next/image";
import Letter from "../app/images/ui/letter.svg";

export default function SendWishes() {
    return (
        <div className="relative flex justify-center items-center flex-col gap-20">
            <div className="w-5/6 lg:w-4/6 bg-[#2F2223] rounded-[2rem] flex justify-evenly items-center flex-col lg:flex-row gap-10 p-6">
                <div className="flex flex-col gap-10">
                    <div className="font-poppins-small text-white max-w-[340px] text-center lg:text-left text-4xl">Send Good Wishes!</div>

                    <input type="text" placeholder="Write your message" className="p-6 w-full bg-[#251819] rounded-full text-left placeholder:text-[#918889] text-white outline-none" />

                    <button className="p-6 w-full lg:w-48 bg-[#282525] rounded-full text-center font-poppins-small text-white" onClick={() => alert("We don't have a backend yet")}>Send Message</button>
                </div>

                <Image src={Letter} alt="Letter" className="w-full lg:w-[45%]" />
            </div>
        </div>
    );
}