import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";
import BackButton from "@/tools/backButton";

export async function generateMetadata() {
    return {
      title: "Soins pour Vos Os et Articulations",
      description: "À la Clinique Chifa Tasnime à Marrakech, nous offrons des soins spécialisés pour vos os et articulations, en utilisant des technologies de pointe et des techniques avancées pour garantir votre bien-être.",
      alternates: {
        canonical: "/soins-os-articulations",
      },
      openGraph: {
        title: "Clinique Chifa Tasnime | Soins pour Vos Os et Articulations",
        description: "À la Clinique Chifa Tasnime à Marrakech, nous offrons des soins spécialisés pour vos os et articulations, en utilisant des technologies de pointe et des techniques avancées pour garantir votre bien-être.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/soins-os-articulations`,
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

export default function Soins_pour_vos_os_et_articulations() {
    return (
        <div className="">
            <BackButton/>
            <div className="h-screen relative ">
                <Image src={'/img/specialites/service/soins-os-articulations.png'} alt="FAQ" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className=" text-center">Soins pour vos os et articulations</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">À la Clinique Chifa Tasnime à Marrakech, nous offrons des soins spécialisés pour vos os et articulations. Notre équipe de professionnels qualifiés utilise des techniques avancées pour traiter toutes sortes de troubles musculo-squelettiques, en mettant l’accent sur un diagnostic précis et un traitement efficace.</p>
            </div>
            <div className=" min-h-screen flex flex-col lg:flex-row justify-between">
                <div className=" lg:w-1/2">
                    <Image src={`/img/specialites/soins-os-articulations/img.jpg`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={`object-cover h-[30rem] lg:h-full w-full`} width={1920} height={1080} />
                </div>
                <div className=" bg-background lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Pourquoi choisir notre service pour vos os et articulations ?</h2>
                    <p className="font-chillax text-white text-sm lg:text-base">Nous mettons à votre disposition des solutions modernes pour traiter les douleurs articulaires, les fractures et autres pathologies osseuses. Grâce à nos équipements de pointe et à une équipe dédiée, nous offrons des soins personnalisés et adaptés à chaque patient.</p>
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Nos traitements disponibles :</h2>
                    <ul className="font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Rééducation articulaire et orthopédique</li>
                        <li>Injections articulaires (corticoïdes, hyaluronique, etc.)</li>
                        <li>Chirurgie orthopédique pour fractures et pathologies osseuses</li>
                        <li>Traitement des douleurs chroniques (arthrose, tendinites, etc.)</li>
                        <li>Suivi post-opératoire personnalisé</li>
                        <li>Thérapies manuelles et physiothérapie</li>
                    </ul>
                    <p className="font-chillax text-white">Notre équipe de spécialistes en orthopédie et en soins musculaires est à votre disposition pour vous aider à retrouver la mobilité et à réduire la douleur. Nous prenons en charge vos besoins à chaque étape de votre traitement.</p>
                </div>
            </div>
            <LogoScroll />
            <Faq />
        </div>
    );
}
