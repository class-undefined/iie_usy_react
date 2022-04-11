import { useEffect, useState } from "react"
import { getInfoDate } from "../../../api/Info/structure"
import { Article } from "../../../components/Article"
import { INullArticle } from "../../../type/article"
import { StatusCode } from "../../../utils/api/response/type"
import Notify from "../../../utils/Notify"

export const Structure = () => {
    const [article, setArticle] = useState(INullArticle)
    useEffect(() => {
        getInfoDate().then(response => {
            const { code, data } = response
            if (code != StatusCode.SUCCESS) {
                Notify.error("获取数据失败，请刷新重试～")
                return
            }
            const { article } = data
            setArticle(article)
        })
    }, [article !== INullArticle])
    return (
        <div>
            <Article className='introduction-article' loading={article === INullArticle} article={article} />
        </div>
    )
}