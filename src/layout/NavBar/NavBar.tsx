import { useEffect, useState } from 'react';
import './NavBar.scss'
import { getMedia, OS } from '../../utils/media';
import { navBarConfig } from '../../route/config';
import MediaNavBar from './components/MediaNavBar/MediaNavBar';
import { NavBarItem } from './components/NavBarItem/NavBarItem';
import { RouteConfigFitter } from './config';
import { RouteUtil } from '../../route/utils';

export const NavBar = (props: any) => {
    const [media, setMedia] = useState(getMedia(window.outerWidth))
    const routeNodeNode = RouteUtil.getRootRoute()
    const children = routeNodeNode.children === null ? [] : routeNodeNode.children
    useEffect(() => {
        window.addEventListener('resize', (e: Event) => {
            const { currentTarget } = e
            const { outerWidth } = currentTarget as any
            setMedia(getMedia(outerWidth))
        })
        console.log(props);
        console.log(`设备类型: ${media}`);
    }, [media, props])
    return (
        <nav className={'nav'}>
            {media === OS.pc || <MediaNavBar />}
            {
                media !== OS.pc || children.filter(route => route.isAddNavBar()).map((route, key) => (
                    <NavBarItem key={key} route={route} />)
                ).reverse()
            }
        </nav>
    );
}
export const Nav = NavBar
