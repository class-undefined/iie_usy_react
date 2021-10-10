import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {RouteConfig} from '../../route/config';
import {AccordionActions, Button} from '@mui/material';
import {MouseEventHandler} from 'react';
import './ExtendGroup.scss'
interface ExtendGroupProps extends RouteConfig {
    onClick?: MouseEventHandler
}
export default function ExtendGroup(props: ExtendGroupProps) {
    const Children = () => {
        return (
            <AccordionDetails>
                {
                    props.children && props.children.map(routeConfig => {
                        return <Button key={routeConfig.name} className={'typography-detail-btn'} onClick={props.onClick}>{routeConfig.name}</Button>
                    })
                }
            </AccordionDetails>
        )
    }
    const MenuItem = (props: ExtendGroupProps) => {
        /* 是否为需要扩展的元素 */
        const isExtend = props.children && props.children.length !== 0
        if (isExtend) {
            return (
                <Accordion className={'accordion-container'}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                        <Typography className={'typography'}>{props.name}</Typography>
                    </AccordionSummary>
                    <Children/>
                </Accordion>
            )
        }
        return (
            <Accordion className={'accordion-container'}>
                <AccordionActions className={'accordion-signal-item'}>
                    <Typography className={'typography'}>{props.name}</Typography>
                </AccordionActions>
            </Accordion>
        )
    }
    return <MenuItem {...props}/>
}
