import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './NavBarItem.scss'
import {RouteConfig} from '../route/config';

export interface NavBarItemProps {
    title: string,
    menuItems: Array<RouteConfig>
}
export const NavBarItem = (props: NavBarItemProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!anchorEl) setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLDivElement> | any) => {
        if (anchorEl) setAnchorEl(null);

    };
    return (
        <div className={'nav-bar-item'}>
            <Button
                style={{color: '#303133'}}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.title}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClick={(e) => {return handleClose(e)}}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {props.menuItems.map((menuItem, index) => {
                    return (
                        <MenuItem className={'menu-item'} style={{textAlign: 'center'}} sx={{ width: 100 }} key={index} onClick={(e) => {return handleClose(e)}}>
                            {menuItem.name}
                        </MenuItem>
                    )
                })}
            </Menu>
        </div>
    );
}
