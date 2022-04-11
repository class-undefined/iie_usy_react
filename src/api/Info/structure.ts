import { Response } from "../../utils/api/response/type"
import { service } from "../../utils/api/service/service"

export const getInfoDate = () => {
    return service({
        url: "info/getStructure",
        method: "POST",
    }) as unknown as Promise<Response>
}
