import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { setProject } from 'store/projectsSlice';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectTitle: {
        textTransform: 'uppercase'
    },
    root: {}
}));

const ProjectPage = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const { projectId } = useParams();
    const dispatch = useDispatch();

    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);
    const project = useSelector(({ entities }) => entities.projects.currentProject);

    useLayoutEffect(() => {
        dispatch(setProject(projectId));
    }, []);

    return (
        <Container component="main" maxWidth="lg" className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1" className={clsx(internalClasses.projectTitle, 'fs-biggest fw-600')}>
                        {project?.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h2" className={clsx(internalClasses.projectSubtitle, 'fs-300')}>
                        {project?.subtitle}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProjectPage;
