import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './BreadCrumbs.scss'
import {useLocation, useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {makeStyles} from '@mui/styles';
import {Button, Chip, emphasize, styled} from '@mui/material';
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
    useEffect(() => {
        console.log(history)
    }, [history])
    return (
        <div className={'BreadCrumbs-container'} role="presentation" onClick={handleClick}>
            <div className={'BreadCrumbs-container-children'}>
                <Breadcrumbs
                    maxItems={2}
                    className={textStyle.li}
                    aria-label="breadcrumb">
                    <StyledBreadcrumb label={'Mui'}/>
                    <StyledBreadcrumb label={'Core'}/>
                    <StyledBreadcrumb label={'Breadcrumbs'}/>
                </Breadcrumbs>
            </div>
        </div>
    );
}
