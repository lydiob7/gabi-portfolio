import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    section: {
        position: 'relative',
        paddingTop: '80px!important'
    },
    sectionIndex: {
        [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            top: '50px',
            left: 0,
            transform: 'translateX(-100%)'
        }
    }
}));

const Sections = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const project = useSelector(({ entities }) => entities.projects.currentProject);

    return (
        <>
            <Grid id="brief" spacing={4} container className={internalClasses.section} component="section" item xs={12}>
                <Grid item xs={12} sm={3} lg={false} className={internalClasses.sectionIndex}>
                    <Typography variant="body1" className="fs-biggest fw-800">
                        01.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={12}>
                    <Typography variant="body1" className={clsx(internalClasses.sectionContent, 'fs-200')}>
                        {project?.brief}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ height: '60vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ height: '60vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ height: '60vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
            </Grid>
            <Grid
                id="research"
                spacing={4}
                container
                className={internalClasses.section}
                component="section"
                item
                xs={12}
            >
                <Grid item xs={12} sm={3} lg={false} className={internalClasses.sectionIndex}>
                    <Typography variant="body1" className="fs-biggest fw-800">
                        02.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '60vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
                <Grid item xs={12} sm={9} lg={12}>
                    <Typography variant="body1" className={clsx(internalClasses.sectionContent, 'fs-200')}>
                        {project?.research}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                id="visualConcept"
                spacing={4}
                container
                className={internalClasses.section}
                component="section"
                item
                xs={12}
            >
                <Grid item xs={12} sm={3} lg={false} className={internalClasses.sectionIndex}>
                    <Typography variant="body1" className="fs-biggest fw-800">
                        03.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={12}>
                    <Typography variant="body1" className={clsx(internalClasses.sectionContent, 'fs-200')}>
                        {project?.visualConcept}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '40vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '40vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '40vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '40vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                </Grid>
            </Grid>
            <Grid
                id="prototype"
                spacing={4}
                container
                className={internalClasses.section}
                component="section"
                item
                xs={12}
            >
                <Grid item xs={12} sm={3} lg={false} className={internalClasses.sectionIndex}>
                    <Typography variant="body1" className="fs-biggest fw-800">
                        04.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={12}>
                    <Typography variant="body1" className={clsx(internalClasses.sectionContent, 'fs-200')}>
                        {project?.prototype}
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Grid item xs={12} md={5}>
                        <div style={{ height: '80vh', width: '100%', backgroundColor: '#C4C4C4' }}></div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Sections;
