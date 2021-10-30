import * as React from 'react';
import {useEffect, useState} from 'react';
import './NavBar.scss'
import {getMedia, OS} from '../../utils/media';
import {navBarConfig} from '../../route/config';
import MediaNavBar from './components/MediaNavBar/MediaNavBar';
import {BreadCrumbs} from './components/BreadCrumbs/BreadCrumbs';
import { withRouter } from "react-router";
import {NavBarItem} from './components/NavBarItem/NavBarItem';

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
    }, [media])
    return (
        <nav className={'nav'}>
            {media === OS.pc || <MediaNavBar/>}
            <BreadCrumbs/>
            {
                media !== OS.pc || navBarConfig.map((barItem, key) => (
                    <NavBarItem key={key} {...barItem} />)
                ).reverse()
            }
        </nav>
    );
}
export const Nav = withRouter(NavBar)
