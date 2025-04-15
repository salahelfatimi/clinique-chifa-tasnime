import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";



export async function generateMetadata() {
    return {
      title: "Interventions Chirurgicales de Haute Précision ",
      description: "La Clinique Chifa Tasnime à Marrakech est disponible 24h/24 et 7j/7 pour toutes vos urgences médicales. Soins rapides et efficaces, équipe médicale prête à intervenir à tout moment pour votre bien-être.",
      alternates: {
        canonical: "/disponibles-24h-24-7j-7-pour-vos-urgences",
      },
      openGraph: {
        title: "Interventions Chirurgicales de Haute Précision ",
        description: "La Clinique Chifa Tasnime à Marrakech est disponible 24h/24 et 7j/7 pour toutes vos urgences médicales. Soins rapides et efficaces, équipe médicale prête à intervenir à tout moment pour votre bien-être.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/disponibles-24h-24-7j-7-pour-vos-urgences`,
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
                <Image src={'/img/specialites/service/disponibles-24h-24-7j-7-pour-vos-urgences.png'} alt="FAQ" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className=" text-center">Disponibles 24h/24 et 7j/7 pour vos urgences</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center  bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">À la Clinique Chifa Tasnime, nous savons que les urgences ne préviennent pas. C’est pourquoi notre service d’accueil des urgences est ouvert 24 heures sur 24, 7 jours sur 7. Situé à Marrakech, il est équipé pour prendre en charge rapidement tous les types d’urgences médicales, chirurgicales ou traumatiques.</p>
            </div>
            <div className=" min-h-screen flex flex-col lg:flex-row justify-between   ">
                <div className=" lg:w-1/2">
                    <Image src={`/img/specialites/disponibles-24h-24-7j-7-pour-vos-urgences/img.jpg`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={` object-cover h-[30rem] lg:h-full w-full  `} width={1920} height={1080}/>
                </div>
                <div className=" bg-background  lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl  font-bold">Pourquoi choisir notre service d’urgence ?</h2>
                    <p className=" font-chillax text-white text-sm lg:text-base">Notre priorité est d’agir rapidement, efficacement et avec compassion. Dès votre arrivée, vous êtes évalué par une équipe médicale compétente afin de déterminer la gravité de votre état et de vous orienter vers les soins appropriés. Aucun rendez-vous n’est nécessaire.</p>
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl font-bold">Nos prestations d’urgence incluent :</h2>
                    <ul className=" font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Prise en charge immédiate des urgences vitales</li>
                        <li>Traumatologie (fractures, entorses, plaies…)</li>
                        <li>Crises cardiaques et douleurs thoraciques</li>
                        <li>Urgences respiratoires et digestives</li>
                        <li>Urgences gynécologiques et obstétricales</li>
                        <li>Urgences pédiatriques</li>
                        <li>Suivi post-urgence ou hospitalisation si nécessaire</li>
                    </ul>
                    <p className=" font-chillax text-white ">Médecins urgentistes, infirmiers spécialisés, aides-soignants et techniciens sont en poste 24h/24 pour garantir un accueil rapide et une prise en charge optimale.</p>

                </div>
            </div>
            <LogoScroll/>
            <Faq/>
        </div>
    )
}