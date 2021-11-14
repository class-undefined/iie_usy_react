import {Box} from '@mui/material';
import {SummerDreamHtml} from '../../../assert/SummerDreamHtml';
import './SummerDream.scss'
interface SummerDreamProps {
    className?: string,
    height?: number | 257
}
export const SummerDream = (props: SummerDreamProps) => {
    return (
        <Box className={`SummerDream ${props.className}`} style={{height: props.height}}>
            <iframe title={'summer'} style={{display: 'block'}} height={props.height || 257} srcDoc={SummerDreamHtml} frameBorder="no"/>
        </Box>
    )
}
