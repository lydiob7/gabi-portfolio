import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, Hidden, makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';
// import MediaList from 'components/common/MediaList';

const useStyles = makeStyles((theme) => ({
    availabilityLink: {
        fontSize: '2rem',
        color: theme.palette.primary.main,
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            bottom: '-30px',
            width: '100vw',
            color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.primary.main,
            fontSize: '5rem'
        }
    },
    content: {
        fontSize: '1.1rem',
        fontWeight: '500',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem'
        }
    },
    contentHighlight: {
        color: theme.palette.primary.main,
        marginTop: '1rem',
        fontSize: '1.3rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    },
    contentWrapper: {
        alignItems: 'flex-end',
        padding: '15vh 0'
    },
    link: {
        fontSize: '1.2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem'
        }
    },
    linksWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
        marginBottom: '5vh',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'center'
        }
    },
    mediaLinks: {
        marginBottom: '2rem'
    },
    root: {
        padding: '10vh 0',
        minHeight: '100vh'
    }
}));

const About = ({ classes, gsap, ...props }) => {
    const internalClasses = useStyles();

    useLayoutEffect(() => {
        gsap.fromTo(
            '.about-title',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.about-title',
                    start: 'top center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.about-par1',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.about-par1',
                    start: 'top center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.about-par2',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.about-par2',
                    start: 'top bottom-=70',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.about-par3',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.about-par3',
                    start: 'top bottom-=40',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.about-links',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.about-links',
                    start: 'top bottom-=70',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.about);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle
                id="about"
                title={textProvider?.title}
                classes={{
                    title: 'about-title',
                    line: 'about-title'
                }}
            />

            <Grid spacing={8} container className={clsx(internalClasses.contentWrapper)}>
                <Grid item xs={12} md={9}>
                    <Typography variant="body1" className={clsx(internalClasses.content, 'about-par1')}>
                        {textProvider?.content}
                    </Typography>
                    <Typography variant="body1" className={clsx(internalClasses.contentHighlight, 'about-par2 fw-600')}>
                        {textProvider?.contentHighlight}
                    </Typography>
                </Grid>

                <Hidden mdUp>
                    <Grid item xs={6}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="mailto:gabrielapolancoferreyra@gmail.com"
                            style={{ position: 'relative' }}
                            className="about-par3"
                        >
                            <Typography variant="body1" className={clsx(internalClasses.availabilityLink, 'fw-800')}>
                                {textProvider?.askForAvailability}
                            </Typography>
                        </a>
                    </Grid>
                </Hidden>

                <Grid item xs={6} md={3}>
                    {/* <MediaList classes={{ root: internalClasses.mediaLinks }} size="small" /> */}
                    <ul className={clsx(internalClasses.linksWrapper, 'about-links')}>
                        <li className={clsx(internalClasses.link, 'fw-800')}>
                            <a href={textProvider?.linkedinLink} target="_blank" rel="noreferrer">
                                {textProvider?.linkedinLinkText}
                            </a>
                        </li>
                        <li className={clsx(internalClasses.link, 'fw-800')}>
                            <a href={textProvider?.cvLink} download>
                                {textProvider?.cvLinkText}
                            </a>
                        </li>
                        <li className={clsx(internalClasses.link, 'fw-800')}>
                            <a href={textProvider?.behanceLink} target="_blank" rel="noreferrer">
                                {textProvider?.behanceLinkText}
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>

            <Hidden smDown>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:gabrielapolancoferreyra@gmail.com"
                    style={{ position: 'relative' }}
                    className="about-par3"
                >
                    <Typography variant="body1" className={clsx(internalClasses.availabilityLink, 'fw-800')}>
                        {textProvider?.askForAvailability}
                    </Typography>
                </a>
            </Hidden>
        </div>
    );
};

export default About;
