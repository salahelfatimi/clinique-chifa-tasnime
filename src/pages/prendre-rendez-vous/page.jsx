export default function Prendre_rendez_vous_page(){
    return(
        <div className="relative min-h-screen flex flex-col  justify-center items-center overflow-hidden   ">
            <div className="p-4">
                <form className="max-w-7xl  border-4 my-16  border-primary left-0 right-0 flex flex-col gap-4 items-center justify-center text-center p-6 py-10  container mx-auto bg-background rounded-4xl shadow-2xl z-10  ">
                    <h1 className=" text-4xl font-chillax font-bold text-white uppercase">Réservez en quelques clics</h1>
                    <p className=" text-center text-white font-chillax">Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre rendez-vous.</p>
                    <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 w-full ">
                        <div className=" flex flex-col items-start gap-4 w-full">
                            <div className=" flex flex-col lg:flex-row justify-between items-center gap-4 w-full">
                                <input type="text" name="fullName" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="Nom complet" />
                                <input type="text" name="email" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="Email"/>
                            </div>
                            <input type="text" name="phone" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="Numéro de téléphone"/>
                            <input type="email" name="email" id="" className=" border-2 border-primary w-full h-12 rounded-4xl pl-6 placeholder:text-white font-chillax" placeholder="E-mail"/>
                            <div className=" flex flex-col lg:flex-row justify-between items-center gap-4 w-full">
                                <select name="" id="" className=" border-2 border-primary w-full h-12 rounded-4xl px-6 text-white font-chillax  bg-background">
                                    <option value="" selected>Select Service</option>
                                    <option value="Chirurgie">Chirurgie</option>
                                    <option value="Cardiologie et Rythmologie">Cardiologie et Rythmologie</option>
                                    <option value="Pneumologie">Pneumologie</option>
                                    <option value="Traumatologie et Orthopédie">Traumatologie et Orthopédie</option>
                                    <option value="Radiologie et Imagerie">Radiologie et Imagerie</option>
                                    <option value="Cardiologie interventionnelle & chirurgie cardiovasculaire">Cardiologie interventionnelle & chirurgie cardiovasculaire</option>
                                    <option value="Autre">Autre ..</option>



                                </select>
                                <input type="date" name="date" id="" className=" border-2 border-primary w-full h-12 rounded-4xl px-6 text-white font-chillax" placeholder="Date et heure souhaitées"/>
                            </div>
                            <textarea  rows={6} className=" border-2 border-primary w-full  rounded-4xl p-6 placeholder:text-white font-chillax" placeholder="Commentaire" name="" id=""></textarea>
                            <button type="submit" className=" bg-primary text-white py-4 w-full rounded-full font-chillax  ">Envoyer ma demande</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}