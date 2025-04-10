import Footer from "@/components/footer/page";
import "./globals.css";
import Navbar from "@/components/navbar/page";


export const metadata = {
  title: "Clinique Chifa Tasnime",
  description: "Clinique Chifa Tasnime - Votre santé, notre priorité",
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
