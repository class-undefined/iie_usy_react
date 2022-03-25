import { useHistory } from "react-router-dom"
import { KCardList } from "../../../components/KCard/KCardList"
import { KCardListItem, KCardListItemDefaultFoot } from "../../../components/KCard/KCardListItem/KCardListItem"

const data = [
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "123"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "1234"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "1235"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "1236"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "1237"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "1238"
    },
    {
        src: "http://iie.sanyau.edu.cn/Public/images/teaching.jpg",
        title: "标个题",
        pv: 200,
        time: "2022/3/23",
        articleId: "1239"
    }
] as { src: string, title: string, pv: number, time: string, articleId: string }[]
export const Management = () => {
    const history = useHistory()
    const onClickHandle = (path: string, articleId: string) => {
        console.log(path + "?articleId=" + articleId)
        history.push(path + "?articleId=" + articleId)
    }
    return (
        <div>
            <KCardList>
                {
                    data.map((item, index) => {
                        const { src, title, pv, time, articleId } = item
                        return <KCardListItem onClick={() => onClickHandle("/education/management", articleId)} key={index} src={src} title={title} foot={<KCardListItemDefaultFoot pv={pv} time={time} />} />
                    })
                }
            </KCardList>
        </div>
    )
}