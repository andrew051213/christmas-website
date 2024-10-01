import Image from "next/image";

import Gift1 from "../app/images/gifts/gift1.svg";
import Gift2 from "../app/images/gifts/gift2.svg";
import Gift3 from "../app/images/gifts/gift3.svg";

export default function Giving() {
    const gifts = [
        {
            image: Gift1,
            title: "Surprise gifts",
            description: "They are the best gifts there is.",
        },
        {
            image: Gift2,
            title: "Ornaments",
            description: "Give a moment to decorate.",
        },
        {
            image: Gift3,
            title: "Lots of love",
            description: "Give away feelings that last forever.",
        },
    ];

    return (
        <div className="relative w-full flex justify-center items-center flex-col gap-10 p-4">
            <div className="font-poppins-big text-white max-w-[350px] text-center text-4xl">
                Start Giving This Christmas
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-32">
                {gifts.map((data, index) => (
                    <div key={index} className="relative w-full h-full flex flex-col justify-center items-center gap-5">
                        <Image src={data.image} alt={data.title} className="w-7/12" />

                        <div className="font-poppins-small text-white max-w-[250px] text-center">
                            {data.title}
                        </div>

                        <div className="font-poppins-small text-[#C2BDBD] max-w-[250px] text-center">
                            {data.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
