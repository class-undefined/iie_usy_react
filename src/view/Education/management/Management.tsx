import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getArticleCardDesc } from "../../../api/education/management"
import { CardPage } from "../../../components/CardPage/CardPage"
import { KCardList } from "../../../components/KCard/KCardList"
import { KCardListItem, KCardListItemDefaultFoot } from "../../../components/KCard/KCardListItem/KCardListItem"
import { Loading } from "../../../components/Loading/Loading"
import { Response, StatusCode } from "../../../utils/api/response/type"
import Notify from "../../../utils/Notify"




export const Management = () => {
    return (
        <div>
            <CardPage callback={getArticleCardDesc} />
        </div>
    )
}