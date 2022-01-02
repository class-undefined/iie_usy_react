import React from 'react';
import {RouteConfig} from '../../route/types';
import {RouteConfigFitter} from '../../layout/NavBar/config';
import './PackView.scss'
interface PackViewProps {
    route: RouteConfig,
}
export const PackView = (props: PackViewProps) => {
    const {route} = props
    const {name, component} = route
    const Page = component as  React.FC
    const Component = (
        <div>
            <p className={'PackView-title'}>{name}</p>
            <div className={'PackView-body'}>
                <Page/>
            </div>
        </div>
    )
    return !RouteConfigFitter.isShowLayout(route) ? Component : <Page/>
}
