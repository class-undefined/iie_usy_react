import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Thumb/EmblaCarouselThumb";
import "./Carousel.scss";
import { CarouselImage, CarouselItem } from "./CarouselItem/CarouselItem";

interface EmblaCarouselProps {
    images: CarouselImage[]
}

const options = { loop: true, speed: 15 }
const scrollProgressShow = "embla__progress__container"
const scrollProgressHidden = "embla__progress__container embla__progress__container__hidden"
export const EmblaCarousel = (props: EmblaCarouselProps) => {
    const { images } = props
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollProgressClassName, setScrollProgressClassName] = useState(scrollProgressShow)
    useEmblaCarousel.globalOptions = options
    const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true
    });

    const onThumbClick = useCallback(
        (index) => {
            console.log(!embla, !emblaThumbs)
            if (!embla || !emblaThumbs) return;
            if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
        },
        [embla, emblaThumbs]
    );

    const onScroll = useCallback(() => {
        if (!embla) return
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [embla, setScrollProgress])

    const onSelect = useCallback(() => {
        if (!embla || !emblaThumbs) return
        setSelectedIndex(embla.selectedScrollSnap())
        setScrollProgressClassName(scrollProgressShow)
        emblaThumbs.scrollTo(embla.selectedScrollSnap())

    }, [embla, emblaThumbs, setSelectedIndex])

    const onSettle = useCallback(() => {
        if (!embla || !emblaThumbs) return
        setScrollProgressClassName(scrollProgressHidden)
    }, [embla])


    useEffect(() => {
        if (!embla) return
        onSelect()
        onScroll()
        onSettle()
        embla.on("select", onSelect)
        embla.on("scroll", onScroll)
        embla.on("settle", onSettle)
    }, [embla, onSelect, onScroll, onSettle])

    return (
        <>
            <div className="embla carousel-container">
                <div className="embla__viewport" ref={mainViewportRef}>
                    <div className="embla__container">
                        {images.map((image) => (
                            <CarouselItem {...image} key={image.src} />
                        ))}
                    </div>
                </div>
                <div className={scrollProgressClassName}>
                    <div className="embla__progress">
                        <div
                            className="embla__progress__bar"
                            style={{ transform: `translateX(${scrollProgress}%)` }}
                        />
                    </div>
                </div>
            </div>


            <div className="embla embla--thumb">
                <div className="embla__viewport" ref={thumbViewportRef}>
                    <div className="embla__container embla__container--thumb">
                        {images.map((image, index) => (
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                imgSrc={image.src}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmblaCarousel;
