import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavBarItem, NavBarItemProps} from './NavBarItem';
import './NavBar.scss'
import {getMedia, OS} from '../utils/media';
import {Button, IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';
import TemporaryDrawer from './MediaNavBar';
import {navBarConfig, RouteConfig} from '../route/config';

const MenuBtn = () => {
    return (
        <div className={'nav-bar-menu'}>
            <IconButton className={'nav-bar-menu-btn'}
                        size={'medium'}>
                <Menu/>
            </IconButton>
        </div>
    )
}
export const NavBar = () => {
    const [media, setMedia] = useState(getMedia(window.outerWidth))
    useEffect(() => {
        window.addEventListener('resize', (e: Event) => {
            const {currentTarget} = e
            const {outerWidth} = currentTarget as any
            setMedia(getMedia(outerWidth))
        })
        console.log(media);
    }, [media])
    return (
        <div className={'nav'}>
            <div className={'nav-bar-item'} style={{width: '0px', height: '100%'}}></div>
            {media === OS.pc || <TemporaryDrawer/>}
            {media !== OS.pc || navBarConfig.map((barItem, key) => (<NavBarItem key={key} title={barItem.name} menuItems={barItem.children as RouteConfig[]} />)).reverse()}
        </div>
    );
}
