'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
      {
        "question": "Quels types de maladies cardiaques traitez-vous ?",
        "answer": "Nous traitons une large gamme de maladies cardiaques, telles que l'hypertension, l'insuffisance cardiaque, les maladies coronariennes, les troubles du rythme cardiaque, et d'autres pathologies cardiovasculaires."
      },
      {
        "question": "Qu'est-ce qu'un électrocardiogramme (ECG) et à quoi sert-il ?",
        "answer": "L'ECG est un test qui enregistre l'activité électrique du cœur. Il permet de détecter des troubles du rythme cardiaque, des signes d'infarctus ou d'autres problèmes cardiaques."
      },
      {
        "question": "Qu'est-ce qu'un test d'effort et pourquoi est-il nécessaire ?",
        "answer": "Le test d'effort consiste à mesurer la réponse de votre cœur à l'exercice physique. Il permet d'évaluer la fonction cardiaque et de détecter des anomalies, notamment des signes de maladie coronarienne."
      },
      {
        "question": "Comment se passe une échographie cardiaque ?",
        "answer": "L'échographie cardiaque est un examen non invasif qui utilise des ondes sonores pour créer des images du cœur. Cela permet de visualiser les structures cardiaques, d'évaluer la fonction du cœur et de détecter des anomalies."
      },
      {
        "question": "Qu'est-ce qu'un Holter cardiaque et quand est-il utilisé ?",
        "answer": "Le Holter cardiaque est un appareil portable qui enregistre l'activité électrique de votre cœur sur 24 à 48 heures. Il est utilisé pour surveiller les troubles du rythme cardiaque sur une période prolongée."
      },
      {
        "question": "Est-ce que la consultation cardiologique est douloureuse ?",
        "answer": "Non, la consultation en cardiologie ne provoque aucune douleur. Elle consiste en un entretien médical, un examen physique et éventuellement des tests pour évaluer la santé de votre cœur."
      },
      {
        "question": "Quels sont les traitements pour l'insuffisance cardiaque ?",
        "answer": "Les traitements pour l'insuffisance cardiaque peuvent inclure des médicaments, des dispositifs implantables, des interventions chirurgicales et des conseils sur le mode de vie pour améliorer la fonction cardiaque."
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