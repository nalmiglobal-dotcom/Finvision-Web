"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const brands = [
  { type: 'text' as const, name: 'CMT Association' },
  { type: 'text' as const, name: 'SEBI' },
  { type: 'text' as const, name: 'Groww' },
  { type: 'image' as const, src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/icons/Angel-One_idGumGbsNV_1-5.png', alt: 'Angel One', width: 121, height: 26 },
  { type: 'text' as const, name: 'TTI' },
  { type: 'image' as const, src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/icons/INDIAMART_NS_BIG-6.png', alt: 'Indiamart', width: 121, height: 27 },
  { type: 'image' as const, src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/icons/9n32ekrut78ejpb1qlal7ao5of-7.png', alt: 'JustDial', width: 90, height: 39 },
  { type: 'text' as const, name: 'Sulekha' },
  { type: 'text' as const, name: 'ISO 9001' }
];

export default function TrustedBrands() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) return

    const scrollSnaps = api.scrollSnapList();
    setCount(scrollSnaps.length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
    
    api.on("resize", () => {
       setCount(api.scrollSnapList().length);
    });

  }, [api])

  return (
    <section className="relative overflow-hidden section-padding-y section-orange">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-10 left-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-center font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] gradient-text-orange glow-text-accent mb-12">
          Most Trusted Brand
        </h2>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {brands.concat(brands).map((brand, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-[14.28%]">
                <div className="p-4 h-20 flex items-center justify-center group glass-card rounded-xl hover-glow transition-all duration-300 glow-box-accent">
                  {brand.type === 'image' ? (
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={brand.width}
                      height={brand.height}
                      className="object-contain h-10 w-auto transition-all duration-300 brightness-0 invert opacity-70 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="text-center font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-accent text-sm">
                      {brand.name}
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex glass-card border-white/10 text-foreground hover:bg-white/10" />
          <CarouselNext className="hidden md:flex glass-card border-white/10 text-foreground hover:bg-white/10" />
        </Carousel>
        <div className="py-2 flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? 'bg-accent w-6 glow-box-accent' : 'bg-foreground/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
