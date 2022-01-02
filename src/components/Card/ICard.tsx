import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {OverridableStringUnion} from '@mui/types';
import {ButtonPropsColorOverrides} from '@mui/material/Button/Button';

interface ICardProps {
    className?: string,
    image: string,
    height?: number
    actions: LinkAction[],
    title: string, // 标题
    content: string // 摘要
}

const defaultProps = {
    className: '',
    height: 140,
}

interface LinkAction {
    name: string, // 链接标题
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides>
    onClick?: (props: ICardProps) => void, //点击该链接触发的回调函数
}

export const ICard = (props: ICardProps) => {
    const {image, actions, title, content} = props
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={props.className || defaultProps.className}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    actions.map((action, index) => {
                        return (
                            <Button key={index}
                                    size="small"
                                    color={action.color || 'primary'}
                                    onClick={(event) => action.onClick}>
                                {action.name}
                            </Button>
                        )
                    })
                }
            </CardActions>
        </Card>
    )
}
