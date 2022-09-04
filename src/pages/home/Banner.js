import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import MediaList from 'components/common/MediaList';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '90%',
            marginLeft: '5%'
        }
    },
    mediaLinks: {
        margin: '2rem auto'
    },
    root: {
        position: 'relative',
        minHeight: '100vh'
    },
    subtitle: {
        margin: '.5rem 0'
    },
    textWrapper: {
        padding: '0 5vw',
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            left: 0,
            top: '20vh',
            width: '50%',
            padding: '0'
        }
    },
    title: {
        color: theme.palette.primary.main,
        marginBottom: '1.5rem',
        marginTop: '2rem',
        [theme.breakpoints.up('md')]: {
            marginTop: '0'
        }
    }
}));

const Banner = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.banner);

    return (
        <Grid component="main" container className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Grid item xs={false} sm={3} />
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

                <MediaList classes={{ root: internalClasses.mediaLinks }} />
            </div>
            <Grid item xs={2} sm={3} />
            <Grid item xs={8} sm={6}>
                <img className={internalClasses.image} src="images/profile-picture.jpg" alt="Gabi Polanco profile" />
            </Grid>
        </Grid>
    );
};

export default Banner;
