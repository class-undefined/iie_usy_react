import {CarouselComponent} from '../../components/Carousel/CarouselComponent';
import {CardContainer, CardContainerProps} from './CardContainer/CardContainer';

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
            <CardContainer {...cardContainerProps}/>
        </div>
    )
}
