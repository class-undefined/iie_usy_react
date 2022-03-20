import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import './BreadCrumbs.scss'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Chip, emphasize, styled } from '@mui/material';
import { splitRoutePath } from '../../../../utils/router';
import { RouteUtils } from '../../../../route/utils';

const useTextStyle = makeStyles({
    li: {
        fontFamily: `"Roboto","Helvetica","Arial",sans-serif `,
        fontWeight: 400,
        fontSize: '1.895rem',
        lineHeight: 1.75,
    },
})

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

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
    const pathRoutes = RouteUtils.getRoutes(pathname)
    if (pathRoutes === null) return null
    if (pathRoutes.find(route => route.path === "/404")) return null
    const Children = () => {
        return (
            <Breadcrumbs>
                {pathRoutes.map((route) => <StyledBreadcrumb className={'Breadcrumbs'} key={route.path}
                    label={route.name} />)}
            </Breadcrumbs>
        )
    }
    return (
        <div className={'BreadCrumbs-container'} role="presentation" onClick={handleClick}>
            <div className={'BreadCrumbs-container-children'}>
                <Breadcrumbs
                    maxItems={2}
                    className={textStyle.li}
                    aria-label="breadcrumb">
                    <Children />
                </Breadcrumbs>
            </div>
        </div>
    );
}
