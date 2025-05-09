'use client'
import { useState } from "react";

export default function Prendre_rendez_vous_page(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      service:"",
      date: "",
      comment: "",
    });
    const sendEmail = async (e) => {
      e.preventDefault();
      setValidation(true);
      if (formData.fullName && formData.phone && formData.service && formData.date) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/prendre-rendez-vous", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log(response);
          if (response.status === 200) {
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                service:"",
                date: "",
                comment: "",
            });
            setValidation(false);
            setIsLoading(false);
          }
        } catch {
            setIsLoading(false);
        }
      }
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData,[name]: value,});
    };
    return(
        <div className="relative min-h-screen flex flex-col  justify-center items-center overflow-hidden   ">
            <div className="p-4">
                <div className="max-w-7xl  border-4 my-16  border-primary left-0 right-0 flex flex-col gap-4 items-center justify-center text-center p-6 py-10  container mx-auto bg-background rounded-4xl shadow-2xl z-10  ">
                    <h1 className=" text-4xl font-chillax font-bold text-white uppercase">Réservez en quelques clics</h1>
                    <p className=" text-center text-white font-chillax">Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre rendez-vous.</p>
                    <form onSubmit={sendEmail} className=" flex flex-col lg:flex-row justify-center items-center gap-10 w-full ">
                        <div className=" flex flex-col items-start gap-4 w-full">
                            <div className=" flex flex-col lg:flex-row justify-between items-center gap-4 w-full">
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}  className={` ${!formData.fullName && validation && "border-red-500 placeholder:text-red-500 "} border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax`} placeholder="Nom complet" />
                                <input type="text" name="email" value={formData.email} onChange={handleInputChange}  className={`border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax`} placeholder="Email"/>
                            </div>
                            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange}  className={` ${!formData.phone && validation && "border-red-500 placeholder:text-red-500 "} border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax`} placeholder="Numéro de téléphone"/>
                            <div className=" flex flex-col lg:flex-row justify-between items-center gap-4 w-full">
                                <select name="service" value={formData.service} onChange={handleInputChange}  className={` ${!formData.service && validation && "border-red-500 placeholder:text-red-500 "}  border-2 border-primary w-full h-12 rounded-4xl px-6 text-white font-chillax  bg-background`}>
                                    <option value="" selected>Select Service</option>
                                    <option value="Chirurgie">Chirurgie</option>
                                    <option value="Cardiologie et Rythmologie">Cardiologie et Rythmologie</option>
                                    <option value="Pneumologie">Pneumologie</option>
                                    <option value="Traumatologie et Orthopédie">Traumatologie et Orthopédie</option>
                                    <option value="Radiologie et Imagerie">Radiologie et Imagerie</option>
                                    <option value="Cardiologie interventionnelle & chirurgie cardiovasculaire">Cardiologie interventionnelle & chirurgie cardiovasculaire</option>
                                    <option value="Autre">Autre ..</option>
                                </select>
                                <input onChange={handleInputChange} value={formData.date} type="date" name="date" className={` ${!formData.date && validation && "border-red-500 placeholder:text-red-500 "} border-2 border-primary w-full h-12 rounded-4xl px-6 text-white font-chillax`} placeholder="Date et heure souhaitées"/>
                            </div>
                            <textarea onChange={handleInputChange} value={formData.comment} rows={6} className=" border-2 border-primary w-full  rounded-4xl p-6 text-white placeholder:text-white font-chillax" placeholder="Commentaire" name="comment"></textarea>
                            <button disabled={isLoading} type="submit" className=" cursor-pointer duration-700 bg-primary hover:bg-white hover:text-primary text-white py-4 w-full rounded-full font-chillax font-medium   ">{isLoading? "Envoi en cours...": "Envoyer ma demande"}</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}