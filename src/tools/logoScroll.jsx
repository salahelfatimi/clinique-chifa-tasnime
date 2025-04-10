"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default  function LogoScroll() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.3 }),
  ]);
  const images = [
    { image: "1.png", title: "Grohe" },
    { image: "2.png", title: "Schneider Electric" },
    { image: "3.png", title: "Atlantic" },
    { image: "4.png", title: "Daikin" },
    { image: "5.png", title: "BigMat" },
    { image: "6.png", title: "Castorama" },  
    { image: "7.png", title: "Daikin Point.P " },
    { image: "8.png", title: "Leroy Merlin " },
    { image: "9.png", title: "Saint-Gobain " },
    { image: "10.png", title: "Velux" } ,
    { image: "11.png", title: "Villeroy & Boch" },
    { image: "12.png", title: "Wavin" },
    { image: "13.png", title: "Roca" },
    { image: "14.png", title: "Soudal" },
    { image: "15.png", title: "Viega" },
    { image: "16.png", title: "Fischer" },
    { image: "17.png", title: "Geberit" },
    { image: "18.png", title: "Ideal Standard" },
    { image: "19.png", title: "Kaldewei" },
    { image: "20.png", title: "Hansgrohe" },
    { image: "21.png", title: "Ariston" },
    { image: "22.png", title: "Cedeo" },
    { image: "23.png", title: "BWT" },
    { image: "24.png", title: "SFA" },
    { image: "25.png", title: "Thermor" },
    { image: "26.png", title: "Teka" },
    { image: "27.png", title: "Viega" },
    { image: "28.png", title: "Wavin" },
    { image: "29.png", title: "Zehnder" },
    { image: "30.png", title: "Zehnder" },
    { image: "31.png", title: "Zehnder" },
    { image: "32.png", title: "Zehnder" },
    { image: "33.png", title: "Zehnder" },
    { image: "34.png", title: "Zehnder" },
    { image: "35.png", title: "Zehnder" },
    { image: "36.png", title: "Zehnder" },
    { image: "37.png", title: "Zehnder" },
    { image: "38.png", title: "Zehnder" },
    { image: "39.png", title: "Zehnder" },
    { image: "40.png", title: "Zehnder" },
    { image: "41.png", title: "Zehnder" },
    { image: "42.png", title: "Zehnder" },
  ];

  return (
    <div className=" py-10">
      <h2 className=" text-3xl lg:text-6xl  mb-4 font-zodiak text-background uppercase text-center"><span className=" text-primary">Nos</span> partenaires</h2>
      <div className=" w-full  mx-auto mt-10 cursor-grab active:cursor-grabbing">
        <div className="py-2 overflow-hidden" ref={emblaRef}>
          <div className="flex flex-row flex-nowrap gap-32 pl-32 ">        
            {images.map((src, index) => ( 
              <img width={600} height={300} src={`/img/index/logoScroll/${src.image}`} className=" select-none  max-w-none h-36 w-auto" alt="clinique chifa tasnime" title="clinique chifa tasnime" key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
}