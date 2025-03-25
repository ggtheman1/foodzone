'use client'

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function HomeCarousel({
items,
}:{
    items:{
        title: string,
        buttonCaption: string,
        image: string,
        url: string,
        isPublished: boolean
    }[]
}){
    const plugin=useRef(
        Autoplay({delay:3000, stopOnInteraction:true}),
    )
    return(
    <Carousel
    dir="ltr"
    plugins={[plugin.current]}
    className="w-full mx-auto"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}>
        <CarouselContent>
            {items.map((item) =>(
               <CarouselItem key={item.title}>
                   <div className="flex aspect[16/16] items-center justify-center p-6 relative -m-1">
                       <Image
                           src={item.image}
                           alt={item.title}
                           fill
                           priority
                           className="object-cover"
                       />
                       <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2">
                             <h2 className={cn('text-xl md:text-6xl font-bold mb-4 text-primary')}>
                                {item.title}
                             </h2>
                             <Button className="hidden md:block">
                                {item.buttonCaption}
                             </Button>
                       </div>
                   </div>
               </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext className="left-0 md:left-12"/>
        <CarouselPrevious className="right-0 md:right-12"/>
    </Carousel>
)
} 