import { Response } from "../utils/api/response/type";
import { service } from "../utils/api/service/service";

/**
 * 根据文章id获取文章结构
 * @param id 文章id
 */
export const getArticleById = (id: string | number) => {
    return service({
        url: "/getArticleById",
        method: "POST",
        data: { id }
    }) as unknown as Promise<Response>
}