import Prendre_rendez_vous_page from "@/pages/prendre-rendez-vous/page";
import Image from "next/image";

export default function Prendre_rendez_vous(){
    return(
        <div >
            <div className="min-h-screen relative ">
                <Image src={'/img/prendre-rendez-vous/img.jpg'} alt="FAQ" fill className="object-cover object-center h-full w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <Prendre_rendez_vous_page/>
            </div>
        </div>
    )
}