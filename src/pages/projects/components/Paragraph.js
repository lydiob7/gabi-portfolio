import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    paragraph: {
        fontFamily: "'Barlow', sans-serif",
        marginBottom: '1rem'
    }
}));

const Paragraph = (params) => {
    const internalClasses = useStyles();

    const sizeClass = `fs-${params?.size}`;
    const weightClass = `fw-${params?.weight}`;

    return (
        <Grid item xs={12}>
            <Typography variant="body1" className={clsx(sizeClass, weightClass, internalClasses.paragraph)}>
                {params?.content}
            </Typography>
        </Grid>
    );
};

export default Paragraph;
