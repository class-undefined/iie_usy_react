import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';
import { MouseEventHandler } from 'react';
import './ExtendGroup.scss'
import { useJumpToView } from '../../layout/NavBar/config';
import { useHistory } from 'react-router-dom';
import { RouteNode } from '../../route/node/node';
interface ExtendGroupProps {
    route: RouteNode
    onClick?: MouseEventHandler
}
export default function ExtendGroup(props: ExtendGroupProps) {
    const jumpToView = useJumpToView(useHistory())
    const { route } = props
    const { children } = route
    const Children = () => {
        return (
            <AccordionDetails>
                {
                    children && children.map(node => {
                        return <Button key={node.getName()} className={'typography-detail-btn'} onClick={() => { jumpToView(node) }}>{node.getName()}</Button>
                    })
                }
            </AccordionDetails>
        )
    }
    const MenuItem = () => {
        /* 是否为需要扩展的元素 */
        const isExtend = children && children.length !== 0
        if (isExtend) {
            return (
                <Accordion className={'accordion-container'}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <Typography className={'typography'}>{route.getName()}</Typography>
                    </AccordionSummary>
                    <Children />
                </Accordion>
            )
        }
        return (
            <Accordion className={'accordion-container'} onClick={() => { jumpToView(route) }}>
                <AccordionActions className={'accordion-signal-item'} >
                    <Typography className={'typography'}>{route.getName()}</Typography>
                </AccordionActions>
            </Accordion>
        )
    }
    return <MenuItem />
}
