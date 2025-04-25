'use client'
import { ChevronLeft, Rewind } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton(){
    const router=useRouter()
    return(
        <button onClick={()=>(router.back())} className=" fixed border-2 border-white cursor-pointer flex items-center justify-center bottom-4 gap-2 left-4 px-4 z-[50] bg-primary h-fit w-fit p-2 rounded-full">
            <Rewind size={30} className="stroke-white" />     <span className=" text-white font-chillax text-lg font-medium">Retour</span>       
        </button>
    )
}