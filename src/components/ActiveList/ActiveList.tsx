import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import {ListItemButton, styled, Tooltip, tooltipClasses, TooltipProps} from '@mui/material';
import './ActiveList.scss'
import {useKTooltip} from '../KTooltip/KTooltip';

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

const BootstrapTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

export const ActiveList = (props: ActiveListProps) => {
    /* 数组权重排序 */
    const DarkTooltip = useKTooltip('light')
    return (
        <List className={'active-list'} sx={{width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: 204}}>
            {
                props.items.map((activeListItem, index) => {
                    return (
                        <div key={index}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <DarkTooltip title={activeListItem.content} placement="top">
                                    <ListItemText className={'list-item-text'} primary={activeListItem.content}
                                                  secondary={activeListItem.date || 'Oct 17, 2021'}/>
                                </DarkTooltip>
                            </ListItemButton>
                            {index === props.items.length - 1 ? false : <Divider variant="inset" component="li"/>}
                        </div>
                    )
                })
            }
        </List>
    );
}
