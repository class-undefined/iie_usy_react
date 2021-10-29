import React from 'react';
import {Box, NoSsr} from '@mui/material'
import './Info.scss'
import {Win} from '../Win/Win';
import IIEAd from '../IIEAd/IIEAd';
interface GalaxyInfoProps {
    className?: string
}
/* 学院广告视频 */
export const Info = (props: GalaxyInfoProps) => {
    return (
        <Box className={`galaxy-info ${props.className}`}>
            <IIEAd/>
        </Box>
    )
}
