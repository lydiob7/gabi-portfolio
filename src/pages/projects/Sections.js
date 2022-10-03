import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageToOpen } from 'store/uiSlice';

import { Container, Grid, makeStyles } from '@material-ui/core';
import renderProperElement from './components/renderProperElement';
import { getRandomId } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0'
    },
    section: {
        padding: '40px 0!important'
    }
}));

const Sections = ({ classes, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    const handleOpenImage = (image) => dispatch(setImageToOpen(image));

    const project = useSelector(({ entities }) => entities.projects.currentProject?.post);

    return (
        <>
            {project?.map((section) => (
                <section
                    className={internalClasses.root}
                    key={getRandomId()}
                    id={section?.id}
                    style={{ backgroundColor: section?.backgroundColor }}
                >
                    {section?.noContainer ? (
                        <div>{section?.content?.map((item) => renderProperElement(item, handleOpenImage))}</div>
                    ) : (
                        <Container maxWidth="lg">
                            <Grid spacing={4} container className={internalClasses.section} item xs={12}>
                                <Grid item container xs={12}>
                                    {section?.content?.map((item) => renderProperElement(item, handleOpenImage))}
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                </section>
            ))}{' '}
        </>
    );
};

export default Sections;
