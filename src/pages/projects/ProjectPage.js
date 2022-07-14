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
        fontSize: '1.5rem',
        color: theme.palette.primary.main,
        fontWeight: 500,
        padding: '32px 64px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
            textAlign: 'left'
        }
    },
    hereLink: {
        textTransform: 'lowercase',
        fontWeight: 700
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
    root: {
        position: 'relative',
        paddingBottom: '40vh'
    },
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

const ProjectPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const { projectId } = useParams();
    const dispatch = useDispatch();

    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);
    const project = useSelector(({ entities }) => entities.projects.currentProject);

    useLayoutEffect(() => {
        dispatch(setProject(projectId));
    }, [dispatch, projectId]);

    return (
        <Container maxWidth="md" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <GoBackArrow className={clsx(internalClasses.arrowBack, internalClasses.arrowBackTop)} />

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

                <Sections />
            </Grid>

            <GoBackArrow className={clsx(internalClasses.arrowBack, internalClasses.arrowBackBottom)} />
        </Container>
    );
};

export default ProjectPage;
