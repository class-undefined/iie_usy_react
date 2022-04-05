import "./module.scss"
interface CardFlipWrap {
    className?: string,
    front: JSX.Element,
    back: JSX.Element,
    width: string | number,
    height: string | number,
}

export const CardFlipWrap = (props: CardFlipWrap) => {
    const className = props.className ? "card-flip-container " + props.className : "card-flip-container"
    const { front, back, width, height } = props
    return (
        <div style={{ position: "relative", width, height }}>
            <div className={className} style={{ width, height }}>
                <div className="card-flip-content">
                    <div className="card-flip-front" >
                        {front}
                    </div>
                    <div className="card-flip-back" >
                        {back}
                    </div>
                </div>
            </div>
        </div>
    )
}