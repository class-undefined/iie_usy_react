import { useEffect, useState } from "react"
import { loadImage } from "../../../utils"
import Notify from "../../../utils/Notify"
import { ImageLoading } from "../../ImageLoading/ImageLoading"
import "../Carousel.scss"
export interface CarouselImage {
    title: string,
    desc?: string,
    src: string,
    href: string,
}

interface CarouselItemProps extends CarouselImage {
}

export const CarouselItem = (props: CarouselItemProps) => {
    const { src } = props
    const desc = props.desc || ""
    const Loading = <ImageLoading className="embla__slide__inner" width={"100%"} height={220} />
    const Self = (
        <div className="embla__slide__inner">
            <img
                className="embla__slide__img"
                src={src}
                alt={desc}
            />
        </div>
    )
    const [ImageCard, setImageCard] = useState(Loading)
    useEffect(() => {
        loadImage(src).then(_ => {
            setImageCard(Self)
        }).catch(e => Notify.error(e))
    }, [ImageCard])
    return (
        <div className="embla__slide">
            {ImageCard}
        </div>
    )
}