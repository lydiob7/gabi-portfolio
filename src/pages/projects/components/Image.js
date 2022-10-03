import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        cursor: 'pointer',
        '& img': {
            height: '100%'
        }
    },
    imageSizeAuto: {
        height: 'auto',
        width: '100%',
        '&>img': {
            width: '100%'
        }
    },
    imageSizeNormal: {
        height: '40vh',
        [theme.breakpoints.up('md')]: {
            height: '60vh'
        }
    },
    root: {},
    sectionContent: {
        padding: '0'
    }
}));

const Image = ({ content, setImageToOpen, ...rest }) => {
    const internalClasses = useStyles();

    const sizeClass = content?.size === 'auto' ? internalClasses.imageSizeAuto : internalClasses.imageSizeNormal;

    return (
        <Grid item xs={12} className={clsx(internalClasses.sectionContent)}>
            <div
                onClick={() => setImageToOpen(content?.src)}
                className={clsx(internalClasses.image, sizeClass, 'fade-in')}
            >
                {content?.src && <img src={content.src} alt={content?.alt} />}
            </div>
        </Grid>
    );
};

export default Image;
