'use client'
import Image from "next/image"
import Header from "./header"
import Service from "./service"
import ServicesMedicaux from "./ServicesMedicaux"
import { Etaps } from "@/app/data/etaps"
import Faq from "./faq"
import Avis from "./avis"
import SactionNumbers from "./sactionNumbers"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import LogoScroll from "@/tools/logoScroll"
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    const serviceRefs = useRef([]);
    const [change,setChange]=useState(1)

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
    const Images=[
        {id:1,image:'img_1.jpg'},
        {id:2,image:'img_2.jpg'},
        {id:3,image:'img_3.jpg'},
        {id:4,image:'img_4.jpg'},
        {id:5,image:'img_5.jpg'},
        {id:4,image:'img_6.jpg'},
        {id:5,image:'img_7.jpg'},
        {id:4,image:'img_8.jpg'},
    ]
    const next =()=>{
        change===4?setChange(1):setChange(change+1)
    }
    useEffect(()=>{
        const slideInterval = setInterval(next, 3000);
        return () => clearInterval(slideInterval);
    },[next])

    return(
        <div className="">
            <Header/>
            <LogoScroll/>
            <SactionNumbers/>
            <Service/>
            <div className="bg-primary ">
                <div className=" flex flex-col lg:flex-row items-center justify-center gap-14  p-6 py-10 container mx-auto">
                    <div className=" relative h-[40rem]   flex items-center justify-center  ">
                        {
                            Images.map((ele,index)=>(
                                <Image key={index} src={`/img/index/change_image/${ele.image}`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={` object-cover ${change===index?'relative h-[40rem] inset-0 z-10 opacity-100 scale-100  shadow-2xl':'absolute   z-0 opacity-50 scale-50'} ${index % 2 === 0 ? 'rotate-3 ' : '-rotate-3 '}   rounded-3xl transform transition-transform duration-500  `} width={500} height={500}/>
                            ))
                        }
                    </div>
                    <div className=" lg:w-1/2 font-chillax flex flex-col gap-4 text-white ">
                        <h2 className=" text-2xl text-center lg:text-left lg:text-4xl font-medium  mb-4 font-zodiak text-white uppercase">À propos de la Clinique Chifa tasnime  </h2>
                        <p className=" text-sm lg:text-base">À la Clinique Chifa tasnime, nous mettons votre santé au cœur de nos priorités. Située au centre de Marrakech, notre clinique moderne combine des installations de pointe avec une équipe de professionnels passionnés. Nous sommes dédiés à fournir des soins personnalisés et multidisciplinaires pour répondre à vos besoins de santé dans un environnement chaleureux et sûr.</p>
                        <p className=" text-sm lg:text-base">Depuis notre création, nous nous engageons à établir un nouveau standard en matière de soins de santé dans la région, en adoptant une approche humaine et innovante. Que ce soit pour des soins préventifs, des traitements spécialisés ou des urgences, nous sommes là pour vous accompagner à chaque étape de votre parcours de santé.</p>
                        <h3 className=" font-bold text-2xl ">Points clés :</h3>
                        <ul className="list-disc list-inside space-y-4 text-sm lg:text-base">
                            <li><strong>Une équipe expérimentée :</strong> Nos spécialistes médicaux sont hautement qualifiés et reconnus dans leurs domaines respectifs.</li>
                            <li><strong>Technologie avancée :</strong> Équipements de diagnostic et de traitement de dernière génération.</li>
                            <li><strong>Localisation idéale :</strong> Facilement accessible avec des zones dédiées aux urgences et aux consultations.</li>
                            
                        </ul>
                        <button className=" bg-white py-3 px-6 font-medium text-background rounded-full w-fit">En savoir plus sur notre histoire</button>
                    </div>
                </div>
            </div> 
            <div className=" flex items-center justify-center flex-col gap-6 py-10 lg:py-20 container mx-auto px-3 max-w-6xl"> 
                <Image src={'/img/logo.png'} width={500} height={500} className=" w-36 lg:w-40" alt="clinique chifa tasnime" title="clinique chifa tasnime" />
                <p className=" text-3xl lg:text-6xl text-center font-zodiak text-background">AVEC SON ENGAGEMENT POUR L’EXCELLENCE ET LE BIEN-ÊTRE, LA CLINIQUE CHIFA TASNIME VISE À OFFRIR DES SOINS MODERNES, HUMAINS ET ACCESSIBLES À TOUS.</p>
            </div>
            <ServicesMedicaux/>
            <Avis/>
            <div className="relative  ">
                <Image src={'/img/index/img.jpg'} width={1920} height={1080} className=" absolute top-0 left-0 w-full h-full object-cover inset-0" alt="la Clinique Chifa tasnime" title="la Clinique Chifa tasnime"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-60 "></div>
                <div className=" relative z-20 flex flex-col  container mx-auto gap-6 py-10 px-5 ">
                    <h2 className="text-4xl lg:text-6xl text-center font-zodiak text-white">Comment prendre rendez-vous à la Clinique Chifa Tasnime ?</h2>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4  py-10 max-w-7xl  mx-auto">
                        {
                            Etaps.map((etap, index) => (
                                <div key={index} ref={(el) => (serviceRefs.current[index] = el)} className=" w-full py-10  rounded-4xl bg-white flex flex-col items-center gap-4 mb-6 p-4">
                                    <span className="text-sm border py-2 px-4 font-chillax bg-background text-white rounded-full">{etap.step_number}</span>
                                    <h3 className="text-center text-xl font-chillax font-medium text-background">{etap.title}</h3>
                                    <p className="text-center text-lg font-chillax  text-background">{etap.description}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
            <Faq/>
    
        </div>
        
    )
}