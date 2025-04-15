'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
      {
        question: "Le service d’urgence est-il vraiment ouvert 24h/24 et 7j/7 ?",
        answer: "Oui, notre service d’accueil des urgences est disponible en continu, tous les jours de l’année, y compris les week-ends et jours fériés."
      },
      {
        question: "Dois-je prendre rendez-vous pour venir aux urgences ?",
        answer: "Non, il n’est pas nécessaire de prendre rendez-vous. Vous pouvez vous présenter directement à notre service d’urgence à tout moment."
      },
      {
        question: "Quels types d’urgences prenez-vous en charge ?",
        answer: "Nous prenons en charge toutes les urgences médicales, chirurgicales, traumatiques, gynécologiques, pédiatriques et respiratoires."
      },
      {
        question: "Le service d’urgence dispose-t-il de matériel de diagnostic ?",
        answer: "Oui, nous disposons d’un plateau technique complet incluant radiologie, échographie, laboratoire d’analyses, monitoring, et bloc opératoire."
      },
      {
        question: "Puis-je venir pour une urgence pédiatrique ?",
        answer: "Oui, notre service d’urgence prend également en charge les enfants, avec une approche adaptée et sécurisée."
      },
      {
        question: "Comment puis-je contacter le service d’urgence avant de venir ?",
        answer: "Vous pouvez nous appeler au numéro d’urgence affiché sur notre site pour toute demande d’information ou orientation préalable."
      },
      {
        question: "Proposez-vous un service d’ambulance ?",
        answer: "Oui, nous pouvons organiser un transport médicalisé si nécessaire. Contactez-nous pour plus de détails."
      },
      {
        question: "Quelles sont les démarches à faire en arrivant aux urgences ?",
        answer: "Dès votre arrivée, vous serez accueilli par notre équipe de triage pour une évaluation rapide, suivie d’une orientation adaptée à votre situation."
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