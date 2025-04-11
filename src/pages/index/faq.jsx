'use client'
import { useState } from "react";
export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const faqData = [
        {
            question: "Quels sont les services proposés par la clinique ?",
            answer: "Nous offrons une large gamme de services médicaux et chirurgicaux, notamment la cardiologie interventionnelle, la chirurgie cardiovasculaire, la gynécologie, la pédiatrie, l’imagerie médicale, et bien plus."
        },
        {
            question: "Comment puis-je prendre rendez-vous ?",
            answer: "Vous pouvez prendre rendez-vous directement sur notre site web via la page 'Prendre rendez-vous', par téléphone ou en vous rendant sur place."
        },
        {
            question: "Acceptez-vous les assurances santé ?",
            answer: "Oui, nous travaillons en partenariat avec plusieurs compagnies d’assurance santé. Veuillez nous contacter pour vérifier si la vôtre est acceptée."
        },
        {
            question: "La clinique est-elle ouverte 24h/24 ?",
            answer: "Oui, notre service d’urgences est disponible 24h/24 et 7j/7. Pour les autres services, veuillez consulter nos horaires d’ouverture."
        },
        {
            question: "Quels sont les délais pour obtenir un rendez-vous ?",
            answer: "Les délais varient en fonction de la spécialité. Nous faisons le maximum pour vous proposer un rendez-vous dans les meilleurs délais."
        },
        {
            question: "Où se trouve la clinique ?",
            answer: "La Clinique Chifa Tasnime est idéalement située [ajouter l’adresse ici]. Vous pouvez nous localiser facilement via Google Maps."
        },
        {
            question: "Puis-je consulter un spécialiste sans ordonnance ?",
            answer: "Oui, il est possible de consulter certains spécialistes directement. Pour plus d’informations, contactez notre service d’accueil."
        },
        {
            question: "Proposez-vous des services pour les enfants ?",
            answer: "Oui, notre service de pédiatrie prend en charge les enfants de tous âges avec une approche douce et spécialisée."
        }
    ];
    return(
        <div className="bg-background py-6">
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