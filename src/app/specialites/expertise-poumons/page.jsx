import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";


export async function generateMetadata() {
    return {
      title: "Expertise Poumons ",
      description: "Découvrez notre expertise pulmonaire à la Clinique Chifa Tasnime à Marrakech. Soins de qualité, diagnostics avancés et traitement personnalisé pour vos affections pulmonaires. Prenez soin de vos poumons avec nos experts.",
      alternates: {
        canonical: "/expertise-poumons",
      },
      openGraph: {
        title: "Expertise Poumons ",
        description: "Découvrez notre expertise pulmonaire à la Clinique Chifa Tasnime à Marrakech. Soins de qualité, diagnostics avancés et traitement personnalisé pour vos affections pulmonaires. Prenez soin de vos poumons avec nos experts.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/expertise-poumons`,
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


export default function ExpertisePoumons() {
    return (
        <div className="">
            <div className="h-screen relative">
                <Image src={'/img/specialites/service/expertise-poumons.png'} alt="Expertise Poumons" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className="text-center">Une expertise pour vos poumons</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">
                    À la Clinique Chifa Tasnime, nous mettons à votre disposition une expertise spécialisée pour le diagnostic et le traitement des affections pulmonaires. Grâce à nos équipements de pointe et à notre équipe de pneumologues expérimentés, nous vous offrons des soins adaptés à vos besoins.
                </p>
            </div>
            <div className="min-h-screen flex flex-col lg:flex-row justify-between">
                <div className="lg:w-1/2">
                    <Image src={`/img/specialites/expertise-poumons/img.jpg`} alt="Expertise Poumons" title="Expertise Poumons" className={`object-cover h-[30rem] lg:h-full w-full`} width={1920} height={1080} />
                </div>
                <div className="bg-background lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Pourquoi choisir notre expertise pulmonaire ?</h2>
                    <p className="font-chillax text-white text-sm lg:text-base">
                        Nous comprenons l'importance de la santé pulmonaire et la nécessité d'un diagnostic précoce. Nos pneumologues utilisent des technologies avancées pour détecter et traiter diverses pathologies pulmonaires, des infections aux maladies chroniques, en passant par les troubles respiratoires.
                    </p>
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Nos services disponibles :</h2>
                    <ul className="font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Consultation pneumologique</li>
                        <li>Test de la fonction pulmonaire (spirométrie)</li>
                        <li>Imagerie pulmonaire (radiographies, scanner thoracique)</li>
                        <li>Tests allergologiques</li>
                        <li>Traitement des maladies pulmonaires chroniques (asthme, BPCO)</li>
                        <li>Suivi de la pathologie pulmonaire</li>
                    </ul>
                    <p className="font-chillax text-white">
                        Nos pneumologues sont formés pour traiter une large gamme de maladies pulmonaires, en vous offrant un suivi personnalisé pour chaque étape de votre soin.
                    </p>
                </div>
            </div>
            <LogoScroll />
            <Faq />
        </div>
    );
}
