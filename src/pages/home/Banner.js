import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '90%'
    },
    root: {
        position: 'relative',
        height: '100vh'
    },
    subtitle: {
        margin: '.5rem 0'
    },
    textWrapper: {
        position: 'absolute',
        left: 0,
        top: '20vh',
        width: '50%'
    },
    title: {
        color: theme.palette.primary.main,
        marginBottom: '1.5rem'
    }
}));

const Banner = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.banner);

    return (
        <Grid component="main" container className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Grid item xs={false} md={6}></Grid>
            <div className={internalClasses.textWrapper}>
                <Typography className={clsx(internalClasses.title, 'fs-900 fw-900')} variant="h1">
                    {textProvider?.title}
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'fs-200 fw-400')} variant="h1">
                    {textProvider?.subtitle}
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'fs-200 fw-400')} variant="h1">
                    {textProvider?.subtitle2} <span className="fw-600">{textProvider?.subtitleBold1}</span>{' '}
                    {textProvider?.subtitle3} <span className="fw-600">{textProvider?.subtitleBold2}</span>
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'fs-200 fw-400')} variant="h1">
                    {textProvider?.subtitle4}
                </Typography>
            </div>
            <Grid item xs={12} md={6}>
                <img className={internalClasses.image} src="images/profile-picture.jpg" alt="Gabi Polanco profile" />
            </Grid>
        </Grid>
    );
};

export default Banner;
