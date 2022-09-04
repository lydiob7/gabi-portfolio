import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { setProject } from 'store/projectsSlice';

import { Container, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';

import Sections from './Sections';
import SectionsNavigation from './SectionsNavigation';
import GoBackArrow from 'components/common/GoBackArrow';

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
        top: '5vh'
    },
    checkOutLink: {
        fontFamily: "'Barlow', sans-serif",
        fontSize: '1.8rem',
        color: '#FFFFFF',
        fontWeight: 500,
        padding: '32px 64px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
            textAlign: 'left'
        }
    },
    checkOutLinkBottom: {
        fontSize: '2rem',
        color: '#ffffff',
        fontWeight: 700,
        padding: '32px 64px',
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
        background: theme.palette.primary.main
    },
    hereLink: {
        textTransform: 'lowercase',
        fontWeight: 700
    },
    hereLinkBottom: {
        textDecoration: 'underline!important'
    },
    paddingTopAndBottom: {
        position: 'relative',
        padding: '130px 0',
        [theme.breakpoints.up('sm')]: {
            padding: '80px 0'
        }
    },
    projectSubtitle: {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem'
        }
    },
    projectTitle: {
        textTransform: 'uppercase',
        fontSize: '2rem',
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

    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);
    const project = useSelector(({ entities }) => entities.projects.currentProject);

    useLayoutEffect(() => {
        dispatch(setProject(projectId));
    }, [dispatch, projectId]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <div className={clsx(internalClasses.purpleBackground, internalClasses.paddingTopAndBottom)}>
                <Container maxWidth="md" style={{ position: 'relative' }}>
                    <GoBackArrow
                        className={clsx(internalClasses.arrowBack, internalClasses.arrowBackTop)}
                        color="black"
                    />

                    <Grid container spacing={8}>
                        <Grid component="header" item xs={12}>
                            <Typography variant="h1" className={clsx(internalClasses.projectTitle, 'fw-600')}>
                                {project?.title}
                            </Typography>
                            <Typography variant="h2" className={clsx(internalClasses.projectSubtitle)}>
                                {project?.subtitle}
                            </Typography>
                        </Grid>

                        <Grid component="main" container spacing={4} item xs={12}>
                            {['overview', 'scope', 'categories'].map((section) => (
                                <React.Fragment key={section}>
                                    <Grid item xs={5} sm={4}>
                                        <Typography variant="h3" className={clsx('fs-200 fw-700 capitalize')}>
                                            {textProvider[`${section}Label`]}:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7} sm={8}>
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

                        <Hidden smDown>
                            <SectionsNavigation />
                        </Hidden>

                        <Typography variant="body1" className={clsx(internalClasses.checkOutLink)}>
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
                <Container maxWidth="md" className={internalClasses.footer}>
                    <Typography variant="body1" className={clsx(internalClasses.checkOutLinkBottom, 'fw-600')}>
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
                        className={clsx(internalClasses.arrowBack, internalClasses.arrowBackBottom)}
                        color="white"
                    />
                </Container>
            </div>
        </div>
    );
};

export default ProjectPage;
