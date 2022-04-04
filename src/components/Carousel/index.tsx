import { useEffect, useState } from "react"
import { loadImage } from "../../utils"
import EmblaCarousel from "./Carousel"
import { CarouselImage } from "./CarouselItem/CarouselItem"
import { CarouselSkeleton } from "./CarouselSkeleton"

interface CarouselProps {
    images: CarouselImage[]
}


const CarouselSwitch = (props: CarouselProps) => {
    const { images } = props
    const [Component, setComponent] = useState(<CarouselSkeleton />)
    const loadSource = () => {
        const sources = images.map(img => loadImage(img.src))
        return Promise.all(sources)
    }

    useEffect(() => {
        loadSource().then(_ => setComponent(<EmblaCarousel {...props} />))
    }, [])
    return Component
}

export default CarouselSwitch