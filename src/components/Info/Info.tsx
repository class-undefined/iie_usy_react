import React from 'react';
import {Box, NoSsr} from '@mui/material'
import './Info.scss'
import {Win} from '../Win/Win';
import ResponsiveDialog from '../IIEAd/IIEAd';
interface GalaxyInfoProps {
    className?: string
}

export const Info = (props: GalaxyInfoProps) => {
    return (
        <Box className={`galaxy-info ${props.className}`}>
            <ResponsiveDialog/>
        </Box>
    )
}
