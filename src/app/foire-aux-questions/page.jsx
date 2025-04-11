import Image from "next/image";
import { Faq } from "../data/faq";
import { ShieldQuestion } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return(
        <div>
            <div className="h-screen relative ">
                <Image src={'/img/foire-aux-questions/img.jpg'} alt="FAQ" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className=" text-center">Foire Aux Questions (FAQ) – Clinique Chifa Tasnime</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center  bg-background py-10 px-6">
                <h3 className="text-lg lg:text-4xl font-zodiak font-medium text-white">Vous avez d'autres questions ?</h3>
                <p className="text-sm lg:text-base font-chillax text-white text-center">N’hésitez pas à nous contacter via notre page <Link href='/contactez-nous' className=" underline underline-offset-4 animate-pulse">Contactez-nous</Link> pour toute information complémentaire. Notre équipe se fera un plaisir de vous répondre.</p>
            </div>
            <div>
                <div className="container mx-auto p-4 py-16 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6">
                        {/* Map through the FAQ data here */}
                        {Faq.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2 items-center justify-center bg-background p-4 rounded-4xl ">
                                <ShieldQuestion size={60} className="stroke-white animate-pulse"/>
                                <h3 className="text-2xl font-zodiak text-center mb-4 text-white">  {item.question}</h3>
                                <p className="text-white text-center font-chillax">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         

        </div>
    )
}