import Contact from "@/pages/contact/page";

export async function generateMetadata() {
    return {
      title: "Contactez-nous",
      description: "Prenez contact avec la Clinique Chifa Tasnime à Marrakech pour toute demande de renseignements, prise de rendez-vous ou questions sur nos services de santé. Notre équipe vous répond rapidement.",
      alternates: {
        canonical: "/contactez-nous",
      },
      openGraph: {
        title: "Contactez-nous",
        description: "Prenez contact avec la Clinique Chifa Tasnime à Marrakech pour toute demande de renseignements, prise de rendez-vous ou questions sur nos services de santé. Notre équipe vous répond rapidement.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contactez-nous`,
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
            <Contact/>
       </div>
    )
}