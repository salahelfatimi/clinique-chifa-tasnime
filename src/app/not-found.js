import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "page n'existe pas",
    description: "Découvrez des interventions chirurgicales de haute précision à la Clinique Chifa Tasnime, avec des technologies avancées et des experts dédiés pour des soins optimaux.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "page n'existe pas",
      description: "Découvrez des interventions chirurgicales de haute précision à la Clinique Chifa Tasnime, avec des technologies avancées et des experts dédiés pour des soins optimaux.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
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

export default function NotFound() {
  return (
    <>
      <div className="  flex flex-col gap-10 items-center justify-center  h-screen w-full  bg-background   inset-0 ">
        <Image src={'/img/logo_text_white.png'} className="w-44" width={500} height={500} alt="clinique chifa tasnime" title="clinique chifa tasnime"/>
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-white">
          Il semble que cette page n&apos;existe pas
        </p>
        <Link className=" underline underline-offset-4  font-bold text-xl text-primary flex  duration-700 items-center gap-2" href="/" >
          <Home size={30}/>Retour à l&apos;accueil
        </Link>
      </div>
    </>
  );
}