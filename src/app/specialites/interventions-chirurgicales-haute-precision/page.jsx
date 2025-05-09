import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";
import BackButton from "@/tools/backButton";


export async function generateMetadata() {
    return {
      title: "Interventions Chirurgicales de Haute Précision ",
      description: "Découvrez nos interventions chirurgicales de haute précision à la Clinique Chifa Tasnime à Marrakech. Des soins de qualité, des technologies avancées et des chirurgiens experts pour garantir votre sécurité et rétablissement.",
      alternates: {
        canonical: "/interventions-chirurgicales-haute-precision",
      },
      openGraph: {
        title: "Clinique Chifa Tasnime | Interventions Chirurgicales de Haute Précision ",
        description: "Découvrez nos interventions chirurgicales de haute précision à la Clinique Chifa Tasnime à Marrakech. Des soins de qualité, des technologies avancées et des chirurgiens experts pour garantir votre sécurité et rétablissement.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/interventions-chirurgicales-haute-precision`,
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


export default function InterventionsChirurgicales() {
    return (
        <div className="">
            <BackButton/>
            <div className="h-screen relative">
                <Image src={'/img/specialites/service/interventions-chirurgicales-haute-precision.png'} alt="Interventions Chirurgicales de Haute Précision" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className="text-center">Interventions Chirurgicales de Haute Précision</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">
                    À la Clinique Chifa Tasnime, nous offrons des interventions chirurgicales de haute précision réalisées par nos chirurgiens spécialisés. Grâce à des technologies avancées et des équipements de dernière génération, nous garantissons des résultats optimaux et une récupération rapide. Que ce soit pour des opérations délicates ou des procédures plus complexes, nos experts sont là pour vous offrir les meilleurs soins possibles.
                </p>
            </div>
            <div className="min-h-screen flex flex-col lg:flex-row justify-between">
                <div className="lg:w-1/2">
                    <Image src={`/img/specialites/interventions-chirurgicales-haute-precision/img.jpg`} alt="Interventions Chirurgicales de Haute Précision" title="Interventions Chirurgicales de Haute Précision" className={`object-cover h-[30rem] lg:h-full w-full`} width={1920} height={1080} />
                </div>
                <div className="bg-background lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Pourquoi choisir nos interventions chirurgicales de haute précision ?</h2>
                    <p className="font-chillax text-white text-sm lg:text-base">
                        Nous mettons un point d'honneur à réaliser chaque intervention avec une grande précision. Grâce à des technologies de pointe, comme la chirurgie assistée par robot, nous pouvons effectuer des opérations complexes avec une grande exactitude, réduisant ainsi les risques et les temps de récupération. Nos chirurgiens, experts dans leur domaine, sont formés aux dernières techniques chirurgicales pour vous offrir les soins les plus sûrs.
                    </p>
                    <h2 className="text-white font-chillax text-2xl lg:text-4xl font-bold">Nos interventions chirurgicales disponibles :</h2>
                    <ul className="font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Chirurgie robotique</li>
                        <li>Chirurgie cardiaque</li>
                        <li>Chirurgie orthopédique</li>
                        <li>Chirurgie neurochirurgicale</li>
                        <li>Chirurgie oncologique</li>
                        <li>Chirurgie des tissus mous</li>
                        <li>Chirurgie réparatrice et esthétique</li>
                        <li>Chirurgie digestive</li>
                    </ul>
                    <p className="font-chillax text-white">
                        Notre équipe de chirurgiens hautement qualifiés utilise des équipements modernes pour garantir des interventions sûres et efficaces. Nous nous engageons à vous accompagner à chaque étape de votre traitement, de la consultation à la récupération post-opératoire.
                    </p>
                </div>
            </div>
            <LogoScroll />
            <Faq />
        </div>
    );
}
