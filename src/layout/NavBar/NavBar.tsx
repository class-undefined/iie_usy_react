import * as React from 'react';
import {useEffect, useState} from 'react';
import './NavBar.scss'
import {getMedia, OS} from '../../utils/media';
import {navBarConfig} from '../../route/config';
import MediaNavBar from './components/MediaNavBar/MediaNavBar';
import { withRouter } from "react-router";
import {NavBarItem} from './components/NavBarItem/NavBarItem';
import {RouteConfig} from '../../route/types';
import {RouteConfigFitter} from './config';

export const NavBar = (props: any) => {
    const [media, setMedia] = useState(getMedia(window.outerWidth))
    useEffect(() => {
        window.addEventListener('resize', (e: Event) => {
            const {currentTarget} = e
            const {outerWidth} = currentTarget as any
            setMedia(getMedia(outerWidth))
        })
        console.log(props);
        console.log(`设备类型: ${media}`);
    }, [media, props])
    return (
        <nav className={'nav'}>
            {media === OS.pc || <MediaNavBar/>}
            {
                media !== OS.pc || navBarConfig.filter(route => !RouteConfigFitter.isAddNavBar(route)).map((barItem, key) => (
                    <NavBarItem key={key} {...barItem} />)
                ).reverse()
            }
        </nav>
    );
}
export const Nav = withRouter(NavBar)
