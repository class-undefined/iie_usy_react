import * as React from 'react';
import {NavBarItem, NavBarItemProps} from './NavBarItem';
import './NavBar.scss'
import logo from './logo.png'
const navBarConfig: Array<NavBarItemProps> = [
    {
        title: '学院概况',
        menuItems: [
            {
                name: '学院简介',
                url: 'aaa'
            },
            {
                name: '专业介绍',
                url: 'bbb'
            },
            {
                name: '领导团队',
                url: 'bbb'
            },
            {
                name: '师资力量',
                url: 'bbb'
            },
        ]
    },
    {
        title: '学术科研',
        menuItems: [
            {
                name: '科研管理',
                url: 'ccc'
            },
            {
                name: '科研动态',
                url: 'dddd'
            },
            {
                name: '学科前沿',
                url: 'dddd'
            },
            {
                name: '科研成果',
                url: 'dddd'
            },
        ]
    },
    {
        title: '学术科研1',
        menuItems: [
            {
                name: 'c',
                url: 'ccc'
            },
            {
                name: 'd',
                url: 'dddd'
            },
        ]
    }
]
export const NavBar = () => {
    return (
        <div className={'nav'}>
            <div className={'nav-bar-item'} style={{width: '0px', height:'100%'}}></div>
            {navBarConfig.map((barItem, key) => (<NavBarItem key={key} {...barItem} />)).reverse()}

        </div>
    );
}
