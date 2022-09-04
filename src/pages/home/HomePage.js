import React from 'react';
import clsx from 'clsx';

import { Container, makeStyles } from '@material-ui/core';

import About from './About';
import Banner from './Banner';
import SelectedWorks from './SelectedWorks';

const useStyles = makeStyles((theme) => ({
    beigeBackground: {
        backgroundColor: theme.palette?.type === 'light' ? theme.palette.beige.main : theme.palette.background.default
    },
    purpleBackground: {
        backgroundColor: theme.palette?.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    },
    root: {}
}));

const HomePage = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Container maxWidth="md">
                <Banner />
            </Container>
            <div className={internalClasses.purpleBackground}>
                <Container maxWidth="md">
                    <SelectedWorks />
                </Container>
            </div>
            <div>
                <Container maxWidth="md">
                    <About />
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
