import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {RouteConfig} from '../../route/config';
import {Button} from '@mui/material';
import {MouseEventHandler} from 'react';
import './ExtendGroup.scss'
interface ExtendGroupProps extends RouteConfig {
    onClick?: MouseEventHandler
}
export default function ExtendGroup(props: ExtendGroupProps) {
    const Children = () => {
        return (
            <div>
                {
                    props.children && props.children.map(routeConfig => {
                        return <Button key={routeConfig.name} className={'typography-detail-btn'} onClick={props.onClick}>{routeConfig.name}</Button>
                    })
                }
            </div>
        )
    }
    return (
        <div>
            <Accordion className={'accordion-container'}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content">
                    <Typography className={'typography'}>{props.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Children/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
