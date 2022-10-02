import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';

const useStyles = makeStyles((theme) => ({
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
    fixed: {
        position: 'fixed',
        zIndex: 2
    },
    logo: {
        margin: '0'
    },
    logoWrapper: {
        position: 'fixed',
        zIndex: 999,
        maxWidth: '50%',
        justifyContent: 'flex-start'
    },
    navbar: {
        position: 'relative',
        justifyContent: 'flex-end'
    }
}));

export default function GeneralHeader({ fixed }) {
    const classes = useStyles();

    const menuItems = useSelector(({ ui }) => ui.sidebar.menuItems);
    const appInformation = useSelector(({ ui }) => ui.appInformation);

    return (
        <Grid component="header" container className={clsx(classes.root, fixed && classes.fixed)}>
            <Grid container className={classes.logoWrapper} item xs={12}>
                <Logo className={classes.logo} size="small" title={appInformation?.appTitle} />
            </Grid>
            <Grid className={classes.navbar} item container xs={12} alignItems="center">
                <Navbar appTitle={appInformation?.appTitle} menuItems={menuItems} />
            </Grid>
        </Grid>
    );
}
