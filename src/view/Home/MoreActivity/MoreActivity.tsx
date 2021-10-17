import {Box, Button} from '@mui/material';
import './MoreActivity.scss'
import {ActiveList, ActiveListItem} from '../../../components/ActiveList/ActiveList';

const activeList: Array<ActiveListItem> = [{
    content: '信息与智能工程学院——最美程序员线上评比活动  ',
    date: 'Oct 17, 2021',
    link: 'https://www.baidu.com/',
}, {
    content: '你好',
    date: 'Jan 9, 2014',
    link: 'https://www.baidu.com/',
}, {
    content: '你好',
    date: 'Jan 9, 2014',
    link: 'https://www.baidu.com/',
}, {
    content: '你好',
    date: 'Jan 9, 2014',
    link: 'https://www.baidu.com/',
}, {
    content: '你好',
    date: 'Jan 9, 2014',
    link: 'https://www.baidu.com/',
}]

export const MoreActivity = () => {
    return (
        <Box className={'more-activity'}>
            <Button className={'more-activity-title'}>更多动态</Button>
            <ActiveList items={activeList}/>
        </Box>
    )
}
