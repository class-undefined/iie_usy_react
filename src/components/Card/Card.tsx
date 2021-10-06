import './card.scss'
export const Card = () => {
    return (
        <div className={'card'}>
            {/*卡片正面*/}
            <div className="card-front">
                aaaaa
            </div>
            {/*卡片反面*/}
            <div className="card-back">
                <p>点赞</p>
                <p>投币</p>
                <p>收藏</p>
                <p>关注</p>
            </div>
        </div>
    )
}
