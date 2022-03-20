import { BreadCrumbs } from "../NavBar/components/BreadCrumbs/BreadCrumbs"
import "./MetaTag.scss"
interface MetaTagProps {
    className?: string,
}
export const MetaTag = (props: MetaTagProps) => {
    const className = props.className ? "meta-tag-container " + props.className : "meta-tag-container"
    return (
        <div className={className}>
            <div className="meta-tag-main">
                <BreadCrumbs />
            </div>
        </div>
    )
}