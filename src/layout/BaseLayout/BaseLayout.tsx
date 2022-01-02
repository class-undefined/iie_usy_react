import './BaseLayout.scss'
import React from 'react';
import {BreadCrumbs} from '../NavBar/components/BreadCrumbs/BreadCrumbs';
export const BaseLayout = (props: {children: React.FC<any>}) => {
    const F = props.children
    return (
        <div className={'base-layout-container'}>
            <BreadCrumbs/>
            <F/>
        </div>
    )
}
