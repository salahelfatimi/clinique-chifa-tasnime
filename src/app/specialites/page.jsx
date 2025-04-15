import Image from "next/image";
import { PageService } from "../data/pageService";
import Link from "next/link";
import Avis from "@/pages/index/avis";
import LogoScroll from "@/tools/logoScroll";
import React from "react";

export default function Nos_services(){
    return(
        <div>
            <div className="h-screen relative ">
                <Image src={'/img/specialites/img.jpg'} alt="clinique chifa tasnime" title="clinique chifa tasnime" width={1920} height={1080}  className="object-cover h-full w-full object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold px-10">
                    <h1 className=" text-center">Une offre complète de soins médicaux et chirurgicaux</h1>
                </div>
            </div>
            <div className=" bg-background text-white py-8 p-4">
                <p className=" font-chillax text-center container mx-auto text-white">La Clinique Chifa est fière de proposer une large gamme de services médicaux spécialisés, adaptés à tous vos besoins de santé. <br /> Nos équipes expérimentées, soutenues par une technologie de pointe, travaillent jour et nuit pour offrir des soins d'excellence. Découvrez nos services en détail ci-dessous.</p>
            </div>
            <div> 
                <div className="   ">
                    <div className="flex flex-col  ">
                        {PageService.map((item, index) => (
                            <div key={index} className="flex flex-col lg:even:flex-row lg:odd:flex-row-reverse odd:bg-secondary even:bg-primary  items-center justify-center  ">
                                <div className="lg:w-1/2 w-full">
                                    <Image src={item.imageUrl} width={1920} height={1080} className=" w-full h-full" title={item.title} alt={item.title}/>
                                </div>
                                <div className="flex flex-col gap-6 lg:w-1/2 p-8">
                                    <h3 className=" text-2xl lg:text-4xl uppercase font-zodiak text-center mb-4 text-white">  {item.title}</h3>
                                    <p className="text-white text-center font-chillax">{item.description}</p>
                                    <Link href={'#'} className=" bg-white border-2 border-white w-full text-center py-3 font-chillax rounded-2xl font-medium text-background  shadow-2xl hover:bg-primary hover:text-white duration-700">Lire Plus</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Avis/>
        </div>
    )
}