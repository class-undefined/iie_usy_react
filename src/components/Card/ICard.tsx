import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {OverridableStringUnion} from '@mui/types';
import {ButtonPropsColorOverrides} from '@mui/material/Button/Button';
import './ICard.scss'

type ColorType = OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    ButtonPropsColorOverrides>

interface LinkAction {
    name: string, // 链接标题
    color?: ColorType
    onClick?: (props?: ICardProps) => void, //点击该链接触发的回调函数
}

export interface ICardProps {
    className?: string,
    image: string,
    height?: number
    actions: LinkAction[],
    title: string, // 标题
    content: string // 摘要
}


export const createAction = (_name: string, _color?: ColorType, _onClick?: (props?: ICardProps) => void): LinkAction => {
    const color = _color || 'primary'
    const f = () => {
        console.log('createActionOnclick')
    }
    const onClick = _onClick || f
    return {name: _name, color, onClick}
}
const defaultProps = {
    className: '',
    height: 140,
}


export const ICard = (props: ICardProps) => {
    const {image, actions, title, content} = props
    return (
        <Card sx={{maxWidth: 345}} className={'ICard'}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={props.height || defaultProps.height}
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
                                    onClick={(event) => {
                                        if (action.onClick) action.onClick()
                                    }}>
                                {action.name}
                            </Button>
                        )
                    })
                }
            </CardActions>
        </Card>
    )
}
