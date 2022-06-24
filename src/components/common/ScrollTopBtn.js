import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        right: '10vw',
        bottom: '10vh',
        zIndex: 999
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
        width: '100px',
        height: '100px',
        textAlign: 'center',
        lineHeight: '37px',
        borderRadius: '50%',
        padding: 0,
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        transform: 'rotate(180deg)',
        transition: 'transform .4s ease',
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

const rootElement = document.documentElement;

function ScrollTopBtn() {
    const internalClasses = useStyles();
    const location = useLocation();

    const [section, setSection] = useState(1);
    const [isArrowWhite, setIsArrowWhite] = useState(false);

    const themeColor = useSelector(({ ui }) => ui.appSettings?.theme);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (rootElement.scrollTop > 1900) setSection(4);
            else if (rootElement.scrollTop > 1200) setSection(3);
            else if (rootElement.scrollTop > 500) setSection(2);
            else setSection(1);
            if (themeColor === 'light' && location.pathname === '/home') {
                if (rootElement.scrollTop > 1660) setIsArrowWhite(false);
                else if (rootElement.scrollTop > 210) setIsArrowWhite(true);
                else setIsArrowWhite(false);
            } else setIsArrowWhite(false);
        });

        return () => window.removeEventListener('scroll', () => {});
    }, [location.pathname, themeColor]);

    function scroll() {
        const sectionOptions = {
            1: 791,
            2: 1450,
            3: 2400,
            4: 0
        };
        rootElement.scrollTo({
            top: sectionOptions[section],
            behavior: 'smooth'
        });
    }

    return (
        <div className={internalClasses.root}>
            <div
                onClick={scroll}
                className={clsx(
                    internalClasses.backToTop,
                    section === 4 && internalClasses.rotate,
                    isArrowWhite ? internalClasses.whiteBackground : internalClasses.purpleBackground
                )}
            >
                <svg width="16" height="82" viewBox="0 0 24 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9394 0.939339L1.39341 10.4853C0.807624 11.0711 0.807624 12.0208 1.39341 12.6066C1.9792 13.1924 2.92894 13.1924 3.51473 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 92L13.5 2L10.5 2L10.5 92L13.5 92Z"
                        className={isArrowWhite ? internalClasses.purpleArrow : internalClasses.whiteArrow}
                    />
                </svg>
            </div>
        </div>
    );
}

export default ScrollTopBtn;
