import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

export interface ActionAreaCardProps {
    maxWidth?: number, //默认345
    height?: number, // 默认140
    src: string,
    title?: string,
    description?: string
}

/**
 * 卡片组件，默认高度最大宽度345，默认高度140
 * @param props
 * @constructor
 */
export const ActionAreaCard = (props: ActionAreaCardProps) => {
    const TextComponent = () => {
        return (
            <CardContent>
                {props.title && <Typography gutterBottom variant="h5" component="div">{props.title}</Typography>}
                {props.description && <Typography variant="body2" color="text.secondary">{props.description}</Typography>}
            </CardContent>
        )
    }
    return (
        <Card sx={{maxWidth: props.maxWidth || 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={props.height || 140}
                    image={props.src}
                    alt="green iguana"
                />
                <TextComponent/>
            </CardActionArea>
        </Card>
    );
}
