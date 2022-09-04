import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import ImageModal from '../../components/modals/ImageModal';
import renderProperElement from './components/renderProperElement';

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
        },
        '& > .MuiTypography-root': {
            fontSize: '2.5rem',
            color: theme.palette.primary.main,
            textTransform: 'uppercase',
            [theme.breakpoints.up('sm')]: {
                fontSize: '5rem'
            }
        }
    },
    sectionName: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}));

const Sections = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const [imageToOpen, setImageToOpen] = useState(null);

    const project = useSelector(({ entities }) => entities.projects.currentProject?.post);

    return (
        <Container maxWidth="md">
            {project?.map((section) => (
                <Grid
                    key={section?.id}
                    id={section?.id}
                    spacing={4}
                    container
                    className={internalClasses.section}
                    component="section"
                    item
                    xs={12}
                >
                    <Grid item xs={12} sm={3} lg={false} className={internalClasses.sectionIndex}>
                        <Typography variant="body1" className="fw-800">
                            {section?.sectionNumber}.{' '}
                            <span className={internalClasses.sectionName}>
                                {section?.id === 'visualConcept' ? 'visual concept' : section?.id}
                            </span>
                        </Typography>
                    </Grid>

                    <Grid item container xs={12} sm={9} lg={12}>
                        {section?.content?.map((item) => renderProperElement(item, setImageToOpen))}
                    </Grid>
                </Grid>
            ))}

            <ImageModal open={!!imageToOpen} onClose={() => setImageToOpen(null)} imageUrl={imageToOpen} />
        </Container>
    );
};

export default Sections;
