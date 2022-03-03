import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import CallModule from 'components/modules/CallModule';
import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';

import { authRoles } from 'auth';
import appLogo from 'assets/images/logo.png';
import appLogoWhite from 'assets/images/logo-white.png';

const useStyles = makeStyles((theme) => ({
    fixed: {
        position: 'fixed',
        zIndex: 2
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '80px',
        minWidth: '100vw',
        padding: '0 5vw',
        backgroundColor: 'transparent'
    },
    logo: {
        margin: '20px 0',
        [theme.breakpoints.up('sm')]: {
            margin: '0'
        }
    },
    logoWrapper: {
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

export default function GeneralHeader({ fixed }) {
    const classes = useStyles();

    const menuItems = useSelector(({ ui }) => ui.sidebar.menuItems);
    const appInformation = useSelector(({ ui }) => ui.appInformation);
    const { authenticated, data } = useSelector(({ auth }) => auth.user);
    const darkTheme = useSelector(({ ui }) => ui.appSettings?.theme) === 'dark';

    return (
        <Grid component="header" container className={clsx(classes.root, fixed && classes.fixed)}>
            <Grid container className={classes.logoWrapper} item xs={6}>
                <Logo
                    className={classes.logo}
                    size="small"
                    title={appInformation?.appTitle}
                    imageSrc={darkTheme ? appLogoWhite : appLogo}
                />
                {authenticated && data?.role === authRoles.patient && (
                    <CallModule classes={{ button: classes.callButton }} />
                )}
            </Grid>
            <Grid className={classes.navbar} item container xs={6} alignItems="center">
                <Navbar appTitle={appInformation?.appTitle} menuItems={menuItems} />
            </Grid>
        </Grid>
    );
}