'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
      {
        "question": "Quels types de soins offrez-vous pour les os et articulations ?",
        "answer": "Nous proposons une large gamme de traitements, notamment la rééducation articulaire et orthopédique, les injections articulaires, la chirurgie orthopédique, le traitement des douleurs chroniques et les thérapies manuelles."
      },
      {
        "question": "Comment savoir si je suis éligible à un traitement chirurgical ?",
        "answer": "Un diagnostic complet sera réalisé par nos spécialistes en orthopédie. Si nécessaire, nous procéderons à des examens pour déterminer si une intervention chirurgicale est requise, en fonction de la gravité de votre condition."
      },
      {
        "question": "Quelles sont les options pour le traitement des douleurs chroniques ?",
        "answer": "Nous proposons plusieurs options pour traiter les douleurs chroniques, notamment les injections de corticoïdes, les traitements à l'hyaluronique, ainsi que des séances de physiothérapie et de thérapies manuelles pour soulager les douleurs articulaires."
      },
      {
        "question": "Est-ce que la chirurgie pour les fractures est douloureuse ?",
        "answer": "Nos chirurgiens utilisent les techniques les plus avancées pour minimiser la douleur pendant et après la chirurgie. Nous proposons également un suivi post-opératoire pour garantir une récupération rapide et confortable."
      },
      {
        "question": "Combien de temps dure le rétablissement après une opération ?",
        "answer": "Le temps de rétablissement dépend du type de chirurgie réalisée. En général, une période de rééducation est nécessaire pour restaurer la mobilité et la force. Nos spécialistes vous guideront à chaque étape pour accélérer la récupération."
      },
      {
        "question": "Puis-je obtenir un suivi après mon traitement ou chirurgie ?",
        "answer": "Oui, nous offrons un suivi personnalisé après tout traitement ou intervention chirurgicale, avec des rendez-vous réguliers pour suivre votre progrès et adapter les soins si nécessaire."
      },
      {
        "question": "Quels types d'examens sont nécessaires avant le traitement ?",
        "answer": "Avant tout traitement, nous réalisons des examens cliniques et diagnostiques tels que des radiographies, des échographies ou des scanners pour établir un diagnostic précis et choisir le traitement le plus adapté."
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