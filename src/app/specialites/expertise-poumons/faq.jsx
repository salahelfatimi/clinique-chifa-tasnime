'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
      {
        "question": "Quels types de maladies pulmonaires traitez-vous ?",
        "answer": "Nous traitons diverses affections pulmonaires, notamment l'asthme, la bronchopneumopathie chronique obstructive (BPCO), les infections pulmonaires, les maladies interstitielles pulmonaires, et les troubles respiratoires."
      },
      {
        "question": "Quels examens sont nécessaires pour diagnostiquer des troubles pulmonaires ?",
        "answer": "Nos pneumologues utilisent une combinaison de tests, y compris des radiographies, des scanners thoraciques, des tests de fonction pulmonaire (spirométrie), et des tests allergologiques pour établir un diagnostic précis."
      },
      {
        "question": "Qu'est-ce qu'un test de fonction pulmonaire et comment ça se passe ?",
        "answer": "Un test de fonction pulmonaire, comme la spirométrie, mesure la capacité de vos poumons à inhaler et expirer l'air. Cela permet de détecter des troubles comme l'asthme et la BPCO."
      },
      {
        "question": "Est-ce que la consultation pneumologique est douloureuse ?",
        "answer": "Non, la consultation pneumologique ne provoque aucune douleur. Elle consiste en un entretien avec un spécialiste, des examens physiques et, si nécessaire, des tests pour évaluer vos capacités respiratoires."
      },
      {
        "question": "Quelles sont les options de traitement pour les maladies pulmonaires chroniques ?",
        "answer": "Les traitements peuvent inclure des médicaments, des thérapies respiratoires, des inhalateurs, des exercices de rééducation pulmonaire, ainsi que des conseils sur la gestion du mode de vie et la prévention des crises."
      },
      {
        "question": "Puis-je être suivi à long terme pour une maladie pulmonaire ?",
        "answer": "Oui, nous offrons un suivi à long terme pour les patients souffrant de maladies pulmonaires chroniques. Cela inclut des consultations régulières et des ajustements de traitement en fonction de l'évolution de votre condition."
      },
      {
        "question": "Comment se préparer pour une radiographie ou un scanner thoracique ?",
        "answer": "Les préparations sont généralement simples. Il est important de porter des vêtements sans métal et de suivre les instructions spécifiques de notre équipe pour chaque type d'examen."
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