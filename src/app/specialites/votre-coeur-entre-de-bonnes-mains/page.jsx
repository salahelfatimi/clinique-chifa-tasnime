import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";
import BackButton from "@/tools/backButton";


export async function generateMetadata() {
    return {
      title: "Votre Cœur entre de Bonnes Mains | Soins Cardiovasculaires à Marrakech",
      description: "Profitez de soins cardiovasculaires de haute qualité à la Clinique Chifa Tasnime à Marrakech. Nos experts cardiologues vous assurent des soins personnalisés et un suivi optimal pour la santé de votre cœur.",
      alternates: {
        canonical: "/votre-coeur-entre-de-bonnes-mains",
      },
      openGraph: {
        title: "Votre Cœur entre de Bonnes Mains | Soins Cardiovasculaires à Marrakech",
        description: "Profitez de soins cardiovasculaires de haute qualité à la Clinique Chifa Tasnime à Marrakech. Nos experts cardiologues vous assurent des soins personnalisés et un suivi optimal pour la santé de votre cœur.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/votre-coeur-entre-de-bonnes-mains`,
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

export default function VotreCoeur() {
    return (
        <div className="">
            <BackButton/>
            <div className="h-screen relative">
                <Image src={'/img/specialites/service/votre-coeur-entre-de-bonnes-mains.png'} alt="Votre Cœur Entre de Bonnes Mains" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className="text-center">Votre cœur entre de bonnes mains</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">
                    À la Clinique Chifa Tasnime, nous offrons une prise en charge spécialisée pour la santé cardiaque. Nos cardiologues experts sont à votre écoute pour diagnostiquer, traiter et suivre toutes les pathologies cardiaques, qu'elles soient bénignes ou graves. Nous mettons à votre disposition les meilleures technologies pour assurer une prise en charge optimale.
                </p>
            </div>
            <div className="min-h-screen flex flex-col lg:flex-row justify-between">
                <div className="lg:w-1/2">
                    <Image src={`/img/specialites/votre-coeur-entre-de-bonnes-mains/img.jpg`} alt="Votre Cœur Entre de Bonnes Mains" title="Votre Cœur Entre de Bonnes Mains" className={`object-cover h-[30rem] lg:h-full w-full`} width={1920} height={1080} />
                </div>
                <div className="bg-background lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Pourquoi choisir notre service cardiaque ?</h2>
                    <p className="font-chillax text-white text-sm lg:text-base">
                        La santé cardiaque est essentielle pour une vie saine. Notre équipe de cardiologues utilise des équipements de pointe pour un diagnostic précis et rapide. Grâce à notre expertise, nous vous assurons des traitements adaptés à chaque pathologie cardiaque, qu'il s'agisse d'une maladie coronarienne, d'une insuffisance cardiaque ou de troubles du rythme cardiaque.
                    </p>
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Nos services cardiaques disponibles :</h2>
                    <ul className="font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Consultation en cardiologie</li>
                        <li>Échographie cardiaque</li>
                        <li>Test d'effort</li>
                        <li>Electrocardiogramme (ECG)</li>
                        <li>Holter cardiaque</li>
                        <li>Prise en charge des maladies coronariennes</li>
                        <li>Traitement de l'insuffisance cardiaque</li>
                        <li>Suivi post-infarctus</li>
                    </ul>
                    <p className="font-chillax text-white">
                        Nos cardiologues sont dédiés à vous fournir des soins de qualité, en utilisant les dernières avancées médicales pour assurer votre bien-être et la bonne santé de votre cœur.
                    </p>
                </div>
            </div>
            <LogoScroll />
            <Faq />
        </div>
    );
}
