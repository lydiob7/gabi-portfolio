import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    sectionContent: {
        margin: '2rem 0'
    },
    video: {
        display: 'grid',
        placeContent: 'center'
    }
}));

const containerWidth = Math.floor(window.innerWidth * 0.571);
const iframeHeight = Math.floor(containerWidth * 0.6);

const Video = ({ classes, content, ...props }) => {
    const internalClasses = useStyles();
    return (
        <Grid item xs={12} className={internalClasses.sectionContent}>
            <div className={clsx(internalClasses.video)}>
                {content?.src && (
                    <iframe
                        width={containerWidth}
                        height={iframeHeight}
                        src={content.src}
                        title={content.alt}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                )}
            </div>
        </Grid>
    );
};

export default Video;
