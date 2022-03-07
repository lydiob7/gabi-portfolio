import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import rito1 from 'assets/images/rito1.png';
import rito2 from 'assets/images/rito2.png';
import rito3 from 'assets/images/rito3.png';

const useStyles = makeStyles((theme) => ({
    firstSectionImage: {
        height: '60vh'
    },
    fourthSectionImage: {
        height: '80vh',
        backgroundColor: '#C4C4C4'
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        '& img': {
            height: '100%'
        }
    },
    secondSectionImage: {
        height: '60vh',
        backgroundColor: '#C4C4C4'
    },
    section: {
        position: 'relative',
        paddingTop: '80px!important'
    },
    sectionContent: {
        marginBottom: '2rem'
    },
    sectionIndex: {
        [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            top: '50px',
            left: 0,
            transform: 'translateX(-100%)'
        }
    },
    thirdSectionImage: {
        height: '40vh',
        backgroundColor: '#C4C4C4'
    }
}));

const images = {
    rito: {
        image1: rito1,
        image2: rito2,
        image3: rito3,
        image4: '',
        image5: '',
        image6: '',
        image7: '',
        image8: '',
        image9: ''
    },
    'shaka-app': {
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        image7: '',
        image8: '',
        image9: ''
    }
};

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
                    <div className={clsx(internalClasses.image, internalClasses.firstSectionImage)}>
                        {images[project?.id]?.image1 && <img src={images[project.id].image1} alt={`${project?.id}1`} />}
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={clsx(internalClasses.image, internalClasses.firstSectionImage)}>
                        {images[project?.id]?.image2 && <img src={images[project.id].image2} alt={`${project?.id}2`} />}
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={clsx(internalClasses.image, internalClasses.firstSectionImage)}>
                        {images[project?.id]?.image3 && <img src={images[project.id].image3} alt={`${project?.id}3`} />}
                    </div>
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
                    <div className={clsx(internalClasses.image, internalClasses.secondSectionImage)}>
                        {images[project?.id]?.image4 && <img src={images[project.id].image4} alt={`${project?.id}4`} />}
                    </div>
                </Grid>
                <Grid item xs={12} sm={9} lg={12}>
                    <Typography variant="body1" className={clsx(internalClasses.sectionContent, 'fs-200')}>
                        {project?.research}
                    </Typography>
                    {project?.researchTwo && (
                        <Typography variant="body1" className={clsx(internalClasses.sectionContent, 'fs-200')}>
                            {project.researchTwo}
                        </Typography>
                    )}
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
                    <div className={clsx(internalClasses.image, internalClasses.thirdSectionImage)}>
                        {images[project?.id]?.image5 && <img src={images[project.id].image5} alt={`${project?.id}5`} />}
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={clsx(internalClasses.image, internalClasses.thirdSectionImage)}>
                        {images[project?.id]?.image6 && <img src={images[project.id].image6} alt={`${project?.id}6`} />}
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={clsx(internalClasses.image, internalClasses.thirdSectionImage)}>
                        {images[project?.id]?.image7 && <img src={images[project.id].image7} alt={`${project?.id}7`} />}
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={clsx(internalClasses.image, internalClasses.thirdSectionImage)}>
                        {images[project?.id]?.image8 && <img src={images[project.id].image8} alt={`${project?.id}8`} />}
                    </div>
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
                        <div className={clsx(internalClasses.image, internalClasses.fourthSectionImage)}>
                            {images[project?.id]?.image9 && (
                                <img src={images[project.id].image9} alt={`${project?.id}9`} />
                            )}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Sections;
