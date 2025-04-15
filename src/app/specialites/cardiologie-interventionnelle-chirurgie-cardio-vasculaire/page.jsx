import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";

export async function generateMetadata() {
    return {
      title: "Cardiologie & Chirurgie Cardio-Vasculaire ",
      description: "Soins experts du cœur à Marrakech : cardiologie interventionnelle et chirurgie cardio-vasculaire à la Clinique Chifa Tasnime.",
      alternates: {
        canonical: "/cardiologie-interventionnelle-chirurgie-cardio-vasculaire",
      },
      openGraph: {
        title: "Cardiologie & Chirurgie Cardio-Vasculaire ",
        description: "Soins experts du cœur à Marrakech : cardiologie interventionnelle et chirurgie cardio-vasculaire à la Clinique Chifa Tasnime.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/cardiologie-interventionnelle-chirurgie-cardio-vasculaire`,
        robots: {
          index: true,
          follow: true,
        },
        siteName: "Clinique Chifa Tasnime",
        images: [
          {
            url: `/opengraph-image.jpg`,
            secureUrl: `/opengraph-image.jpg`,
            width: 1200,
            height: 675,
            alt: "Clinique Chifa Tasnime",
          }
        ],
        type: "website",
  
      },
    }
};

export default function Cardiologie_interventionnelle_chirurgie_cardio_vasculaire(){
    return(
        <div className="">
            <div className="h-screen relative ">
                <Image src={'/img/specialites/service/cardiologie-interventionnelle-chirurgie-cardio-vasculaire.png'} alt="FAQ" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className=" text-center">Cardiologie Interventionnelle & Chirurgie Cardio-Vasculaire</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center  bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">À la Clinique Chifa Tasnime, située à Marrakech, nous mettons à votre disposition une unité spécialisée en cardiologie interventionnelle et en chirurgie cardio-vasculaire à cœur ouvert. Cette spécialité permet le traitement efficace des maladies cardiovasculaires, grâce à des techniques de pointe et une équipe médicale expérimentée.</p>
            </div>
            <div className=" min-h-screen flex flex-col lg:flex-row justify-between   ">
                <div className=" lg:w-1/2">
                    <Image src={`/img/specialites/cardiologie-interventionnelle-chirurgie-cardio-vasculaire/img.jpg`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={` object-cover h-[30rem] lg:h-full w-full  `} width={1920} height={1080}/>
                </div>
                <div className=" bg-background  lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl  font-bold">Pourquoi choisir notre service ?</h2>
                    <p className=" font-chillax text-white text-sm lg:text-base">Notre objectif est simple : offrir une prise en charge rapide, précise et humaine aux patients souffrant de pathologies cardiaques. Grâce à un équipement moderne, un bloc opératoire spécialisé et une réanimation 24h/24, nous garantissons des soins de qualité dans un environnement sécurisé.</p>
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl font-bold">Nos prestations incluent :</h2>
                    <ul className=" font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Angioplastie coronaire avec ou sans pose de stents</li>
                        <li>Traitement des valvulopathies (valves mitrales, aortiques...)</li>
                        <li>Chirurgie cardiaque à cœur ouvert</li>
                        <li>Traitement des anévrismes et dissections de l’aorte</li>
                        <li>Prise en charge des malformations congénitales cardiaques</li>
                        <li>Suivi post-opératoire personnalisé</li>

                    </ul>
                    <p className=" font-chillax text-white ">Nos cardiologues interventionnels et chirurgiens cardio-vasculaires sont hautement qualifiés et formés aux dernières avancées médicales. Leur priorité est votre santé, votre confort, et votre rétablissement.</p>

                </div>
            </div>
            <LogoScroll/>
            <Faq/>
        </div>
    )
}