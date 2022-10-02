import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import MediaList from 'components/common/MediaList';

import banner from 'assets/images/banner.png';
import banner2 from 'assets/images/banner2.png';

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '2rem',
        [theme.breakpoints.up('md')]: {
            transform: 'translateX(3rem)',
            paddingBottom: '2rem'
        }
    },
    image: {
        width: '100%',
        maxHeight: '80vh',
        objectFit: 'contain',
        opacity: 0,
        [theme.breakpoints.up('md')]: {
            width: '90%',
            maxHeight: '75vh'
        }
    },
    mediaLinks: {
        opacity: 0,
        margin: '2rem auto'
    },
    photoCredits: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            transform: 'translateX(-100%)'
        }
    },
    root: {
        position: 'relative',
        minHeight: 'calc(100vh - 80px)'
    },
    subtitle: {
        margin: '.5rem 0',
        opacity: 0,
        fontSize: '1.2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    },
    textWrapper: {
        padding: '5vw',
        [theme.breakpoints.up('md')]: {
            padding: '0 5vw',
            position: 'absolute',
            left: 0,
            top: '20vh',
            width: '60%'
        }
    },
    title: {
        color: theme.palette.primary.main,
        marginBottom: '1.5rem',
        marginTop: '2rem',
        opacity: 0,
        fontSize: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
            marginTop: '0'
        }
    }
}));

const Banner = ({ classes, gsap, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.banner);
    const currentTheme = useSelector(({ ui }) => ui.appSettings.theme);

    useLayoutEffect(() => {
        gsap.to('.title', { opacity: 1, duration: 0.5, delay: 0.3 });
        gsap.to('.p1', { opacity: 1, duration: 0.5, delay: 0.6 });
        gsap.to('.links', { opacity: 1, duration: 0.5, delay: 1 });
        gsap.to('.image', { opacity: 1, duration: 0.5, delay: 0.8 });
    }, [gsap]);

    return (
        <Grid component="main" id="banner" container className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Grid item xs={false} sm={3} />
            <div className={internalClasses.textWrapper}>
                <Typography className={clsx(internalClasses.title, 'title fw-900')} variant="h1">
                    {textProvider?.title?.split(',')?.[0]},
                    <br />
                    {textProvider?.title?.split(',')?.[1]}
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'p1 fw-400')} variant="h1">
                    {textProvider?.subtitle}
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'p1 fw-400')} variant="h1">
                    {textProvider?.subtitle2} <span className="fw-600">{textProvider?.subtitleBold1}</span>{' '}
                    {textProvider?.subtitle3} <span className="fw-600">{textProvider?.subtitleBold2}</span>
                </Typography>
                <Typography className={clsx(internalClasses.subtitle, 'p1 fw-400')} variant="h1">
                    {textProvider?.subtitle4}
                </Typography>

                <MediaList
                    color={currentTheme === 'light' ? 'green' : ''}
                    classes={{ root: clsx(internalClasses.mediaLinks, 'links') }}
                />
            </div>
            <Grid item xs={2} sm={3} />
            <Grid className={internalClasses.imageWrapper} item xs={8} sm={6}>
                <img
                    className={clsx(internalClasses.image, 'image')}
                    src={currentTheme === 'light' ? banner : banner2}
                    alt={
                        currentTheme === 'light'
                            ? 'Gabi Polanco profile'
                            : 'Gabi Polanco on a sofa. Photography: Hugo Larcher'
                    }
                />
                {currentTheme === 'dark' && <p className={internalClasses.photoCredits}>PH: Hugo Larcher</p>}
            </Grid>
        </Grid>
    );
};

export default Banner;
