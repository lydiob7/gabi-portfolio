import React from 'react';
import clsx from 'clsx';

import { Container, makeStyles } from '@material-ui/core';

import About from './About';
import Banner from './Banner';
import SelectedWorks from './SelectedWorks';

const useStyles = makeStyles((theme) => ({
    oliveBackground: {
        backgroundColor:
            theme.palette?.type === 'light' ? theme.palette.secondary.main : theme.palette.background.default
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
            <div className={internalClasses.oliveBackground}>
                <Container maxWidth="md">
                    <SelectedWorks />
                </Container>
            </div>
            <Container maxWidth="md">
                <About />
            </Container>
        </div>
    );
};

export default HomePage;
