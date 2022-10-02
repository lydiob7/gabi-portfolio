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
        fontSize: '1.4rem',
        fontWeight: '600',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem'
        }
    }
}));

const SectionTitle = ({ classes, id, title, ...props }) => {
    const internalClasses = useStyles();

    return (
        <Grid container alignItems="center" id={id}>
            <Grid className={clsx(internalClasses.line, classes?.line)} item xs={2} sm={3} md={4}></Grid>
            <Grid item xs={8} sm={6} md={4}>
                <Typography {...props} variant="h1" className={clsx(internalClasses.title, classes?.title, 'fw-500')}>
                    {title}
                </Typography>
            </Grid>
            <Grid className={clsx(internalClasses.line, classes?.line)} item xs={2} sm={3} md={4}></Grid>
        </Grid>
    );
};

export default SectionTitle;
