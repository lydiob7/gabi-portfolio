import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    arrowBack: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '150px',
        textAlign: 'center',
        lineHeight: '37px',
        background: theme.palette.primary.main,
        borderRadius: '50%',
        padding: 0,
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        transform: 'rotate(-90deg)',
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
    root: {}
}));

const GoBackArrow = ({ className, history, ...props }) => {
    const internalClasses = useStyles();

    return (
        <div onClick={() => history.goBack()} className={clsx(className, internalClasses.root)}>
            <div className={clsx(internalClasses.arrowBack)}>
                <svg width="24" height="92" viewBox="0 0 24 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9394 0.939339L1.39341 10.4853C0.807624 11.0711 0.807624 12.0208 1.39341 12.6066C1.9792 13.1924 2.92894 13.1924 3.51473 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 92L13.5 2L10.5 2L10.5 92L13.5 92Z"
                        fill="#DED7C5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default withRouter(GoBackArrow);