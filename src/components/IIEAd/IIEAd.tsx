import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {IconButton} from '@mui/material';
import './IIEAd.scss'
import {makeStyles} from '@mui/styles';
export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <IconButton children={<PlayCircleIcon/>} onClick={handleClickOpen}/>
            <Dialog
                maxWidth={false}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogContent className={'iie-ad-dialog'}>
                    <iframe className={'iie-ad-dialog'} src="//player.bilibili.com/player.html?aid=973729704&cid=357367201&page=1"
                            scrolling="no" frameBorder="no" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus style={{color: '#d32f2f'}}>
                        关闭
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
