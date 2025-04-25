'use client'
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="" >
            
            <div className="bg-primary py-6" >
                <div className="   container mx-auto max-w-7xl px-5">
                    <div className="container mx-auto  flex flex-col-reverse gap-6 lg:flex-row items-center justify-between ">
                        <p className={`select-none flex  flex-col lg:flex-row gap-1  font-medium items-center font-chillax capitalize text-center lg:text-start text-white `}> Copyright &copy; {new Date().getFullYear()} . Tous les droits sont réservés <span className=" text-background   "> Clinique Chifa tasnime </span> fait par <Link href={'https://www.traficgenius.com/'} target="_blank" rel="noopener noreferrer" className=" underline underline-offset-4">trafic genius </Link>  </p>
                        <div className="flex gap-6">
                            <Link href={'https://www.instagram.com/clinique_chifa_tasnime'} target="_blank"><Instagram size={30} className=" stroke-[#fff]" /></Link>
                            <Link href={'https://www.facebook.com/profile.php?id=61574572105547'} target="_blank"><Facebook size={30} className=" stroke-[#fff]" /></Link>
                            <Link href={'https://www.linkedin.com/in/clinique-chifa-de-marrakech-3a524b70/'} target="_blank"><Linkedin size={30} className=" stroke-[#fff]" /></Link>

                            {/* <Linkedin size={30} className=" stroke-[#fff]" /> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}