import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getArticleCardDesc } from "../../../api/education/management"
import { KCardList } from "../../../components/KCard/KCardList"
import { KCardListItem, KCardListItemDefaultFoot } from "../../../components/KCard/KCardListItem/KCardListItem"
import { Loading } from "../../../components/Loading/Loading"
import { Response, StatusCode } from "../../../utils/api/response/type"
import Notify from "../../../utils/Notify"




export const Management = () => {
    const history = useHistory()
    const param = new URLSearchParams(history.location.search)
    const pageIndex = parseInt(param.get("page") || "1")
    const onClickHandle = (path: string, articleId: string) => {
        console.log(path + "?articleId=" + articleId)
        history.push(path + "?articleId=" + articleId)
    }
    const [page, setPage] = useState([] as { src: string, title: string, pv: number, time: string, articleId: string }[])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getArticleCardDesc(pageIndex).then(res => {
            const response = res
            const { code, message, data } = response
            if (code !== StatusCode.SUCCESS) Notify.error(message || "请求错误")
            else setPage(data.page)
            setLoading(false)
        }).catch(e => setLoading(false))
    }, [pageIndex, loading])
    return (
        <div>
            {loading ? <Loading isLoading={loading} color="#3884ff" height={"400px"} /> : <KCardList>
                {
                    page.map((item, index) => {
                        const { src, title, pv, time, articleId } = item
                        return <KCardListItem onClick={() => onClickHandle("/education/management", articleId)} key={index} src={src} title={title} foot={<KCardListItemDefaultFoot pv={pv} time={time} />} />
                    })
                }
            </KCardList>}

        </div>
    )
}