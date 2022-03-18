import { IDate } from "."

export type ArticleId = string | number
export interface IArticle {
    id: ArticleId, // 文章id
    title: string, // 文章标题
    releaseTime: IDate, // 发布时间
    updateTime: IDate, // 更新时间
    pv: number, //浏览量
    content: string, // 正文
}