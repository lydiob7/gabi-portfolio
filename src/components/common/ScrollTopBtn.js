import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import { Hidden, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        right: '8vw',
        top: '85vh',
        zIndex: 999,
        [theme.breakpoints.up('sm')]: {
            top: '80vh'
        },
        [theme.breakpoints.up('md')]: {
            right: '10vw',
            bottom: '10vh'
        }
    },
    purpleBackground: {
        background: theme.palette.primary.main
    },
    whiteBackground: {
        background: theme.palette.type === 'dark' ? theme.palette.primary.main : '#FFFFFF'
    },
    purpleArrow: {
        fill: theme.palette.type === 'dark' ? '#FFFFFF' : theme.palette.primary.main
    },
    whiteArrow: {
        fill: '#FFFFFF'
    },
    backToTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        textAlign: 'center',
        lineHeight: '37px',
        borderRadius: '50%',
        padding: 0,
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        transform: 'rotate(180deg)',
        transition: 'transform .4s ease',
        [theme.breakpoints.up('sm')]: {
            width: '100px',
            height: '100px'
        },
        [theme.breakpoints.up('md')]: {
            width: '122px',
            height: '122px'
        },
        '& svg': {
            transition: 'transform .4s ease'
        },
        '&:hover svg': {
            transform: 'translateY(-10px)'
        },
        '&.show-back-to-top': {
            right: '30px',
            opacity: 1,
            visibility: 'visible'
        }
    },
    rotate: {
        transform: 'rotate(0)'
    }
}));

function ScrollTopBtn({ gsap }) {
    const internalClasses = useStyles();

    const [section, setSection] = useState(1);
    const [isArrowWhite, setIsArrowWhite] = useState(false);

    const hashLinkOptions = {
        1: '#case-studies',
        2: '#web-design',
        3: '#about',
        4: '#top'
    };

    useEffect(() => {
        gsap.to('.scroll-top-btn', {
            scrollTrigger: {
                trigger: '#banner',
                start: 'top top+=100',
                end: 'bottom bottom-=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        setSection(1);
                    }
                }
            }
        });
        gsap.to('.scroll-top-btn', {
            scrollTrigger: {
                trigger: '#selected-works',
                start: 'top top+=100',
                end: 'bottom top+=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        setSection(2);
                    }
                }
            }
        });
        gsap.to('.scroll-top-btn', {
            scrollTrigger: {
                trigger: '#selected-works',
                start: 'top bottom',
                end: 'bottom bottom-=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        setIsArrowWhite(true);
                    } else setIsArrowWhite(false);
                }
            }
        });
        gsap.to('.scroll-top-btn', {
            scrollTrigger: {
                trigger: '#web-design-content',
                start: 'top-=100 top+=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        setSection(3);
                    }
                }
            }
        });
        gsap.to('.scroll-top-btn', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top top+=100',
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        setSection(4);
                    }
                }
            }
        });
    }, [gsap]);

    return (
        <div className={clsx(internalClasses.root, 'scroll-top-btn')}>
            <HashLink
                to={hashLinkOptions[section]}
                className={clsx(
                    internalClasses.backToTop,
                    section === 4 && internalClasses.rotate,
                    isArrowWhite ? internalClasses.whiteBackground : internalClasses.purpleBackground
                )}
            >
                <Hidden xsDown>
                    <svg width="16" height="82" viewBox="0 0 24 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9394 0.939339L1.39341 10.4853C0.807624 11.0711 0.807624 12.0208 1.39341 12.6066C1.9792 13.1924 2.92894 13.1924 3.51473 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 92L13.5 2L10.5 2L10.5 92L13.5 92Z"
                            className={isArrowWhite ? internalClasses.purpleArrow : internalClasses.whiteArrow}
                        />
                    </svg>
                </Hidden>
                <Hidden smUp>
                    <svg width="9" height="50" viewBox="0 0 24 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9394 0.939339L1.39341 10.4853C0.807624 11.0711 0.807624 12.0208 1.39341 12.6066C1.9792 13.1924 2.92894 13.1924 3.51473 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 92L13.5 2L10.5 2L10.5 92L13.5 92Z"
                            className={isArrowWhite ? internalClasses.purpleArrow : internalClasses.whiteArrow}
                        />
                    </svg>
                </Hidden>
            </HashLink>
        </div>
    );
}

export default ScrollTopBtn;
