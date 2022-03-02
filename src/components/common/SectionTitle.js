import React from 'react';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    line: {
        width: '100%',
        height: '1px',
        backgroundColor: theme.palette.text.primary,
        borderRadius: '20%'
    },
    root: {},
    title: {
        textAlign: 'center'
    }
}));

const SectionTitle = ({ classes, title, ...props }) => {
    const internalClasses = useStyles();

    return (
        <Grid container alignItems="center">
            <Grid className={internalClasses.line} item xs={4}></Grid>
            <Grid item xs={4}>
                <Typography variant="h1" className={clsx(internalClasses.title, 'fs-300')}>
                    {title}
                </Typography>
            </Grid>
            <Grid className={internalClasses.line} item xs={4}></Grid>
        </Grid>
    );
};

export default SectionTitle;
