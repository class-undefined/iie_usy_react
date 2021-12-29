import './BaseLayout.scss'
import React from 'react';
export const BaseLayout = (props: {children: React.Component | React.FC}) => {


    return (
        <div className={'base-layout-container'} children={props.children} />
    )
}
