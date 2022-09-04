import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import MediaList from 'components/common/MediaList';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        opacity: 0,
        [theme.breakpoints.up('md')]: {
            width: '90%',
            marginLeft: '5%'
        }
    },
    mediaLinks: {
        opacity: 0,
        margin: '2rem auto'
    },
    root: {
        position: 'relative',
        minHeight: '100vh'
    },
    subtitle: {
        margin: '.5rem 0',
        opacity: 0
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
        opacity: 0,
        [theme.breakpoints.up('md')]: {
            marginTop: '0'
        }
    }
}));

const Banner = ({ classes, gsap, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.banner);

    useLayoutEffect(() => {
        gsap.to('.title', { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to('.p1', { opacity: 1, duration: 1, delay: 0.8 });
        gsap.to('.links', { opacity: 1, duration: 1, delay: 1.5 });
        gsap.to('.image', { opacity: 1, duration: 1, delay: 1.2 });
    }, [gsap]);

    return (
        <Grid component="main" container className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Grid item xs={false} sm={3} />
            <div className={internalClasses.textWrapper}>
                <Typography className={clsx(internalClasses.title, 'title fs-900 fw-900')} variant="h1">
                    {textProvider?.title}
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'p1 fs-200 fw-400')} variant="h1">
                    {textProvider?.subtitle}
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'p1 fs-200 fw-400')} variant="h1">
                    {textProvider?.subtitle2} <span className="fw-600">{textProvider?.subtitleBold1}</span>{' '}
                    {textProvider?.subtitle3} <span className="fw-600">{textProvider?.subtitleBold2}</span>
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'p1 fs-200 fw-400')} variant="h1">
                    {textProvider?.subtitle4}
                </Typography>

                <MediaList classes={{ root: clsx(internalClasses.mediaLinks, 'links') }} />
            </div>
            <Grid item xs={2} sm={3} />
            <Grid item xs={8} sm={6}>
                <img
                    className={clsx(internalClasses.image, 'image')}
                    src="images/profile-picture.jpg"
                    alt="Gabi Polanco profile"
                />
            </Grid>
        </Grid>
    );
};

export default Banner;
