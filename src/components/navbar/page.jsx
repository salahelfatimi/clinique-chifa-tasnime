'use client';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const navbarRef = useRef(null);
    const linksRef = useRef(null);
    const [logoSrc, setLogoSrc] = useState('/img/logo_white.png');

    useEffect(() => {
        const navbar = navbarRef.current;
        const links = linksRef.current;
        const handleScroll = () => {
            if (window.scrollY > 50) {
                gsap.to(navbar, { backgroundColor: "white", duration: 0.1 });
                gsap.to(links, { color: "black", duration: 0.1 });
                setLogoSrc('/img/logo.png'); 
            } else {
                gsap.to(navbar, { backgroundColor: "transparent", duration: 0.1 });
                gsap.to(links, { color: "white", duration: 0.1 });
                setLogoSrc('/img/logo_white.png'); 
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const ItemsNavbar = [
        { name: 'Accueil', link: '#' },
        { name: 'Nos Services', link: '#' },
        { name: 'Conseils Santé', link: '#' },
        { name: 'À propos', link: '#' },
        // { name: 'Testimonials', link: '/testimonials' },
        { name: 'FAQ', link: '#' },
        { name: 'Contactez-nous', link: '#' },

    ];

    return (
        <header ref={navbarRef} className="fixed z-50 top-0 left-0 w-full  px-20 py-4  ">
            <div className="hidden lg:block">
                <div className="flex flex-row gap-4 items-center justify-between container mx-auto">
                    <Image src={logoSrc} width={500} height={500} className="w-24" alt="Logo" />
                        <ul ref={linksRef} className="flex space-x-4 text-white">
                            {ItemsNavbar.map((item, index) => (
                                <Link href={item.link} key={index} className="cursor-pointer text-sm font-medium font-chillax hover:underline duration-500 underline-offset-2">
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    <Link href={'#'} className=" bg-primary hover:bg-white border-2 border-primary  hover:text-primary duration-700 text-white px-4 text-sm py-3 font-chillax rounded-full capitalize">Prendre rendez-vous</Link>
                </div>
            </div>
        </header>
    );
}