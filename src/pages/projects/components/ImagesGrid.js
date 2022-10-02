import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';
import { getRandomId } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        cursor: 'pointer',
        '&:nth-child(1)': {
            gridRow: '1 / 3'
        },
        '&:nth-child(2)': {
            gridRow: '1 / 2',
            gridColumn: '2 / 3'
        },
        '&:nth-child(3)': {
            gridRow: '2 / 3',
            gridColumn: '2 / 3'
        },
        '& img': {
            height: '100%'
        }
    },
    imageSizeAuto: {
        height: 'auto',
        width: '100%',
        '&>img': {
            height: 'auto',
            width: '100%'
        }
    },
    imageSizeNormal: {
        height: '40vh',
        [theme.breakpoints.up('md')]: {
            height: '60vh'
        }
    },
    imagesSlideWrapper: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gridTemplateRows: 'repeat(2 1fr)',
            overflow: 'visible'
        }
    },
    root: {},
    sectionContent: {
        margin: '2rem 0'
    }
}));

const ImagesGrid = ({ content, setImageToOpen, size, ...rest }) => {
    const internalClasses = useStyles();

    const sizeClass = size === 'auto' ? internalClasses.imageSizeAuto : internalClasses.imageSizeNormal;
    return (
        <Grid item xs={12} className={internalClasses.sectionContent}>
            <div className={internalClasses.imagesSlideWrapper}>
                {Array.isArray(content) &&
                    content.map((item) => (
                        <div
                            key={getRandomId()}
                            onClick={() => setImageToOpen(item?.src)}
                            className={clsx(internalClasses.image, sizeClass, 'fade-in')}
                        >
                            {item?.src && <img src={item?.src} alt={item?.alt} />}
                        </div>
                    ))}
            </div>
        </Grid>
    );
};

export default ImagesGrid;
