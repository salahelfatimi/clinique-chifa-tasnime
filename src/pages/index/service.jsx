"use client"
import { services } from "@/app/data/servicesData";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BackButton from "@/tools/backButton";
gsap.registerPlugin(ScrollTrigger);

export default function Service() {

    const serviceRefs = useRef([]);
    useEffect(() => {
        serviceRefs.current.forEach((image, index) => {
            gsap.fromTo(image,
                { scale: 0.8, opacity: 0 },

                {
                    scale: 1, opacity: 1, duration: 1, delay: index * 0.05, ease: "power3.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%",
                        toggleActions: "play none none play",
                    }
                }
            );
        });
    }, [])
    return (
        <div className="flex flex-col items-center justify-center   py-10 px-5 container mx-auto ">
            <h1 className=" text-3xl lg:text-6xl  mb-4 font-zodiak text-background uppercase text-center">Nos services spécialisés</h1>
            <p className=" text-gray-700 font-chillax text-center">À la Clinique Chifa tasnime, nous proposons une large gamme de spécialités médicales pour répondre à vos besoins </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4 justify-center  ">
                
                {services.map((service, index) => (
                    <Link href={`/specialites/${service.url}`} key={index} ref={(el) => (serviceRefs.current[index] = el)} className="font-chillax last:col-start-1 lg:last:col-start-2 group hover:bg-primary duration-700 bg-white hover:border-primary border-background border-2 shadow-lg rounded-3xl p-4 flex flex-col items-center text-center ">
                        <div className="mb-4  rounded-full p-3 flex items-center justify-center w-24 h-24">
                            <Image src={service.image} width={500} height={500} alt="clinique chifa tasnime" title="clinique chifa tasnime"/>
                        </div>
                        <h3 className="text-xl group-hover:text-white text-background uppercase font-zodiak">{service.title}</h3>
                        <p className="text-black group-hover:text-white">{service.description}</p>
                    </Link>
                ))}
            </div>
            <Link href={'/specialites'} className=" bg-background hover:bg-primary duration-700 text-white font-chillax font-bold px-6 py-3 rounded-full mt-4">Découvrir tous nos services</Link>
        </div>
    )
}