import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, CardMedia, Box} from '@mui/material'
import './carousel.scss'
import {OS} from '../../utils/media';

export interface CarouselItemProps {
    name?: string,
    url: string,
    description?: string
}

const Item = (props: { imageGroup: Array<CarouselItemProps> }) => {
    return (
        <Box className={'carousel-card'}
             sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 '& > :not(style)': {
                     m: 1,
                 },
             }}
        >
            {props.imageGroup.map((image, key) =>
                <Paper className={'carousel-card-container'} elevation={2}>
                    <CardMedia key={key} component={'img'} className={'img'} src={image.url}/>
                </Paper>,
            )}
        </Box>
    )
}

export const CarouselComponent = (props: any) => {
    const items = [
        {
            name: 'Random Name #1',
            url: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            url: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Hello World!',
        },
    ]
    const packItem = (carouselItemProps: Array<CarouselItemProps>, size: number = 3) => {
        const ans = [] as Array<Array<CarouselItemProps>>
        let pack = [] as Array<CarouselItemProps>
        for (let i = 0; i < carouselItemProps.length; i++) {
            // 如果数量达到要求（pack元素有 size 个 && pack不为0）
            pack.push(carouselItemProps[i])
            if (((i + 1) % size === 0 && pack.length !== 0) || (i === carouselItemProps.length - 1 && i !== 0)) {
                ans.push(pack)
                pack = [] as Array<CarouselItemProps>
            }
        }
        console.log(ans);
        return ans
    }
    const getSize = (media: OS) => {
        if (media === OS.mobile) return 1
        else if(media === OS.pad) return 2
        else return 3
    }
    const getMedia = (width: number) => {
        if (width <= 1105) return OS.mobile
        else if(width < 1764) return OS.pad
        else return OS.pc
    }
    const [media, setMedia] = useState(getMedia(window.outerWidth))
    const [itemSize, setItemSize] = useState(getSize(getMedia(window.outerWidth)))
    useEffect(() => {
        // 监控窗口变化，判断设备属性
        window.addEventListener('resize', (e: Event) => {
            const {currentTarget} = e
            const {outerWidth} = currentTarget as any
            setMedia(getMedia(outerWidth))
            setItemSize(getSize(media))
        })
    })
    return (
        <Box className={'carousel-container'}>
            <Carousel interval={8000}>
                {
                    packItem(items, itemSize).map((item, i) => {
                        return <Item key={i} imageGroup={item}/>
                    })
                }
            </Carousel>
        </Box>
    )
}

