import { service } from "../utils/api/service/service"
import { Response } from "../utils/api/response/type"

// 注入url生成对于hoc的api，必须确保apiUrl对应的后端接口返回的是Article的Response
const generate = (apiUrl: string) => {
    return (page: number) => {
        return service({
            url: apiUrl,
            method: "POST",
            data: { page }
        }) as unknown as Promise<Response>
    }
}

// 视图卡片的api
export const viewApi = {
    education: {
        // https://console-mock.apipost.cn/app/mock/project/8668987d-5730-467c-86d1-52bf09e9d76a/education/management
        management: generate("getArticleCardDesc"),
        proBuild: generate("getArticleCardDesc"),
        classBuild: generate("getArticleCardDesc"),
        reform: generate("getArticleCardDesc"),
        achievement: generate("getArticleCardDesc"),
        laboratory: generate("getArticleCardDesc")
    },
    scientific: {
        management: generate("getArticleCardDesc"),
        dynamic: generate("getArticleCardDesc"),
        advanced: generate("getArticleCardDesc"),
        achievement: generate("getArticleCardDesc"),
    },
    organization: {
        partyWork: generate("getArticleCardDesc"),
        youthWork: generate("getArticleCardDesc"),
        unionActivity: generate("getArticleCardDesc"),
        achievement: generate("getArticleCardDesc"),
    },
    zsjy: {
        info: generate("getArticleCardDesc"),
        activity: generate("getArticleCardDesc"),
        alumniAssociation: generate("getArticleCardDesc"),
    },
    student: {
        activity: generate("getArticleCardDesc"),
        highlight: generate("getArticleCardDesc"),
        competition: generate("getArticleCardDesc"),
        societies: generate("getArticleCardDesc"),
    },
    build: {
        onlineClass: generate("getArticleCardDesc"),
        trainingBase: generate("getArticleCardDesc"),
        innovationBase: generate("getArticleCardDesc"),
        appDev: generate("getArticleCardDesc"),
    }
}