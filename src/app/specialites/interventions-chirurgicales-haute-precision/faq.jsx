'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
      {
        "question": "Qu'est-ce que la chirurgie robotique ?",
        "answer": "La chirurgie robotique est une technique chirurgicale qui utilise des robots pour effectuer des interventions avec une grande précision. Le chirurgien contrôle les robots à l'aide d'un système informatique, ce qui permet des incisions plus petites et une récupération plus rapide."
      },
      {
        "question": "Quels sont les avantages de la chirurgie de haute précision ?",
        "answer": "La chirurgie de haute précision réduit les risques de complications, minimise la douleur post-opératoire et accélère la récupération. Elle permet également des incisions plus petites, réduisant ainsi le temps passé en chirurgie et la durée de l'hospitalisation."
      },
      {
        "question": "Quels types de chirurgies pratiquons-nous ?",
        "answer": "Nous pratiquons diverses chirurgies, y compris la chirurgie cardiaque, orthopédique, neurochirurgicale, oncologique, et d'autres interventions complexes, toutes réalisées avec des technologies de pointe pour garantir des résultats optimaux."
      },
      {
        "question": "La chirurgie robotique est-elle adaptée à tous les patients ?",
        "answer": "La chirurgie robotique est adaptée à de nombreux patients, mais elle peut ne pas convenir à tous les types d'interventions ou à certains patients en fonction de leur état de santé. Nous évaluons chaque cas individuellement pour déterminer si cette méthode est la plus appropriée."
      },
      {
        "question": "Combien de temps dure la récupération après une chirurgie de haute précision ?",
        "answer": "La durée de la récupération varie en fonction du type d'intervention et de la santé générale du patient. Cependant, les techniques de haute précision permettent généralement une récupération plus rapide et moins douloureuse qu'avec les méthodes chirurgicales traditionnelles."
      },
      {
        "question": "Est-ce que la chirurgie de haute précision est plus coûteuse ?",
        "answer": "Les coûts peuvent être plus élevés en raison de l'utilisation de technologies avancées, mais les bénéfices d'une chirurgie plus sûre, moins invasive et avec une récupération plus rapide peuvent compenser ces coûts supplémentaires."
      },
      {
        "question": "Dois-je suivre un traitement particulier après l'intervention ?",
        "answer": "Après une intervention, des soins post-opératoires spécifiques peuvent être nécessaires pour garantir une guérison rapide et éviter les complications. Nos équipes vous fourniront des instructions claires sur les soins à suivre après votre chirurgie."
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