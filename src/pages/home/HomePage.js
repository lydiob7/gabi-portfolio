import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { Container, makeStyles } from '@material-ui/core';

import About from './About';
import Banner from './Banner';
import SelectedWorks from './SelectedWorks';
import { changeLogoColor } from 'store/uiSlice';

const useStyles = makeStyles((theme) => ({
    purpleBackground: {
        backgroundColor: theme.palette?.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    },
    root: {
        paddingTop: '130px',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '80px'
        }
    }
}));

const HomePage = ({ classes, gsap, ...props }) => {
    const internalClasses = useStyles();
    const dispatch = useDispatch();

    const currentTheme = useSelector(({ ui }) => ui.appSettings.theme);

    useEffect(() => {
        gsap.to('.main-logo', {
            scrollTrigger: {
                trigger: '#banner',
                start: 'top top+=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        dispatch(changeLogoColor('default'));
                    }
                }
            }
        });
        gsap.to('.main-logo', {
            scrollTrigger: {
                trigger: '#selected-works',
                start: 'top top',
                end: 'bottom top+=50',
                onToggle: ({ isActive }) => {
                    if (isActive && currentTheme === 'light') {
                        dispatch(changeLogoColor('white'));
                    }
                }
            }
        });
        gsap.to('.main-logo', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top top+=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        dispatch(changeLogoColor('default'));
                    }
                }
            }
        });
    }, [currentTheme, dispatch, gsap]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <Container maxWidth="lg">
                <Banner gsap={gsap} />
            </Container>
            <div className={internalClasses.purpleBackground}>
                <Container maxWidth="lg">
                    <SelectedWorks gsap={gsap} />
                </Container>
            </div>
            <div>
                <Container maxWidth="lg">
                    <About gsap={gsap} />
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
