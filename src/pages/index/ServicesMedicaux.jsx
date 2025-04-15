"use client";
import React, { useRef, useEffect, useState } from "react";
import { servicesMedicaux } from "@/app/data/servicesMedicaux";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function ServicesMedicaux() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setSlidesCount(emblaApi.slideNodes().length);
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="text-center w-full space-y-6 py-10 bg-background select-none">
      <h2 className="text-3xl lg:text-5xl mb-4 font-zodiak text-white uppercase">Des installations de classe mondiale</h2>
      <p className="px-4 font-chillax text-white text-sm lg:text-base">
        Nous sommes équipés de technologies de pointe et d'installations modernes pour garantir des diagnostics précis et des traitements efficaces.
      </p>
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {servicesMedicaux.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-full lg:max-w-7xl px-4">
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <div className="lg:w-1/2">
                  <Image src={service.image} alt={service.title} width={1920} height={1080} className="rounded-3xl h-96 object-cover" />
                </div>
                <div className="lg:w-1/2 text-left space-y-4 flex flex-col items-start justify-center min-h-96 gap-4 bg-white rounded-3xl shadow-lg p-6 py-4">
                  <h3 className="text-3xl text-background uppercase font-zodiak">{service.title}</h3>
                  <p className="text-gray-700 font-chillax">{service.description}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: slidesCount }).map((_, index) => (
          <button key={index} className={`w-3 h-3 rounded-full cursor-pointer ${index === selectedIndex ? "bg-white" : " border border-gray-500"}`} onClick={() => emblaApi && emblaApi.scrollTo(index)} />
        ))}
      </div>
    </div>
  );
}