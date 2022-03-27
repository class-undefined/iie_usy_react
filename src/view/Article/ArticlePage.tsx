import Box from "@mui/system/Box/Box"
import { useEffect, useState } from "react"
import { Redirect, useHistory, useLocation } from "react-router-dom"
import { getArticleById } from "../../api/article"
import { Article } from "../../components/Article"
import { IArticle } from "../../type/article"
import { StatusCode } from "../../utils/api/response/type"
import Notify from "../../utils/Notify"

export const ArticlePage = () => {
    const history = useHistory()
    const param = new URLSearchParams(history.location.search)
    const id = param.get("id")
    const [article, setArticle] = useState<IArticle | null>(null)
    useEffect(() => {
        if (!id) {
            history.push("/404")
            return
        }
        getArticleById(id).then(res => {
            const { code, message, data } = res
            if (code !== StatusCode.SUCCESS) {
                Notify.error(message || "errors")
            } else setArticle(data.article as IArticle)
        }).catch(e => Notify.error("请求错误!"))
    }, [id])

    return (
        <Article article={article || {} as IArticle} loading={!article} />
    )
}