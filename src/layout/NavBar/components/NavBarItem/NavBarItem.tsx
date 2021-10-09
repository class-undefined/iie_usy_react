import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './NavBarItem.scss'
import {RouteConfig} from '../../../../route/config';

export const NavBarItem = (props: RouteConfig) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const showMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!anchorEl) setAnchorEl(event.currentTarget)
    }
    const redirect = (path: string) => {
        return null
    }
    const handleClick = (props: RouteConfig) => {
        if (props.children && props.children.length !== 0) return showMenu
        return () => {redirect(props.path)}
    }
    const handleClose = (event: React.MouseEvent<HTMLDivElement> | any) => {
        if (anchorEl) setAnchorEl(null);
    }
    return (
        <div className={'nav-bar-item'}>
            <Button
                style={{color: '#303133'}}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick(props)}
            >
                {props.name}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClick={(e) => {return handleClose(e)}}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                {props.children && (props.children as RouteConfig[]).map((menuItem, index) => {
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
