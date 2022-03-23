import { KCardList } from "../../../components/KCard/KCardList"
import { KCardListItem, KCardListItemDefaultFoot } from "../../../components/KCard/KCardListItem/KCardListItem"

export const Management = () => {
    return (
        <div>
            <KCardList>
                <KCardListItem src={"http://iie.sanyau.edu.cn/Public/images/teaching.jpg"}
                    title="标个题"
                    foot={<KCardListItemDefaultFoot pv={200} time={"2022/3/23"} />}
                />
                <KCardListItem src={"http://iie.sanyau.edu.cn/Public/images/teaching.jpg"}
                    title="标个题"
                    foot={<KCardListItemDefaultFoot pv={200} time={"2022/3/23"} />}
                />
                <KCardListItem src={"http://iie.sanyau.edu.cn/Public/images/teaching.jpg"}
                    title="标个题"
                    foot={<KCardListItemDefaultFoot pv={200} time={"2022/3/23"} />}
                />
            </KCardList>
        </div>
    )
}