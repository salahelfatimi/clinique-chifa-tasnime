import Page from "@/pages/index/page";

export async function generateMetadata() {
  return {
    title: "Clinique Chifa Tasnime | Soins Médicaux de Qualité à Marrakech",
    description: "Découvrez des interventions chirurgicales de haute précision à la Clinique Chifa Tasnime, avec des technologies avancées et des experts dédiés pour des soins optimaux.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Clinique Chifa Tasnime | Soins Médicaux de Qualité à Marrakech",
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


export default function Home() {
  return (
      <div>
          <Page/>
      </div>
  );
}
