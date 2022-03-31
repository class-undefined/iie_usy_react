import { useEffect, useState } from "react";
import { loadImage } from "../../../utils";
import Notify from "../../../utils/Notify";
import { ImageLoading } from "../../ImageLoading/ImageLoading";
import "../Carousel.scss"
export const Thumb = ({ selected, onClick, imgSrc }: { selected: boolean, onClick: () => void, imgSrc: string }) => {
    const Loading = <ImageLoading width={"100%"} height={100} />
    const Self = (
        <button
            onClick={onClick}
            className="embla__slide__inner embla__slide__inner--thumb thumb-btn"
            type="button"
        >
            <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
        </button>
    )
    const [ImageCard, setImageCard] = useState(Loading)
    useEffect(() => {
        loadImage(imgSrc).then(_ => {
            setImageCard(Self)
        }).catch(e => Notify.error(e))
    }, [ImageCard])
    return (
        <div
            className={`embla__slide embla__slide--thumb ${selected ? "is-selected" : ""
                }`}
        >
            {ImageCard}
        </div>
    );
}
