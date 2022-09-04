import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';

import appLogo from 'assets/images/logo.png';
import appLogoWhite from 'assets/images/logo-white.png';

const useStyles = makeStyles((theme) => ({
    fixed: {
        position: 'fixed',
        zIndex: 2
    },
    root: {
        position: 'absolute',
        display: 'flex',
        zIndex: 2,
        alignItems: 'center',
        minHeight: '80px',
        minWidth: '100vw',
        padding: '0 5vw',
        backgroundColor: 'transparent'
    },
    logo: {
        margin: '0'
    },
    logoWrapper: {
        position: 'fixed',
        zIndex: 999,
        maxWidth: '50%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // [theme.breakpoints.up('lg')]: {
        justifyContent: 'flex-start'
        // }
    },
    navbar: {
        // position: 'absolute',
        // [theme.breakpoints.up('lg')]: {
        position: 'relative',
        justifyContent: 'flex-end'
        // }
    }
}));

const rootElement = document.documentElement;

export default function GeneralHeader({ fixed }) {
    const classes = useStyles();
    const location = useLocation();

    const menuItems = useSelector(({ ui }) => ui.sidebar.menuItems);
    const appInformation = useSelector(({ ui }) => ui.appInformation);
    const themeColor = useSelector(({ ui }) => ui.appSettings?.theme);

    const [isLogoWhite, setIsLogoWhite] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (themeColor === 'light' && location.pathname === '/home') {
                if (rootElement.scrollTop > 2200) return setIsLogoWhite(false);
                if (rootElement.scrollTop > 730) return setIsLogoWhite(true);
            }
            setIsLogoWhite(false);
        });

        return () => window.removeEventListener('scroll', () => {});
    }, [location.pathname, themeColor]);

    return (
        <Grid component="header" container className={clsx(classes.root, fixed && classes.fixed)}>
            <Grid container className={classes.logoWrapper} item xs={12}>
                <Logo
                    className={classes.logo}
                    size="small"
                    title={appInformation?.appTitle}
                    imageSrc={isLogoWhite ? appLogoWhite : appLogo}
                />
            </Grid>
            <Grid className={classes.navbar} item container xs={12} alignItems="center">
                <Navbar appTitle={appInformation?.appTitle} menuItems={menuItems} />
            </Grid>
        </Grid>
    );
}
