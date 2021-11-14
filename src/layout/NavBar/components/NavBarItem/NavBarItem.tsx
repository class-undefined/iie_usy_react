import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import './NavBarItem.scss'
import {RouteConfig, RouterMap} from '../../../../route/config';
import {preRoutePath, useJumpToView, useUpdatePrePath} from '../../config';
import {useHistory} from 'react-router-dom';

export const NavBarItem = (props: RouteConfig) => {
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)
    /**
     * 页面跳转
     * @param route 导航栏的RouteConfig
     * @param isTop 是否为一级路由
     */
    const jumpToView = useJumpToView(useHistory())
    const updatePrePath = useUpdatePrePath()
    const handleToggle = (route: RouteConfig) => {
        /* 设置路由前缀，路由前缀 Example: /abc/def ,则/abc为前缀 /a/b/c/d/e 则/a/b/c/d是前缀 */
        if (!open) {
            updatePrePath(route)
        }
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClick = (props: RouteConfig) => {
        if (props.children && props.children.length !== 0) return () => {handleToggle(props)}
        return () => {
            jumpToView(props, true)
        }
    }

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={'nav-bar-item'}>
            <Button
                ref={anchorRef}
                style={{color: '#303133'}}
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick(props)}
            >
                {props.name}
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {props.children && (props.children as RouterMap).map((menuItem, index) => {
                                        return (
                                            <MenuItem className={'menu-item'} style={{textAlign: 'center'}}
                                                      sx={{width: 100}} key={index} onClick={(e) => {
                                                handleClose(e)
                                                jumpToView(menuItem)
                                            }
                                            }>
                                                {menuItem.name}
                                            </MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
