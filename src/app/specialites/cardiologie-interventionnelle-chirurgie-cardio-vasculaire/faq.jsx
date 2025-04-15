'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
        {
            question: "Qu’est-ce que la cardiologie interventionnelle ?",
            answer: "La cardiologie interventionnelle permet de traiter certaines maladies cardiaques sans chirurgie ouverte, notamment grâce au cathétérisme, à l’angioplastie ou à la pose de stents."
          },
          {
            question: "Quels types de chirurgies cardiaques sont proposés ?",
            answer: "Nous proposons des interventions comme le pontage coronarien, le remplacement valvulaire, la chirurgie à cœur ouvert et d'autres traitements avancés."
          },
          {
            question: "Les interventions sont-elles douloureuses ?",
            answer: "Toutes les interventions sont pratiquées sous anesthésie locale ou générale. Nous veillons à votre confort et à votre sécurité tout au long du processus."
          },
          {
            question: "Quelle est la durée d’hospitalisation après une chirurgie cardiaque ?",
            answer: "Elle varie selon l’intervention, mais comptez en moyenne entre 5 et 10 jours, suivis d’un suivi médical personnalisé."
          },
          {
            question: "Quels examens sont nécessaires avant l’opération ?",
            answer: "Nous effectuons un bilan complet incluant électrocardiogramme (ECG), échographie cardiaque, analyses de sang, scanner et parfois une coronarographie."
          },
          {
            question: "Puis-je prendre rendez-vous sans ordonnance ?",
            answer: "Oui, vous pouvez nous consulter directement pour une première visite ou un second avis spécialisé."
          },
          {
            question: "Le service est-il disponible en urgence ?",
            answer: "Oui, notre équipe de cardiologie est disponible 24h/24 et 7j/7 pour les urgences cardiaques."
          },
          {
            question: "Est-ce que ma mutuelle prend en charge ces interventions ?",
            answer: "La plupart des mutuelles couvrent ces interventions. Notre service administratif vous accompagne pour les démarches de prise en charge."
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