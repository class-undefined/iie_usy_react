import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, CardMedia, Box} from '@mui/material'
import './carousel.scss'
import {OS} from '../../utils/media';
import {packedArray} from '../../utils';
import img1 from '../../img/726dd506a1ddb5cedefc0bb9b83dfc59.jpg'
import img2 from '../../img/a8b5410360d15171e5c316b8198e51e5.jpg'
import img3 from '../../img/c4594b90050984601f0e44b9d286bfb1.jpg'
import img4 from '../../img/e02f5dd454704d3006a7c9d858db1ec0.jpg'
import img5 from '../../img/ee6521226e4d4438b42a7b0da5058c68.jpg'
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
                <Paper key={key} className={'carousel-card-container'} elevation={2}>
                    <CardMedia  component={'img'} className={'img'} src={image.url}/>
                </Paper>,
            )}
        </Box>
    )
}

export const CarouselComponent = (props: any) => {
    const items = [
        {
            name: 'Random Name #1',
            url: img1,
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            url: img2,
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: img3,
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: img4,
            description: 'Hello World!',
        },{
            name: 'Random Name #2',
            url: img5,
            description: 'Hello World!',
        },
    ]
    const getSize = (media: OS) => {
        if (media === OS.mobile) return 1
        else if(media === OS.pad) return 2
        else return 3
    }
    const getMedia = (width: number) => {
        if (width <= 1230) return OS.mobile
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
    }, [media])
    return (
        <Box className={'carousel-container'}>
            <Carousel interval={8000}>
                {
                    packedArray<CarouselItemProps>(items, itemSize).map((item, i) => {
                        return <Item key={i} imageGroup={item}/>
                    })
                }
            </Carousel>
        </Box>
    )
}

