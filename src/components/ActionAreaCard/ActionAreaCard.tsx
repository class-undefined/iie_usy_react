import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../common/utils.scss'
import './ActionAreaCard.scss'
import { ImageLoading } from '../ImageLoading/ImageLoading';
import { loadImage } from '../../utils';
import Notify from '../../utils/Notify';
import Box from '@mui/system/Box/Box';
export interface ActionAreaCardProps {
    maxWidth?: number, //默认345
    height?: number, // 默认140
    src: string,
    title?: string,
    description?: string,
    className?: string
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
                {props.title && <Typography className={'font-large'} gutterBottom variant="h5" component="div">{props.title}</Typography>}
                {props.description && <Typography variant="body2" className={'font-primary'} color="text.secondary">{props.description}</Typography>}
            </CardContent>
        )
    }
    const Loading = (
        <ImageLoading width={(props.maxWidth && props.maxWidth * 0.8) || 345} height={props.height || 130} />
    )
    const Self = (
        <CardActionArea>
            <div style={{ overflow: 'hidden' }}>
                <CardMedia
                    className={'img'}
                    component="img"
                    height={props.height || 140}
                    image={props.src}
                    alt="green iguana"
                />
            </div>
            <TextComponent />
        </CardActionArea>
    )
    const [ImageCard, setImageCard] = React.useState(Loading)
    React.useEffect(() => {
        loadImage(props.src).then(_ => {
            setImageCard(Self)
        }).catch(e => {
            Notify.error(e)
        })
    }, [props.src])
    return (
        <Box sx={{ maxWidth: props.maxWidth || 345 }} className={props.className}>
            {ImageCard}
        </Box>
    )
}
