import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavBarItem} from './components/NavBarItem';
import './NavBar.scss'
import {getMedia, OS} from '../../utils/media';
import {navBarConfig} from '../../route/config';
import MediaNavBar from './components/MediaNavBar';


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
            <div className={'nav-bar-item'} style={{width: '0px', height: '100%'}}/>
            {media === OS.pc || <MediaNavBar/>}
            {
                media !== OS.pc || navBarConfig.map((barItem, key) => (
                    <NavBarItem key={key} {...barItem} />)
                ).reverse()
            }
        </div>
    );
}
