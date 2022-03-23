import "./KCardList.scss"
interface KCardListProps {
    className?: string,
    children?: JSX.Element[]
}

const defalutProps = {
    className: "k-card-list-container"
}

export interface ContentCard {
    src: string,

}

export const KCardList = (props: KCardListProps) => {
    const rootClass = props.className ? defalutProps.className + " " + props.className : defalutProps.className
    const { children } = props
    return (
        <div className={rootClass}>
            {children}
        </div>
    )
} 