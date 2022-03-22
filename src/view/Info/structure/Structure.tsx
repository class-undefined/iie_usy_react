import { getInfoDate } from "../../../api/Info/structure"
import { Article } from "../../../components/Article"

export const Structure = () => {
    return (
        <div>
            <Article className='introduction-article' article={getInfoDate()} />
        </div>
    )
}