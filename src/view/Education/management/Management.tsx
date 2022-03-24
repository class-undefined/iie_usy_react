import { KCardList } from "../../../components/KCard/KCardList"
import { KCardListItem, KCardListItemDefaultFoot } from "../../../components/KCard/KCardListItem/KCardListItem"
const data = [
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23"
    }
]
export const Management = () => {

    return (
        <div>
            <KCardList>
                {
                    data.map((item, index) => {
                        const { src, title, pv, time } = item
                        return <KCardListItem key={index} src={src} title={title} foot={<KCardListItemDefaultFoot pv={pv} time={time} />} />
                    })
                }
            </KCardList>
        </div>
    )
}