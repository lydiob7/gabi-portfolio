import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Layouts
import Footer from 'components/common/footer/Footer';
import ToastMessage from 'components/common/ToastMessage';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    }
}));

const NoLayout = ({ children, footer }) => {
    const classes = useStyles();

    const showFooter = footer === undefined ? false : footer;

    return (
        <div className={classes.root}>
            {children}
            {showFooter && <Footer />}
            <ToastMessage />
        </div>
    );
};

export default NoLayout;
