import {IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import {MouseEventHandler} from 'react';
import {Logo} from '../../../components/Logo/Logo';
import {navBarConfig} from '../../../route/config';
import ExtendGroup from '../../../components/ExtendGroup/ExtendGroup';
import './MediaNavBar.scss'
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MenuBtn = (props: {onClick: MouseEventHandler<any>}) => {
    return (
        <div className={'nav-bar-menu'}>
            <IconButton onClick={props.onClick} className={'nav-bar-menu-btn'}
                        size={'medium'}>
                <Menu/>
            </IconButton>
        </div>
    )
}

export default function MediaNavBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Logo/>
            <Divider />
            <List>
                {navBarConfig.map((route, index) => (
                    <ListItem className={'mui-list-item'} button key={route.name}>
                        <ExtendGroup {...route} onClick={toggleDrawer(anchor, false)}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const anchor = 'left'
    return (
        <div>
            <React.Fragment key={anchor}>
                <MenuBtn onClick={toggleDrawer(anchor, true)}/>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    variant="temporary"
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
