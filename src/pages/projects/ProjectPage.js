import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { setProject } from 'store/projectsSlice';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

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
        fontSize: '2rem',
        color: theme.palette.primary.main,
        fontWeight: 700,
        padding: '32px 64px',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    comment: {
        marginTop: '3rem',
        padding: '0 1rem'
    },
    hereLink: {
        textDecoration: 'underline!important'
    },
    projectTitle: {
        textTransform: 'uppercase'
    },
    root: {
        position: 'relative',
        paddingBottom: '40vh'
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
                    <Typography variant="h1" className={clsx(internalClasses.projectTitle, 'fs-biggest fw-600')}>
                        {project?.title}
                    </Typography>
                    <Typography variant="h2" className={clsx(internalClasses.projectSubtitle, 'fs-300')}>
                        {project?.subtitle}
                    </Typography>
                </Grid>

                <Grid component="main" container spacing={4} item xs={12}>
                    {['overview', 'scope', 'categories'].map((section) => (
                        <React.Fragment key={section}>
                            <Grid item xs={4}>
                                <Typography variant="h3" className={clsx('fs-200 fw-700 capitalize')}>
                                    {textProvider[`${section}Label`]}:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                {project && Array.isArray(project[section]) ? (
                                    project[section].map((subsection) => (
                                        <Typography key={subsection} variant="h3" className={clsx('fs-300 fw-400')}>
                                            {subsection}
                                        </Typography>
                                    ))
                                ) : (
                                    <Typography variant="h3" className={clsx('fs-300 fw-400')}>
                                        {project[section]}
                                    </Typography>
                                )}
                            </Grid>
                        </React.Fragment>
                    ))}

                    {project?.comment && (
                        <div className={internalClasses.comment}>
                            <Typography variant="body1" className="fs-100">
                                {project.comment}
                            </Typography>
                        </div>
                    )}
                </Grid>

                <SectionsNavigation />

                <Typography variant="body1" className={clsx(internalClasses.checkOutLink, 'fs-biggest fw-600')}>
                    {textProvider?.checkHereLink}{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={project?.behanceLink}
                        className={internalClasses?.hereLink}
                    >
                        {textProvider?.hereTitle}
                    </a>
                </Typography>

                <Sections />
            </Grid>

            <GoBackArrow className={clsx(internalClasses.arrowBack, internalClasses.arrowBackBottom)} />
        </Container>
    );
};

export default ProjectPage;
