import React from 'react';
import clsx from 'clsx';

import { Container, makeStyles } from '@material-ui/core';

import Banner from './Banner';

const useStyles = makeStyles((theme) => ({
    mainBanner: {
        minHeight: '100vh'
    },
    root: {}
}));

const HomePage = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <div className={internalClasses.mainBanner}>
                <Container component="main" maxWidth="md">
                    <Banner />
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
