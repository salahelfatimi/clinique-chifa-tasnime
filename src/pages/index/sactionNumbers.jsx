"use client";
import CountUp from "react-countup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SactionNumbers() {
    const [counterOn, setCounterOn] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once when the element comes into view
        onChange: (inView) => setCounterOn(inView),
    });

    return (
        <div ref={ref} className="bg-background">
            <div className="py-10 px-10 container mx-auto">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-6xl font-zodiak text-white uppercase">
                        Nos chiffres clés
                    </h2>
                    <p className="text-white  font-chillax mt-2">
                        Découvrez les statistiques qui reflètent notre engagement envers la santé et le bien-être.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 text-center">
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-chillax lg:text-2xl font-medium uppercase">Patients soignés chaque année</h2>
                        <p className="font-zodiak text-4xl lg:text-6xl">
                            {counterOn ? <CountUp duration={10} start={1} end={10000} suffix=" +" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-chillax lg:text-2xl font-medium uppercase">Spécialités médicales disponibles</h2>
                        <p className="font-zodiak text-4xl lg:text-6xl">
                            {counterOn ? <CountUp duration={10} start={1} end={25} suffix=" +" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-chillax lg:text-2xl font-medium uppercase">Professionnels de santé qualifiés</h2>
                        <p className="font-zodiak text-4xl lg:text-6xl">
                            {counterOn ? <CountUp duration={10} start={1} end={80} suffix=" +" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                        <h2 className="font-chillax lg:text-2xl font-medium uppercase">Urgences médicales disponibles</h2>
                        <p className="font-zodiak text-4xl lg:text-6xl">24/7j</p>
                    </div>
                </div>
            </div>
        </div>
    );
}