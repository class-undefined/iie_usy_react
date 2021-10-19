import {Box, Button} from '@mui/material';
import './ListCard.scss'
import {ActiveList, ActiveListItem} from '../ActiveList/ActiveList';

export interface ListCardProps {
    className?: string,
    title: string,
    items: Array<ActiveListItem>
}
export const ListCard = (props: ListCardProps) => {
    return (
        <Box className={`list-card ${props.className}`}>
            <Button className={'list-card-title'}>{props.title}</Button>
            <ActiveList items={props.items}/>
        </Box>
    )
}
