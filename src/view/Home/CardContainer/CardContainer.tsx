import {Box, Button} from '@mui/material';
import {ActionAreaCard} from '../../../components/ActionAreaCard/ActionAreaCard';
import './CardContainer.scss'
export interface ImageProps {
    src: string,
    description: string
}
export interface CardContainerProps {
    title: string,
    images: Array<ImageProps>
}
export const CardContainer = (props: CardContainerProps) => {
    return (
        <Box className={'card-container'}>
            <Button className={'card-container-title'}>{props.title}</Button>
            <div className={'card-container-body'}>
                {
                    props.images.map(image => {return <ActionAreaCard key={image.description} {...image} height={120} maxWidth={210} className={'card-container-body-item'} />})
                }
            </div>
        </Box>
    )
}
