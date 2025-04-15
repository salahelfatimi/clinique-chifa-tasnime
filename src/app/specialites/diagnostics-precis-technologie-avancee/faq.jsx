'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
      {
        question: "Quels types de diagnostics proposez-vous ?",
        answer: "Nous proposons des examens variés, incluant l'IRM, le scanner, la radiologie, l'échographie, le Doppler vasculaire, ainsi que des bilans sanguins et des tests biologiques spécialisés."
      },
      {
        question: "Les résultats des examens sont-ils disponibles rapidement ?",
        answer: "Oui, nous nous engageons à fournir des résultats rapides grâce à notre plateau technique de dernière génération."
      },
      {
        question: "Dois-je prendre rendez-vous pour un diagnostic ?",
        answer: "Cela dépend du type d'examen. Pour certains, vous pouvez venir sans rendez-vous. Pour d'autres, un rendez-vous est recommandé. Contactez-nous pour plus de détails."
      },
      {
        question: "Les examens sont-ils adaptés à tous les âges ?",
        answer: "Oui, nous avons des équipements et des espaces spécialement conçus pour les adultes, enfants et femmes enceintes."
      },
      {
        question: "Le service de diagnostic est-il sécurisé ?",
        answer: "Oui, tous nos examens sont réalisés dans des espaces hygiéniques et sécurisés, en respectant les normes médicales les plus strictes."
      },
      {
        question: "Est-ce que vous proposez des diagnostics spécialisés, comme pour les tests hormonaux ou infectieux ?",
        answer: "Oui, nous proposons une gamme complète de tests spécialisés, y compris hormonaux, infectieux, immunologiques, et bien d'autres."
      },
      {
        question: "Puis-je obtenir une consultation après avoir réalisé un diagnostic ?",
        answer: "Oui, si nécessaire, nos spécialistes en médecine collaborent avec votre médecin traitant pour assurer une prise en charge optimale basée sur vos résultats."
      },
      {
        question: "Comment puis-je prendre rendez-vous pour un diagnostic ?",
        answer: "Vous pouvez réserver votre examen directement en ligne ou nous contacter par téléphone pour fixer un rendez-vous selon votre disponibilité."
      }
    ];
    return(
        <div className="bg-background py-10">
            <div className="container mx-auto px-4 flex flex-col justify-between gap-4 items-center  max-w-7xl ">
                <h2  className="  text-3xl lg:text-6xl  mb-4 font-zodiak text-white uppercase text-center "> Foire Aux Questions <span className=" text-primary">(FAQ)</span></h2>
                <div className=" flex flex-col gap-6 w-full ">
                    {faqData.map((faq, index) => (
                        <div key={index} className="flex flex-col p-4 gap-2 border-b-2 last:border-b-0 border-white">
                            <h3 onClick={()=>(setOpenFaq(index))} className="text-lg lg:text-xl font-chillax font-medium text-white cursor-pointer"> - {faq.question}</h3>
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out text-white ${openFaq == index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="font-chillax text-sm lg:text-base">{faq.answer}</p>
                            </div>                    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}