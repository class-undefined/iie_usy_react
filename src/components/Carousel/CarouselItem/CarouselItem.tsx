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
    return (
        <div className="embla__slide">
            <div className="embla__slide__inner">
                <img
                    className="embla__slide__img"
                    src={src}
                    alt={desc}
                />
            </div>
        </div>
    )
}