import './BaseLayout.scss'
import React from 'react';
import { MetaTag } from '../MetaTag/MetaTag';
export const BaseLayout = (props: { children: React.FC<any> }) => {
    const F = props.children
    return (
        <div className={'base-layout-container'}>
            <MetaTag />
            <div className='base-layout-route-view'>
                <F />
            </div>

        </div>
    )
}
