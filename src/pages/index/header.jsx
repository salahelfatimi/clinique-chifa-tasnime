'use client'
import Link from "next/link";
export default function Header() {
   
    return (
        <div className=" overflow-hidden bg-white   ">
            <div className="relative h-screen">
                <div className=" absolute top-0 left-0 w-full h-full bg-black z-10 opacity-60 "></div>
                <video autoPlay playsInline loop muted className="w-full h-full  object-cover  " about="la Clinique Chifa tasnime" title="la Clinique Chifa tasnime" > 
                        <source src="/vid/bg-video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                </video>
                <div className="z-20 flex flex-col w-full container items-center px-3 gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
                    <h1 className=" text-2xl lg:text-6xl text-center font-chillax font-semibold uppercase">
                        Votre <span className=" text-primary">santé</span> , notre <span className=" text-primary">priorité</span> - Des soins spécialisés <span className=" text-primary">24h/24</span> et <span className=" text-primary">7j/7</span>  à Marrakech                    
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
                        <Link href={'#'} className={`bg-primary rounded-full font-chillax font-medium hover:bg-white hover:text-primary duration-700  text-white text-xl font-boska px-6 py-3 mt-4`}>
                            Prendre rendez-vous                        
                        </Link>
                        {/* <Link href={'#'} className={`bg-secondary rounded-full font-chillax font-medium hover:bg-white hover:text-secondary duration-700  text-white text-xl font-boska px-6 py-3 mt-4`}>
                            Notre Service                       
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}