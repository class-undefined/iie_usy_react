import React from 'react';
import {RouteConfig} from '../route/types';
import {RouteConfigFitter} from '../layout/NavBar/config';

interface PackViewProps {
    route: RouteConfig,
}
export const PackView = (props: PackViewProps) => {
    const {route} = props
    const {name, component} = route
    const Page = component as  React.FC
    const Component = (
        <div>
            <p>{name}</p>
            <Page/>
        </div>
    )
    return !RouteConfigFitter.isShowLayout(route) ? Component : <Page/>
}
