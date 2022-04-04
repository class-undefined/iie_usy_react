import "../Carousel.scss"
export const Thumb = ({ selected, onClick, imgSrc }: { selected: boolean, onClick: () => void, imgSrc: string }) => {
    return (
        <div
            className={`embla__slide embla__slide--thumb ${selected ? "is-selected" : ""
                }`}
        >
            <button
                onClick={onClick}
                className="embla__slide__inner embla__slide__inner--thumb thumb-btn"
                type="button"
            >
                <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
            </button>
        </div>
    );
}
