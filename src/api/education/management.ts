import { Response } from "../../utils/api/response/type"
import { service } from "../../utils/api/service/service"

export const getArticleCardDesc = (page: number) => {
    // https://console-mock.apipost.cn/app/mock/project/8668987d-5730-467c-86d1-52bf09e9d76a/education/management
    return service({
        url: "/getArticleCardDesc",
        method: "POST",
        data: { page }
    }) as unknown as Promise<Response>
}