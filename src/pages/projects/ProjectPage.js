import React, { useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { setProject } from 'store/projectsSlice';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import Sections from './Sections';
import SectionsNavigation from './SectionsNavigation';
import GoBackArrow from 'components/common/GoBackArrow';
import { changeLogoColor } from 'store/uiSlice';

const useStyles = makeStyles((theme) => ({
    arrowBack: {
        position: 'absolute',
        right: '5vw',
        zIndex: 999,
        [theme.breakpoints.up('md')]: {
            right: '0'
        },
        [theme.breakpoints.up('lg')]: {
            right: '-5vw'
        }
    },
    arrowBackBottom: {
        bottom: '5vh'
    },
    arrowBackTop: {
        top: '2vh'
    },
    checkOutLink: {
        fontFamily: "'Barlow', sans-serif",
        fontSize: '1.2rem',
        color: theme.palette.text.primary,
        fontWeight: 500,
        padding: '32px',
        [theme.breakpoints.up('sm')]: {
            padding: '32px 64px',
            fontSize: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem'
        }
    },
    checkOutLinkBottom: {
        fontSize: '1rem',
        color: theme.palette.text.primary,
        fontWeight: 700,
        padding: '32px 64px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    footer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '50vh'
    },
    purpleBackground: {
        background: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    },
    hereLink: {
        textTransform: 'lowercase',
        color: theme.palette.type === 'light' ? theme.palette.green.main : theme.palette.primary.main,
        fontWeight: 700
    },
    hereLinkBottom: {
        textDecoration: 'underline!important',
        color: theme.palette.green.main
    },
    paddingSides: {
        padding: '0',
        [theme.breakpoints.up('sm')]: {
            padding: '0 3rem'
        }
    },
    paddingTopAndBottom: {
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '130px',
        [theme.breakpoints.up('md')]: {
            paddingTop: '150px',
            paddingBottom: '150px'
        }
    },
    projectSubtitle: {
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    },
    projectTitle: {
        textTransform: 'uppercase',
        fontSize: '3rem',
        color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem'
        }
    },
    root: {},
    sectionContent: {
        fontFamily: "'Barlow', sans-serif",
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.3rem'
        }
    }
}));

const ProjectPage = ({ classes, gsap, ...props }) => {
    const internalClasses = useStyles();
    const { projectId } = useParams();
    const dispatch = useDispatch();

    const currentTheme = useSelector(({ ui }) => ui.appSettings.theme);
    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);
    const project = useSelector(({ entities }) => entities.projects.currentProject);

    useLayoutEffect(() => {
        dispatch(setProject(projectId));
    }, [dispatch, projectId]);

    useEffect(() => {
        if (currentTheme === 'light') dispatch(changeLogoColor('white'));
        else dispatch(changeLogoColor('default'));
    }, [currentTheme, dispatch]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <div
                className={clsx(
                    internalClasses.purpleBackground,
                    internalClasses.paddingTopAndBottom,
                    internalClasses.paddingSides
                )}
            >
                <Container maxWidth="lg" style={{ position: 'relative' }}>
                    <GoBackArrow
                        className={clsx(internalClasses.arrowBack, internalClasses.arrowBackTop)}
                        color={currentTheme === 'light' ? 'white' : 'default'}
                    />

                    <Grid container spacing={8}>
                        <Grid component="header" item xs={12}>
                            <Typography variant="h1" className={clsx(internalClasses.projectTitle, ' fw-600')}>
                                {project?.title}
                            </Typography>
                            <Typography variant="h2" className={clsx(internalClasses.projectSubtitle)}>
                                {project?.subtitle}
                            </Typography>
                        </Grid>

                        <Grid component="main" container spacing={4} item xs={12}>
                            {['overview', 'scope', 'categories'].map((section) => (
                                <React.Fragment key={section}>
                                    <Grid item xs={4} sm={5} md={4}>
                                        <Typography variant="h3" className={clsx('fs-200 fw-700 capitalize')}>
                                            {textProvider[`${section}Label`]}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} sm={7} md={6}>
                                        {project && Array.isArray(project[section]) ? (
                                            project[section].map((subsection) => (
                                                <Typography
                                                    key={subsection}
                                                    variant="body1"
                                                    className={clsx(internalClasses.sectionContent, 'fw-400')}
                                                >
                                                    {subsection}
                                                </Typography>
                                            ))
                                        ) : (
                                            <Typography
                                                variant="body1"
                                                className={clsx(internalClasses.sectionContent, 'fw-400')}
                                            >
                                                {project[section]}
                                            </Typography>
                                        )}
                                    </Grid>
                                </React.Fragment>
                            ))}
                        </Grid>

                        <Grid container item xs={12}>
                            <Grid item xs={false} md={2} />
                            <Grid item xs={12} md={8}>
                                <SectionsNavigation />
                            </Grid>
                            <Grid item xs={false} md={2} />
                        </Grid>

                        <Typography variant="body1" className={clsx(internalClasses.checkOutLink, 'fade-in')}>
                            {textProvider?.recommendation}{' '}
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href={project?.behanceLink}
                                className={internalClasses?.hereLink}
                            >
                                {textProvider?.hereTitle}
                            </a>
                            {textProvider?.recommendation2}
                        </Typography>
                    </Grid>
                </Container>
            </div>

            <Sections />

            <div className={internalClasses.purpleBackground}>
                <Container maxWidth="lg" className={internalClasses.footer}>
                    <Typography variant="body1" className={clsx(internalClasses.checkOutLinkBottom, 'fw-600 fade-in')}>
                        {textProvider?.checkHereLink}{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={project?.behanceLink}
                            className={internalClasses?.hereLinkBottom}
                        >
                            {textProvider?.hereTitle}
                        </a>
                    </Typography>
                    <GoBackArrow
                        className={clsx(internalClasses.arrowBack, internalClasses.arrowBackBottom, 'fade-in-bottom')}
                        color="white"
                    />
                </Container>
            </div>
        </div>
    );
};

export default ProjectPage;
