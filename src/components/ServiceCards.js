import Image from "next/image"
import {Button} from "@/components/Button"
import { FaPhone } from "react-icons/fa";

export const ServiceCards = ({image, title, altText, text}) => {
    return (
        <section className="w-full h-auto border border-secondary-default rounded-2xl flex flex-col gap-y-3 p-2  ">
            <div className="h-[200px] relative">
                <Image 
                    src={image}
                    alt={altText}
                    fill
                    className="object-cover  rounded-t-2xl  "
                />
            </div>
            <div className="flex flex-col gap-y-4 p-6">
                <h3 className="text-xl font-semibold tracking-wide leading-loose">{title}</h3>
                <p className="text-sm text-copy ">{text}</p>
            </div>
            <div className="px-6">
                <Button 
                    text="Book our service" 
                    className ="w-full md:w-2/4 p-4 rounded-3xl mb-4 border-[1px] border-secondary-default  relative overflow-hidden group bg-white"
                    Icon = {FaPhone}
                />
            </div>
        </section>
    )
}