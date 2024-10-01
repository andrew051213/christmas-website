import Image from "next/image"

import Gift1 from "../app/images/share/gift1.svg"
import Gift2 from "../app/images/share/gift2.svg"
import Gift3 from "../app/images/share/gift3.svg"
import Gift4 from "../app/images/share/gift4.svg"

export default function Share() {
    const gifts = [
        {
            image: Gift1,
            price: "$15",
            title: "Gingerbread",
        },
        {
            image: Gift2,
            price: "$15",
            title: "Santa Claus Hat",
        },
        {
            image: Gift3,
            price: "$15",
            title: "Candy Sticks",
        },
        {
            image: Gift4,
            price: "$15",
            title: "Christman Tree",
        }
    ]
    return (
        <div className="relative lg:h-svh flex justify-center items-center flex-col gap-20">
            <div className="font-poppins-big text-white max-w-[350px] text-center text-4xl">Share A Gift</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {gifts.map((data, index) => (
                    <div key={index} className="p-8 bg-[#2F2223] rounded-xl">
                        <div className="flex justify-center items-center">
                            <Image src={data.image} alt="Gift" className="w-48" />
                        </div>

                        <div className="flex flex-col text-left justify-start items-start">
                            <div className="font-poppins-small text-[#F3F2F2] max-w-[250px] text-center text-3xl">{data.price}</div>
                            <div className="font-poppins-small text-[#C2BDBD] max-w-[250px] text-center">{data.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}