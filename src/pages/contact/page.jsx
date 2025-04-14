import { MapPin, Phone ,Mail} from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return(
        <div className="relative min-h-screen flex flex-col  justify-start overflow-hidden  ">
            <div className="absolute top-0 h-20 left-0 w-full  bg-background "></div>
            <iframe className=" pt-20 w-screen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4144.423258284018!2d-8.011837503210488!3d31.635952400000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee896b3f423b%3A0xe28965caaabd4148!2sClinique%20Chifa%20Marrakech!5e1!3m2!1sen!2sma!4v1744363623829!5m2!1sen!2sma" width="1920" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="p-4">
                <form className="max-w-7xl  border-4 my-16  border-primary left-0 right-0 flex flex-col gap-4 items-center justify-center text-center p-6 py-10  container mx-auto bg-background rounded-4xl shadow-2xl z-10  ">
                    <h1 className=" text-4xl font-chillax font-bold text-white pb-4 uppercase">Envoyez-nous un message</h1>
                    <div className=" flex flex-col lg:flex-row justify-between items-start gap-10 w-full ">
                        <div className=" lg:w-1/2 flex flex-col items-start gap-4">
                            <h2 className=" text-xl font-chillax font-medium text-white pb-4 uppercase">Contactez nous</h2>
                            <div className=" flex flex-row justify-between items-center gap-4 w-full">
                                <input type="text" name="fullName" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="Nom complet" />
                                <input type="text" name="email" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="Email"/>
                            </div>
                            <input type="text" name="phone" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="Numéro de téléphone"/>
                            <textarea  rows={6} className=" border-2 border-primary w-full  rounded-4xl p-6 placeholder:text-white font-chillax" placeholder="Commentaire Ou Question" name="" id=""></textarea>
                            <button type="submit" className=" bg-primary text-white py-4 w-full rounded-full font-chillax  ">Envoyer mon message</button>
                        </div>
                        <div className=" lg:w-1/2 flex flex-col gap-3 items-start justify-start">
                            <h2 className=" text-xl font-chillax font-medium text-white pb-4 uppercase">Informations</h2>
                            <div className=" flex flex-col justify-start items-start w-full gap-4" >
                                <h3 className=" text-primary font-medium  border-2 w-full text-start p-2 font-chillax flex gap-2 rounded-4xl"><MapPin /> Localisation</h3>
                                <span className=" text-white text-sm border-primary font-zodiak border-l-4 pl-4">4 Rue Ibn Toummert, Marrakesh 40000</span>
                            </div>
                            <div className=" flex flex-col justify-start items-start w-full gap-4" >
                                <h3 className=" text-primary  font-medium  border-2 w-full text-start p-2 font-chillax flex gap-2 rounded-4xl"><Phone/> Téléphone</h3>
                                <Link href={'tel:+212524433006'} className=" text-white text-sm border-primary font-zodiak border-l-4 pl-4 underline underline-offset-2">0524433006</Link>
                            </div>
                            <div className=" flex flex-col justify-start items-start w-full gap-4" >
                                <h3 className=" text-primary font-medium  border-2 w-full text-start p-2 font-chillax flex gap-2 rounded-4xl"><Mail /> E-mail</h3>
                                <Link href={'mail:Contact@clinique-chifa-tasnime.com'} className=" text-white text-sm border-primary font-zodiak border-l-4 pl-4 underline underline-offset-2">Contact@clinique-chifa-tasnime.com</Link>
                            </div>
                        
                        </div>
                    </div>
                </form>
            </div>
          
        </div>
    )
}