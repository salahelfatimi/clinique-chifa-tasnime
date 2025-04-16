import Image from "next/image";

export default function Loading() {
    return (
      <>
        <div className=" container flex flex-col gap-10 items-center justify-center  h-screen  bg-background   inset-0 ">
          <Image src={'/img/logo_text_white.png'} className="w-44" width={500} height={500}/>
        </div>
      </>
    );
  }