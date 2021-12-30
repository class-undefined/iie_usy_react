import './BaseLayout.scss'
import React from 'react';
export const BaseLayout = (props: {children: React.FC<any>}) => {
    const F = props.children
    return (
        <div className={'base-layout-container'}>
            <F/>
        </div>
    )
}
