import { Response } from "../../utils/api/response/type"
import { service } from "../../utils/api/service/service"

export const getIntroductionData = () => {
    return service({
        url: "info/getIntroduction",
        method: "POST",
    }) as unknown as Promise<Response>
}
