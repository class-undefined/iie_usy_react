import {ActiveListItem} from '../../../components/ActiveList/ActiveList';
import {ListCardProps} from '../../../components/ListCard/ListCard';

const activeList: Array<ActiveListItem> = [{
    content: '信息与智能工程学院——最美程序员线上评比活动 ',
    date: 'Oct 17, 2021',
    link: 'https://www.baidu.com/',
}, {
    content: '创建 USY-React-Pro',
    date: 'Oct 4, 2021',
    link: 'https://www.baidu.com/',
}, {
    content: 'Hello Word',
    date: 'Jan 9, 2014',
    link: 'https://www.baidu.com/',
}, {
    content: '你好',
    date: 'Jan 9, 2014',
    link: 'https://www.baidu.com/',
}]
export const StudentHighLight: ListCardProps = {
    title: '学生风采',
    items: activeList
}
