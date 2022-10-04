import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    sectionContent: {
        margin: '2rem 0',
        width: '100%',
        '& iframe': {
            width: '350px',
            height: '200px',
            [theme.breakpoints.up('sm')]: {
                width: '80vw',
                height: '60vw'
            },
            [theme.breakpoints.up('md')]: {
                width: '700px',
                height: '500px'
            }
        }
    },
    video: {
        display: 'grid',
        placeContent: 'center'
    }
}));

const Video = ({ className, content, ...rest }) => {
    const internalClasses = useStyles();
    return (
        <Grid item xs={12} className={clsx(internalClasses.sectionContent, className)}>
            <div className={clsx(internalClasses.video)}>
                {content?.src && (
                    <iframe
                        src={content.src}
                        title={content.alt}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </Grid>
    );
};

export default Video;
