import {CarouselComponent} from '../../components/Carousel/CarouselComponent';
import {CardContainer, CardContainerProps} from './CardContainer/CardContainer';
import {SummerDream} from './SummerDream/SummerDream';
import './Home.scss'
import {MoreActivity} from './MoreActivity/MoreActivity';
import {SloganDivider} from './SloganDivider/SloganDivider';
import {HomeData} from './data';
import {ListCard} from '../../components/ListCard/ListCard';
import Divider from '@mui/material/Divider';
const cardContainerProps: CardContainerProps = {
    title: '新闻速递',
    images: [
        {
            src: 'http://iie.sanyau.edu.cn/Public/photo/thumb_1632972830_197293840.jpg',
            description: '10月13日信智学院学术交流活动预告',
        },
        {
            src: 'http://iie.sanyau.edu.cn/Public/photo/thumb_1596155381_307747662.jpg',
            description: '三亚学院信息与智能工程学院教师招聘公告',
        },
        {
            src: 'http://iie.sanyau.edu.cn/Public/photo/thumb_1633685770_1034847966.jpg',
            description: '信息与智能工程学院——最美程序员线上评比活动',
        },
    ],
}
export const Home = () => {
    return (
        <div>
            <CarouselComponent/>
            <div className={'home-group'}>
                <CardContainer {...cardContainerProps}/>
                <SummerDream height={267}/>
                <MoreActivity/>
            </div>
            <SloganDivider/>
            <div className={'home-group home-cards'}>
                {
                    HomeData.map((card, index) => {
                        return (
                            <ListCard className={'home-cards-items'} key={card.title} {...card}/>
                        )
                    })
                }
            </div>

            <div className={'home-group-top'}>
                <Divider/>
                111
            </div>
        </div>
    )
}
