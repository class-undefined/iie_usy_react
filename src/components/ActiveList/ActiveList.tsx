import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import {ListItemButton} from '@mui/material';
import './ActiveList.scss'
export interface ActiveListItem {
    status?: string, // 状态：置顶、热门？
    content: string, // 简要内容
    link: string, // 元素单击后需要跳转的链接
    date: string | null
}
interface ActiveListProps {
    className?: string,
    items: Array<ActiveListItem>
}
export const ActiveList = (props: ActiveListProps) => {
    /* 数组权重排序 */
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                props.items.map((activeListItem, index) => {
                    return (
                        <ListItemButton key={index}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText className={'list-item-text'} primary={activeListItem.content} secondary={activeListItem.date || "Jan 9, 2014"} />
                        </ListItemButton>
                    )
                })
            }
        </List>
    );
}
