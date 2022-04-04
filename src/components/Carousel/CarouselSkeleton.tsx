import Skeleton from "@mui/material/Skeleton/Skeleton"
import "./Carousel.scss"
export const CarouselSkeleton = () => {
    const tmp = new Array(4).fill(0)
    return (
        <div style={{ height: "375px", verticalAlign: "none" }}>
            <div className="embla carousel-container">
                {/* <div className="" style={{ height: "260px" }}> */}
                <Skeleton animation="wave" height={220} style={{ transform: "none" }} />
                {/* </div> */}
            </div>
            <div className="embla embla--thumb">
                <div style={{ marginTop: "40px", overflow: "hidden", height: "90px" }}>
                    {tmp.map((_, index) => {
                        return (
                            <Skeleton style={{ display: "inline-block", marginRight: "45px", transform: "none", float: "left" }} key={index} animation="wave" width={140} height={90} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
