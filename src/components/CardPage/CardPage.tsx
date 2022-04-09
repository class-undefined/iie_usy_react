import Box from "@mui/material/Box/Box"
import Pagination from "@mui/material/Pagination/Pagination"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Response, StatusCode } from "../../utils/api/response/type"
import Notify from "../../utils/Notify"
import { KCardList } from "../KCard/KCardList"
import { KCardListItem, KCardListItemDefaultFoot } from "../KCard/KCardListItem/KCardListItem"
import { Loading } from "../Loading/Loading"
export interface CardPageProps {
    className?: string,
    callback: (page: number) => Promise<Response>,

}
export const CardPage: React.FC<CardPageProps> = (props: CardPageProps) => {
    const { callback } = props
    const history = useHistory()
    const param = new URLSearchParams(history.location.search)
    const pageIndex = parseInt(param.get("page") || "1")
    const [page, setPage] = useState([] as { src: string, title: string, pv: number, time: string, articleId: string }[])
    const [size, setSize] = useState(1) // 总页数
    const [loading, setLoading] = useState(true)
    const onClickHandle = (articleId: string) => {
        history.push("/article" + "?id=" + articleId)
    }
    const pageSelected = (event: React.ChangeEvent<unknown>, _page: number) => {
        const path = `?page=${_page}`
        history.push(path)
    }
    useEffect(() => {
        callback(pageIndex).then(res => {
            const response = res
            const { code, message, data } = response
            if (code !== StatusCode.SUCCESS) Notify.error(message || "请求错误")
            else {
                setPage(data.page)
                setSize(data.size)
            }
            console.log(data)
            setLoading(false)
        }).catch(e => setLoading(false))
    }, [pageIndex, loading])
    return (
        <Box>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {loading ? <Loading isLoading={loading} color="#3884ff" height={"400px"} /> : <KCardList>
                    {
                        page.map((item, index) => {
                            const { src, title, pv, time, articleId } = item
                            return <KCardListItem onClick={() => onClickHandle(articleId)} key={index} src={src} title={title} foot={<KCardListItemDefaultFoot pv={pv} time={time} />} />
                        })
                    }
                </KCardList>}
            </div>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Pagination onChange={pageSelected} count={size} page={pageIndex} showFirstButton showLastButton />
            </Box>
        </Box>
    )
}

/**
 * 方便路由注入的高阶组件CardPage
 * @param callback 获取数据的api
 * @returns 返回注入callback的CardPage组件
 */
export const CardPageHoc = (callback: (page: number) => Promise<Response>): React.FC => {
    return () => <CardPage callback={callback} />
}