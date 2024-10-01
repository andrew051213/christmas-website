"use client";

import { useState } from "react";

import Image from "next/image";

import Gift1 from "../app/images/new/gift1.svg";
import Gift2 from "../app/images/new/gift2.svg";
import Gift3 from "../app/images/new/gift3.svg";

import Reactangle from "../app/images/ui/cerc.svg";

export default function Gifts() {
    const gifts = [
        {
            image: Gift1,
            price: "15",
            name: "Christmas Wreath",
        },
        {
            image: Gift2,
            price: "95",
            name: "Reindeer",
        },
        {
            image: Gift3,
            price: "20",
            name: "Snow globe",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleCircleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative w-full lg:h-4/6 flex justify-center items-center flex-col gap-10 p-4">
            <div className="font-poppins-big text-white max-w-[350px] text-center text-4xl">New Gifts</div>

            <div className="flex flex-col items-center gap-10">
                <div className="w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-10 transition-transform duration-300 ease-in-out" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
                        {gifts.map((data, index) => (
                            <div key={index} className="bg-[#2F2223] w-72 h-80 rounded-xl relative overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <Image src={Reactangle} draggable={false} alt="Rectangle" className="w-full h-full absolute" />
                                    <Image src={data.image} draggable={false} alt={data.name} className="w-52 h-52 object-contain z-10 absolute" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full flex justify-center items-center flex-col gap-2 p-2">
                                    <div className="font-poppins-small text-white text-2xl">${data.price}</div>
                                    <div className="font-poppins-small text-[#C2BDBD] text-lg">{data.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    {gifts.map((_, index) => (
                        <button key={index} className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-red-500" : "bg-gray-400"}`} onClick={() => handleCircleClick(index)} aria-label={`View gift ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}