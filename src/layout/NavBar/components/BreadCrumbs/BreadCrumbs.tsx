import * as React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import './BreadCrumbs.scss'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Chip, emphasize, styled, Link, Typography } from '@mui/material';
import { splitRoutePath } from '../../../../utils/router';
import { RouteUtil } from '../../../../route/utils';
import { RouteNode } from '../../../../route/node/node';

const useTextStyle = makeStyles({
    li: {
        fontFamily: `"Roboto","Helvetica","Arial",sans-serif `,
        fontWeight: 500,
        fontSize: '0.9rem',
        lineHeight: 1.75,
    },
})



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
})


export const BreadCrumbs = () => {
    const textStyle = useTextStyle()
    const history = useHistory()
    const { pathname } = history.location
    const paths = splitRoutePath(pathname)
    const [pathLabels, setPathLabels] = useState(paths)// 各层级的路由名称
    useEffect(() => {
        setPathLabels(pathLabels)
    }, [pathname])
    console.log(pathLabels);
    const routeNode = RouteUtil.getRoute(pathname)
    if (routeNode === null) return null
    if (routeNode.getFullPath() === "/404") return null
    const routePaths = routeNode.getFullPathNodes()
    const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, route: Readonly<RouteNode>) => {
        history.push(route.getFullPath())
        event.preventDefault();
    }
    return (
        <div className={'BreadCrumbs-container'} role="presentation">
            <div className={'BreadCrumbs-container-children'}>
                <MUIBreadcrumbs
                    maxItems={2}
                    className={textStyle.li}
                    aria-label="breadcrumb">
                    {
                        routePaths.map((route, index) => {
                            return index !== routePaths.length - 1 ? (<Link className={'Breadcrumbs'}
                                underline="hover"
                                color="inherit"
                                onClick={(e) => handleClick(e, route)}
                                href={route.getFullPath()}
                                key={route.getFullPath()}>{route.getName()}</Link>)
                                : <span key={route.getFullPath()} className={'Breadcrumbs Breadcrumbs-now'} color="text.primary">{route.getName()}</span>
                        })
                    }
                </MUIBreadcrumbs>
            </div>
        </div>
    );
}
