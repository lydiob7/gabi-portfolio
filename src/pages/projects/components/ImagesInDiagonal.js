import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';
import { getRandomId } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    image: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        cursor: 'pointer',
        '&:nth-child(1)': {
            [theme.breakpoints.up('md')]: {
                gridColumn: '1/3',
                gridRow: '1/5'
            }
        },
        '&:nth-child(2)': {
            [theme.breakpoints.up('md')]: {
                gridColumn: '2/4',
                gridRow: '4/8'
            }
        },
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
    imagesSlideWrapper: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(7, 1fr)',
            overflow: 'visible',
            paddingBottom: '2rem'
        },
    },
    root: {},
    sectionContent: {
        margin: '0'
    }
}));

const ImagesInDiagonal = ({ className, content, setImageToOpen, size, ...rest }) => {
    const internalClasses = useStyles();

    const sizeClass = size === 'auto' ? internalClasses.imageSizeAuto : internalClasses.imageSizeNormal;
    return (
        <Grid item xs={12} className={clsx(internalClasses.sectionContent, className)}>
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

export default ImagesInDiagonal;
