import Footer from "@/components/footer/page";
import "./globals.css";
import Navbar from "@/components/navbar/page";


export const metadata = {
  title: {  template: "Clinique Chifa Tasnime | %s" },
  description: "Découvrez des interventions chirurgicales de haute précision à la Clinique Chifa Tasnime, avec des technologies avancées et des experts dédiés pour des soins optimaux.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),

};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
