import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    large: {
        transform: 'scale(1.2)'
    },
    root: {
        '& .path': {
            fill: '#0A010B'
        }
    },
    small: {
        transform: 'scale(.8)'
    }
}));

const ArrowDown = ({ className, width = '27', height = '24', size = 'default', ...props }) => {
    const internalClasses = useStyles();

    return (
        <svg
            className={clsx(
                internalClasses.root,
                className,
                size === 'small' ? internalClasses.small : '',
                size === 'large' ? internalClasses.large : ''
            )}
            {...props}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.7062 21.2699C20.5346 21.2727 21.2084 20.6033 21.2111 19.7749L21.256 6.27498C21.2588 5.44656 20.5895 4.77276 19.761 4.77C18.9326 4.76725 18.2588 5.43658 18.2561 6.26501L18.2161 18.2649L6.21622 18.225C5.38779 18.2223 4.71399 18.8916 4.71124 19.72C4.70848 20.5485 5.37782 21.2223 6.20624 21.225L19.7062 21.2699ZM0.988553 3.05078L18.647 20.827L20.7753 18.7128L3.11692 0.936525L0.988553 3.05078Z" />
        </svg>
    );
};

export default ArrowDown;
