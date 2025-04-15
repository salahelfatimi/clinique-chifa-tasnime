import ImageScroll from "@/pages/a-propos/imageScroll";
import Avis from "@/pages/index/avis";
import Faq from "@/pages/index/faq";
import SactionNumbers from "@/pages/index/sactionNumbers";
import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";

export async function generateMetadata() {
    return {
      title: "Notre Histoire et Expertise Médicale à Marrakech",
      description: "La Clinique Chifa Tasnime à Marrakech offre des soins médicaux de qualité, avec une équipe d'experts et des technologies avancées pour votre bien-être.",
      alternates: {
        canonical: "/a-propos",
      },
      openGraph: {
        title: "Notre Histoire et Expertise Médicale à Marrakech",
        description: "La Clinique Chifa Tasnime à Marrakech offre des soins médicaux de qualité, avec une équipe d'experts et des technologies avancées pour votre bien-être.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/a-propos`,
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

export default function Page() {
    return(
        <div>
            <div className="h-screen relative ">
                <Image src={'/img/a-propos/img.jpg'} alt="clinique chifa tasnime" title="clinique chifa tasnime" width={1920} height={1080} className="object-cover h-full w-full object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex flex-col items-center justify-center gap-4 max-w-7xl">
                    <h1 className=" text-center text-white font-chillax text-3xl lg:text-7xl font-bold">À propos de la Clinique Chifa Tasnime</h1>
                    <p className=" text-white font-chillax text-center">Située au cœur de Marrakech, la Clinique Chifa Tasnime est un établissement médical moderne, reconnu pour la qualité de ses soins, l’expertise de son personnel et son engagement envers le bien-être des patients. Nous offrons un environnement sécurisé et accueillant, où chaque patient bénéficie d’une prise en charge humaine et personnalisée.</p>

                </div>
            </div>
            <div className=" min-h-screen flex flex-col lg:flex-row justify-between   ">
                <div className=" lg:w-1/2">
                    <Image src={`/img/a-propos/img_1.jpg`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={` object-cover h-[30rem] lg:h-full w-full  `} width={1920} height={1080}/>
                </div>
                <div className=" bg-background  lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl  font-bold">Notre vision</h2>
                    <p className=" font-chillax text-white text-sm lg:text-base">Être un pilier de la santé privée à Marrakech, en mettant l’humain au cœur de chaque soin, tout en développant des pratiques médicales modernes et responsables.</p>
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl font-bold">Nos engagements à Marrakech</h2>
                    <ul className=" font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Excellence médicale et innovation continue</li>
                        <li>Accueil chaleureux et écoute active</li>
                        <li>Respect de l’éthique et confidentialité des patients</li>
                        <li>Disponibilité 24h/24 pour les urgences</li>
                        <li>Accessibilité pour les habitants de Marrakech et sa région</li>
                    </ul>
                    <p className=" font-chillax text-white font-bold ">À la Clinique Chifa Tasnime de Marrakech, votre santé est entre de bonnes mains.</p>

                </div>
            </div>
            <LogoScroll/>
            <ImageScroll/>
            <SactionNumbers/>
            <Avis/>           
           
           
        </div>
    )
}