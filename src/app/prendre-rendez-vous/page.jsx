import Prendre_rendez_vous_page from "@/pages/prendre-rendez-vous/page";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Prendre Rendez-vous",
      description: "Prenez rendez-vous en ligne à la Clinique Chifa Tasnime à Marrakech pour nos consultations médicales. Facile, rapide et sécurisé. Choisissez votre spécialité et réservez aujourd’hui !",
      alternates: {
        canonical: "/prendre-rendez-vous",
      },
      openGraph: {
        title: "Prendre Rendez-vous",
        description: "Prenez rendez-vous en ligne à la Clinique Chifa Tasnime à Marrakech pour nos consultations médicales. Facile, rapide et sécurisé. Choisissez votre spécialité et réservez aujourd’hui !",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/prendre-rendez-vous`,
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