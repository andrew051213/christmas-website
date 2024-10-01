"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../app/images/logo.svg";
import Moon from "../app/images/moon.svg";
import Menu from "../app/images/menu.svg";
import Sun from "../app/images/sun.svg";

export default function Nav() {
    const pages = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Portfolio",
            href: "/portfolio",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    return (
        <div className="relative h-22 w-full top-8">
            <div className="flex justify-between lg:justify-evenly items-center text-center w-full">
                <Link href="/">
                    <Image className="cursor-pointer w-36 relative left-5 top-1 lg:right-0 lg:top-0" src={Logo} alt="logo" />
                </Link>

                <div className="flex lg:hidden flex-row items-center text-white gap-5 relative right-5 top-1">
                    <Image className="w-[20px] h-[20px]" src={Sun} alt="Sun" />
                    <Image className="w-[20px] h-[20px]" src={Menu} alt="Menu" />
                </div>

                <div className="hidden lg:flex flex-row items-center gap-12 text-white">
                    {pages.map((data, index) => (
                        <Link key={index} href={data.href}>
                            <p className="font-poppins-small">{data.name}</p>
                        </Link>
                    ))}

                    <Image onClick={() => alert("this is suppossed to be a theme toggle")} className="cursor-pointer" src={Moon} alt="Theme toggle" />
                </div>
            </div>
        </div>
    );
}