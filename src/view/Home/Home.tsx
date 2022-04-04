import { CarouselComponent } from './Carousel/CarouselComponent';
import { CardContainer, CardContainerProps } from './CardContainer/CardContainer';
import { SummerDream } from './SummerDream/SummerDream';
import './Home.scss'
import { MoreActivity } from './MoreActivity/MoreActivity';
import { SloganDivider } from './SloganDivider/SloganDivider';
import { HomeData } from './data';
import { ListCard } from '../../components/ListCard/ListCard';
import Divider from '@mui/material/Divider';
import { Info } from './Info/Info';
import { Logo } from './Logo/Logo';
import { PersonCard } from '../../components/PersonCard/PersonCard';
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

            <div className={"home-carousel-logo-container"}>
                <div className="home-carousel-logo">
                    <PersonCard />
                    {/* <Logo /> */}
                </div>
                <CarouselComponent className="home-carousel-container" />
            </div>
            <div className={"home-group"}>
                <CardContainer {...cardContainerProps} />
                <SummerDream height={267} />
                <MoreActivity />
            </div>
            {/* 带图标的分割线 */}
            <SloganDivider />
            {/* 通知公告 - 教学科研 - 学生风采 */}
            <div className={'home-group home-cards'}>
                {
                    HomeData.map((card, index) => {
                        return (
                            <ListCard className={'home-cards-items'} key={card.title} {...card} />
                        )
                    })
                }
            </div>
            <div className={'home-group-top'}>
                <Divider />
            </div>
            <Info />
        </div>
    )
}
