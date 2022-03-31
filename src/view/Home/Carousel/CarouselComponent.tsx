import { Box } from '@mui/material'
import './carousel.scss'
import img1 from '../../../img/726dd506a1ddb5cedefc0bb9b83dfc59.jpg'
import img2 from '../../../img/a8b5410360d15171e5c316b8198e51e5.jpg'
import img3 from '../../../img/c4594b90050984601f0e44b9d286bfb1.jpg'
import img4 from '../../../img/e02f5dd454704d3006a7c9d858db1ec0.jpg'
import img5 from '../../../img/ee6521226e4d4438b42a7b0da5058c68.jpg'
import { VideoDialog } from '../../../components/VideoDialog/VideoDialog';
import { EmblaCarousel } from '../../../components/Carousel/Carousel';
import { CarouselImage } from '../../../components/Carousel/CarouselItem/CarouselItem';

export interface CarouselItemProps {
    name?: string,
    url: string,
    description?: string
}

interface CarouselComponentProps {
    className?: string
}

export const CarouselComponent = (props: CarouselComponentProps) => {
    const className = props.className ? "carousel-container " + props.className : "carousel-container"
    const items = [
        {
            name: 'Random Name #1',
            url: "http://u-pic.oss-cn-beijing.aliyuncs.com/uPic/726dd506a1ddb5cedefc0bb9b83dfc59.jpg",
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            url: "http://u-pic.oss-cn-beijing.aliyuncs.com/uPic/a8b5410360d15171e5c316b8198e51e5.jpg",
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: "http://u-pic.oss-cn-beijing.aliyuncs.com/uPic/c4594b90050984601f0e44b9d286bfb1.jpg",
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: "http://u-pic.oss-cn-beijing.aliyuncs.com/uPic/e02f5dd454704d3006a7c9d858db1ec0.jpg",
            description: 'Hello World!',
        },
        {
            name: 'Random Name #2',
            url: "https://u-pic.oss-cn-beijing.aliyuncs.com/uPic/ee6521226e4d4438b42a7b0da5058c68.jpg",
            description: 'Hello World!',
        },
    ]
    const demos: CarouselImage[] = items.map(item => {
        return {
            src: item.url
        } as CarouselImage
    })
    return (
        <Box className={className}>
            <EmblaCarousel images={demos} />
        </Box>
    )
}

