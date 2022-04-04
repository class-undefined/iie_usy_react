import "./module.scss"
interface CardFlipWrap {
    className?: string,
    front: JSX.Element,
    back: JSX.Element,
}

export const CardFlipWrap = (props: CardFlipWrap) => {
    const className = props.className ? "card-flip-container " + props.className : "card-flip-container"
    const { front, back } = props
    return (
        <div className={className}>
            <div className="card-flip-content">
                <div className="card-flip-front">
                    {front}
                </div>
                <div className="card-flip-back">
                    {back}
                </div>
            </div>
        </div>
    )
}