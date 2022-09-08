import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, makeStyles } from '@material-ui/core';
import ImageModal from '../../components/modals/ImageModal';
import renderProperElement from './components/renderProperElement';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: '40px 0!important'
    }
}));

const Sections = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const [imageToOpen, setImageToOpen] = useState(null);

    const project = useSelector(({ entities }) => entities.projects.currentProject?.post);

    return (
        <>
            {project?.map((section) => (
                <section key={section?.id} id={section?.id} style={{ backgroundColor: section?.backgroundColor }}>
                    {section?.noContainer ? (
                        <div>{section?.content?.map((item) => renderProperElement(item, setImageToOpen))}</div>
                    ) : (
                        <Container maxWidth="lg">
                            <Grid spacing={4} container className={internalClasses.section} item xs={12}>
                                <Grid item container xs={12}>
                                    {section?.content?.map((item) => renderProperElement(item, setImageToOpen))}
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                </section>
            ))}

            <ImageModal open={!!imageToOpen} onClose={() => setImageToOpen(null)} imageUrl={imageToOpen} />
        </>
    );
};

export default Sections;
