import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        placeContent: 'center',
        borderRadius: '500px',
        height: '3rem',
        width: '3rem',
        backgroundColor: theme.palette.background.default,
        '& .path': {
            fill: '#AA94FB'
        }
    }
}));

const SmallArrow = ({ className }) => {
    const internalClasses = useStyles();

    return (
        <div className={clsx(internalClasses.root, className)}>
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    className="path"
                    d="M26.4357 13.0607C27.0214 12.4749 27.0214 11.5251 26.4357 10.9393L16.8897 1.3934C16.3039 0.807615 15.3542 0.807615 14.7684 1.3934C14.1826 1.97919 14.1826 2.92894 14.7684 3.51472L23.2537 12L14.7684 20.4853C14.1826 21.0711 14.1826 22.0208 14.7684 22.6066C15.3542 23.1924 16.3039 23.1924 16.8897 22.6066L26.4357 13.0607ZM0.625 13.5L25.375 13.5L25.375 10.5L0.625 10.5L0.625 13.5Z"
                />
            </svg>
        </div>
    );
};

export default SmallArrow;
