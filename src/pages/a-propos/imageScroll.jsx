'use client'
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";


export default  function ImageScroll() {
    const [change,setChange]=useState(1)
    
    const Images=[
        {id:1,image:'img_1.jpg'},
        {id:2,image:'img_2.jpg'},
        {id:3,image:'img_3.jpg'},
        {id:4,image:'img_4.jpg'},
        {id:5,image:'img_5.jpg'},
        {id:4,image:'img_6.jpg'},
        {id:5,image:'img_7.jpg'},
        {id:4,image:'img_8.jpg'},
        {id:5,image:'img_9.jpg'},
    ]
    const next =()=>{
        change===4?setChange(1):setChange(change+1)
    }
    useEffect(()=>{
        const slideInterval = setInterval(next, 3000);
        return () => clearInterval(slideInterval);
    },[next])

    return(
        <div>
            <div className="bg-primary ">
                <div className=" flex flex-col lg:flex-row items-center justify-center gap-14  p-6 py-10 container mx-auto">
                    <div className=" relative h-[40rem] lg:w-1/3  flex items-center justify-center  ">
                        {
                            Images.map((ele,index)=>(
                                <Image key={index} src={`/img/a-propos/change_image/${ele.image}`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={` object-cover ${change===index?'relative h-[40rem] inset-0 z-10 opacity-100 scale-100  shadow-2xl':'absolute   z-0 opacity-50 scale-50'} ${index % 2 === 0 ? 'rotate-3 ' : '-rotate-3 '}   rounded-3xl transform transition-transform duration-500  `} width={1000} height={1000}/>
                            ))
                        }
                    </div>
                    <div className=" lg:w-1/2 font-chillax flex flex-col gap-4 text-white ">
                        <h2 className=" text-2xl text-center lg:text-left lg:text-4xl font-medium  mb-4 font-chillax text-white uppercase">Une équipe médicale expérimentée</h2>
                        <p className=" text-sm lg:text-base">La Clinique Chifa Tasnime réunit une équipe pluridisciplinaire compétente : médecins spécialistes, chirurgiens, anesthésistes, personnel infirmier et techniciens de santé — tous animés par la passion du soin et la rigueur médicale.</p>
                        <h3 className=" font-bold text-2xl ">Nos spécialités médicales</h3>
                        <p className=" text-sm lg:text-base">Notre clinique propose une large gamme de services médicaux et chirurgicaux, notamment :</p>
                        <ul className="list-disc list-inside space-y-4 text-sm lg:text-base">
                            <li>Cardiologie interventionnelle & chirurgie cardio-vasculaire à cœur ouvert</li>
                            <li>Pédiatrie</li>
                            <li>Orthopédie & traumatologie</li>
                            <li>Médecine interne</li>
                            <li>Imagerie médicale (scanner, échographie, IRM)</li>
                            <li>Réanimation & soins intensifs</li>
                            <li>Consultations spécialisées</li>
                        </ul>
                        <p className=" text-sm lg:text-base">Tous nos soins sont appuyés par une infrastructure moderne : blocs opératoires performants, équipements médico-techniques de pointe, chambres individuelles confortables et plateau technique complet.</p>
                        <Link href={'/contactez-nous'} className=" bg-white py-3 px-6 font-medium text-background rounded-full w-full text-center">Contactez Nous</Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}