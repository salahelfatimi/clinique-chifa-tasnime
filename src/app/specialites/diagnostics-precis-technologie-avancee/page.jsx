import LogoScroll from "@/tools/logoScroll";
import Image from "next/image";
import Faq from "./faq";

export async function generateMetadata() {
    return {
      title: "Diagnostics Précis & Technologie Avancée",
      description: "Des diagnostics fiables et rapides grâce à des équipements médicaux de pointe à la Clinique Chifa Tasnime à Marrakech.",
      alternates: {
        canonical: "/diagnostics-precis-technologie-avancee",
      },
      openGraph: {
        title: "Diagnostics Précis & Technologie Avancée",
        description: "Des diagnostics fiables et rapides grâce à des équipements médicaux de pointe à la Clinique Chifa Tasnime à Marrakech.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/diagnostics-precis-technologie-avancee`,
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
                <Image src={'/img/specialites/service/diagnostics-precis-technologie-avancee.png'} alt="FAQ" fill className="object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 container mx-auto h-full flex items-center justify-center text-white font-chillax text-3xl lg:text-7xl font-bold">
                    <h1 className=" text-center">Diagnostics Précis & Technologie Avancée</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center  bg-primary py-10 px-6">
                <p className="text-sm lg:text-base font-chillax text-white text-center">À la Clinique Chifa Tasnime à Marrakech, nous plaçons l’innovation au cœur de notre approche médicale. Grâce à des équipements de dernière génération et à une équipe de spécialistes expérimentés, nous garantissons des diagnostics rapides, précis et personnalisés. Que ce soit pour des examens de routine ou dans le cadre d’une urgence, notre plateau technique vous assure une qualité de soins exceptionnelle.</p>
            </div>
            <div className=" min-h-screen flex flex-col lg:flex-row justify-between   ">
                <div className=" lg:w-1/2">
                    <Image src={`/img/specialites/diagnostics-precis-technologie-avancee/img.jpg`} alt="clinique chifa tasnime" title="clinique chifa tasnime" className={` object-cover h-[30rem] lg:h-full w-full  `} width={1920} height={1080}/>
                </div>
                <div className=" bg-background  lg:w-1/2 flex flex-col justify-center items-start z-20 gap-4 max-w-7xl container mx-auto p-10">
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl  font-bold">Pourquoi choisir notre service de diagnostic ?</h2>
                    <p className=" font-chillax text-white text-sm lg:text-base">Nous savons que poser un bon diagnostic est la première étape vers la guérison. C’est pourquoi nous avons investi dans des technologies de pointe, permettant une lecture claire, fiable et rapide des résultats. Nos équipes de radiologues, biologistes et techniciens vous assurent un accompagnement humain et professionnel à chaque étape.</p>
                    <h2 className=" text-white font-chillax text-2xl lg:text-4xl font-bold">Nos examens disponibles :</h2>
                    <ul className=" font-chillax list-inside space-y-4 text-start text-sm lg:text-base list-disc text-white">
                        <li>Imagerie par résonance magnétique (IRM)</li>
                        <li>Scanner (CT-Scan)</li>
                        <li>Radiologie conventionnelle (radio, panoramique dentaire…)</li>
                        <li>Échographie 2D et 3D</li>
                        <li>Doppler vasculaire</li>
                        <li>Bilan sanguin complet</li>
                        <li>Examens biologiques spécialisés</li>
                        <li>Tests hormonaux, infectieux, immunologiques…</li>

                    </ul>
                    <p className=" font-chillax text-white ">Nos cardiologues interventionnels et chirurgiens cardio-vasculaires sont hautement qualifiés et formés aux dernières avancées médicales. Leur priorité est votre santé, votre confort, et votre rétablissement.</p>

                </div>
            </div>
            <LogoScroll/>
            <Faq/>
        </div>
    )
}