import React, { useState } from 'react';

import { IconButton, makeStyles, Modal } from '@material-ui/core';
import { Close as CloseIcon, ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ' center !important',
        alignItems: ' center !important',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    closeFile: {
        color: '#FFFFFF',
        width: '50px',
        height: '50px',
        padding: '10px',
        margin: '0 auto',
        transform: 'translateX(45vw)',
        zIndex: 999998,
        cursor: 'pointer'
    },
    imageWrapper: {
        position: 'relative',
        width: '70vw',
        height: '85vh',
        overflowX: 'scroll',
        overflowY: 'scroll',
        background: '#eeeeee',
        '& img': {
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
            transformOrigin: 'top left',
            '&.zoom': {
                transform: 'scale(1.5)'
            }
        }
    },
    zoomIcon: {
        position: 'fixed',
        zIndex: 9999,
        top: '12vh',
        right: '16vw'
    }
}));

const ImageModal = ({ imageUrl, onClose, open }) => {
    const classes = useStyles();
    const size = { width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 };

    const [isZommedIn, setIsZoomedIn] = useState(false);

    return (
        <Modal
            className={classes.container}
            open={open}
            onClose={() => {
                setIsZoomedIn(false);
                onClose();
            }}
        >
            <>
                <IconButton onClick={onClose} className={classes.closeFile}>
                    <CloseIcon />
                </IconButton>
                {typeof imageUrl === 'string' && imageUrl?.includes('pdf') ? (
                    <embed src={imageUrl} width={size.width} height={size.height} type="application/pdf" />
                ) : (
                    <div className={classes.imageWrapper}>
                        <IconButton className={classes.zoomIcon} onClick={() => setIsZoomedIn(!isZommedIn)}>
                            {isZommedIn ? <ZoomOutIcon fontSize="large" /> : <ZoomInIcon fontSize="large" />}
                        </IconButton>
                        <img className={isZommedIn && 'zoom'} src={imageUrl} alt="file" />
                    </div>
                )}
            </>
        </Modal>
    );
};

export default ImageModal;
