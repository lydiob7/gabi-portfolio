import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setImageToOpen } from 'store/uiSlice';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        position: 'relative',
        width: '80%',
        [theme.breakpoints.up('md')]: {
            height: '80%',
            width: 'auto'
        },
        '& > img': {
            objectFit: 'cover',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 'auto',
                height: '100%'
            }
        },
        '& > p': {
            position: 'absolute',
            bottom: '-.8rem',
            right: '.2rem',
            fontSize: '.8rem',
            color: theme.palette.background.paper,
            backgroundColor: theme.palette.text.primary,
            padding: '0 .2rem'
        }
    },
    root: {
        postion: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0
    }
}));

const ImageViewer = ({ gsap }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    const { imageToOpen } = useSelector(({ ui }) => ui);

    useEffect(() => {
        if (imageToOpen) {
            gsap.fromTo(
                '.image-viewer-wrapper',
                { display: 'none' },
                {
                    display: 'flex'
                }
            );
            gsap.fromTo(
                '.image-viewer-wrapper',
                { opacity: 0 },
                {
                    opacity: 1
                }
            );
        } else {
            gsap.fromTo(
                '.image-viewer-wrapper',
                { display: 'flex' },
                {
                    display: 'none'
                }
            );
            gsap.fromTo(
                '.image-viewer-wrapper',
                { opacity: 1 },
                {
                    opacity: 0
                }
            );
        }
    }, [gsap, imageToOpen]);

    return (
        <div
            style={{ zIndex: 999, backgroundColor: 'rgba(0,0,0,.5)' }}
            className={clsx('image-viewer-wrapper', internalClasses.root)}
            onClick={() => dispatch(setImageToOpen(null))}
        >
            <div className={internalClasses.imageWrapper}>
                <img src={imageToOpen?.src} alt={imageToOpen?.alt} />

                <p>{imageToOpen?.alt}</p>
            </div>
        </div>
    );
};

export default ImageViewer;
