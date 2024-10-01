import Image from "next/image";

import Logo from "../app/images/logo.svg";

import Globe from "../app/images/footer/globe.svg";

import Link from "next/link";

export default function Footer() {
    const categories = [
        {
            name: "Our Services",
            links: [
                { name: "Pricing", href: "/" },
                { name: "Discounts", href: "/" },
                { name: "Shipping mode", href: "/" },
            ],
        },
        {
            name: "Support",
            links: [
                { name: "FAQs", href: "/" },
                { name: "Support Center", href: "/" },
                { name: "Contact Us", href: "/" },
            ],
        },
        {
            name: "Available on",
            links: [
                { name: "Google Play", href: "/" },
                { name: "App Store", href: "/" }
            ],
        },
    ];

    return (
        <div className="relative w-full h-full flex justify-center items-center flex-col top-32">
            <div className="w-4/6 flex justify-start items-start flex-col lg:flex-row gap-32">
                <div className="flex flex-col gap-5 items-start">
                    <Image src={Logo} alt="Logo" />

                    <div className="font-poppins-small text-[#C2BDBD] max-w-[200px] text-left">This Christmas give a lot of love</div>

                    <Image src={Globe} alt="Globe" className="w-5/6" />
                </div>

                <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-48">
                    {categories.map((category) => (
                        <div key={category.name} className="flex flex-col gap-2">
                            <div className="font-poppins-small text-white text-2xl">{category.name}</div>

                            {category.links.map((link) => (
                                <Link key={link.name} href={link.href} className="text-[#C2BDBD] text-sm font-poppins-small">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center items-center mt-8">
                <div className="text-[#918889]">© 2024 Andrew. All rights reserved.</div>
            </div>
        </div>
    );
}