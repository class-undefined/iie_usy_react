import { useEffect, useState } from 'react'
import { getIntroductionData } from '../../../api/Info/introduction'
import { Article } from '../../../components/Article'
import { INullArticle } from '../../../type/article'
import { StatusCode } from '../../../utils/api/response/type'
import Notify from '../../../utils/Notify'
import "./Introduction.scss"
export const Introduction: React.FC = () => {
    const [article, setArticle] = useState(INullArticle)
    useEffect(() => {
        getIntroductionData().then(response => {
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
