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
        textAlign: 'center',
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.3rem'
        }
    }
}));

const SectionTitle = ({ classes, title, ...props }) => {
    const internalClasses = useStyles();

    return (
        <Grid container alignItems="center">
            <Grid className={clsx(internalClasses.line, classes?.line)} item xs={3} md={4}></Grid>
            <Grid item xs={6} md={4}>
                <Typography {...props} variant="h1" className={clsx(internalClasses.title, classes?.title, 'fw-500')}>
                    {title}
                </Typography>
            </Grid>
            <Grid className={clsx(internalClasses.line, classes?.line)} item xs={3} md={4}></Grid>
        </Grid>
    );
};

export default SectionTitle;
