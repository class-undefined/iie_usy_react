import {Box, Button} from '@mui/material';
import {ActionAreaCard} from '../../../components/ActionAreaCard/ActionAreaCard';
import './CardContainer.scss'
import {useEffect, useState} from 'react';
import {getMedia, OS} from '../../../utils/media';
import {SummerDream} from '../SummerDream/SummerDream';

export interface ImageProps {
    src: string,
    description: string
}
export interface CardContainerProps {
    title: string,
    images: Array<ImageProps>,
    className?: string
}
export const CardContainer = (props: CardContainerProps) => {
    const [media, setMedia] = useState(getMedia(window.outerWidth))
    const getWidth = (width: number) => {
        if (width > 1200) return 275
        if (width > 768) return 220
        else return undefined
    }
    const getHeight = (width: number) => {
        if (width <= 280) return 100
        else if(width <= 320) return 140
        else if (width <= 375) return 180
        else if (width === 768) return 400
        else if(width < 768) return 220
        else return undefined
    }
    const [autoWidth, setAutoWidth] = useState(getWidth(window.outerWidth))
    const [autoHeight, setAutoHeight] = useState(getHeight(window.outerWidth))
    useEffect(() => {
        window.addEventListener('resize', (e: Event) => {
            const {currentTarget} = e
            const {outerWidth} = currentTarget as any
            setMedia(getMedia(outerWidth))
            setAutoWidth(getWidth(window.outerWidth))
            setAutoHeight(getHeight(outerWidth))
        })
    }, [media])
    return (
        <Box className={`card-container ${props.className}`}>
            <Button className={'card-container-title'}>{props.title}</Button>
            <div className={'card-container-body'}>
                {
                    props.images.map(image => {return <ActionAreaCard key={image.description} {...image} maxWidth={autoWidth} height={autoHeight} className={`card-container-body-item`} />})
                }
            </div>
        </Box>
    )
}
