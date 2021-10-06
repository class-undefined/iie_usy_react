import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavBarItem, NavBarItemProps} from './NavBarItem';
import './NavBar.scss'
import {getMedia, OS} from '../utils/media';
import {Button, IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';
import TemporaryDrawer from './MediaNavBar';

const navBarConfig: Array<NavBarItemProps> = [
    {
        title: '学院概况',
        menuItems: [
            {
                name: '学院简介',
                url: 'aaa',
            },
            {
                name: '专业介绍',
                url: 'bbb',
            },
            {
                name: '领导团队',
                url: 'bbb',
            },
            {
                name: '师资力量',
                url: 'bbb',
            },
        ],
    },
    {
        title: '学术科研',
        menuItems: [
            {
                name: '科研管理',
                url: 'ccc',
            },
            {
                name: '科研动态',
                url: 'dddd',
            },
            {
                name: '学科前沿',
                url: 'dddd',
            },
            {
                name: '科研成果',
                url: 'dddd',
            },
        ],
    },
    {
        title: '教育教学',
        menuItems: [
            {
                name: '管理制度',
                url: 'ccc',
            },
            {
                name: '专业建设',
                url: 'dddd',
            },
            {
                name: '课程建设',
                url: 'dddd',
            },
            {
                name: '教学改革',
                url: 'dddd',
            },
            {
                name: '教学成果',
                url: 'dddd',
            },
            {
                name: '实验室 ',
                url: 'dddd',
            },
        ],
    },
    {
        title: '党团建设',
        menuItems: [
            {
                name: '党建工作',
                url: 'ccc',
            },
            {
                name: '共青团工作',
                url: 'dddd',
            },
            {
                name: '工会活动',
                url: 'dddd',
            },
        ],
    },
    {
        title: '招生就业',
        menuItems: [
            {
                name: '招生信息',
                url: 'ccc',
            },
            {
                name: '就业动态',
                url: 'dddd',
            },
            {
                name: '校友会',
                url: 'dddd',
            },
        ],
    },
    {
        title: '学生天地',
        menuItems: [
            {
                name: '学生活动',
                url: 'ccc',
            },
            {
                name: '学习风采',
                url: 'dddd',
            },
            {
                name: '学科竞赛',
                url: 'dddd',
            },
            {
                name: '学生社团',
                url: 'dddd',
            },
        ],
    },
    {
        title: '基地建设',
        menuItems: [
            {
                name: '网课基地',
                url: 'ccc',
            },
            {
                name: '实训基地',
                url: 'dddd',
            },
            {
                name: '双创基地',
                url: 'dddd',
            },
            {
                name: '应用研发',
                url: 'dddd',
            },
        ],
    },
]
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
            {media !== OS.pc || navBarConfig.map((barItem, key) => (<NavBarItem key={key} {...barItem} />)).reverse()}
        </div>
    );
}
