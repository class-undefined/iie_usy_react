import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './BreadCrumbs.scss'
import {useLocation, useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {makeStyles} from '@mui/styles';
const useTextStyle = makeStyles({
    li: {
        fontFamily: `"Roboto","Helvetica","Arial",sans-serif `,
        fontWeight: 400,
        fontSize: '0.795rem',
        lineHeight: 1.75
    }
})
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
export const BreadCrumbs = () => {
    const textStyle = useTextStyle()
    const history = useHistory()
    useEffect(() => {
        console.log(history)
    }, [history])
    return (
        <div className={'BreadCrumbs-container'} role="presentation" onClick={handleClick}>
            <div className={'BreadCrumbs-container-children'}>
                <Breadcrumbs
                    maxItems={2}
                    className={textStyle.li}
                    separator={<NavigateNextIcon fontSize="small"/>}
                    aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/components/breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
}
