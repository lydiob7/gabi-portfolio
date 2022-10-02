import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    large: {
        transform: 'scale(1.2)'
    },
    root: {
        '& .path': {
            fill: '#AA94FB'
        }
    },
    small: {
        transform: 'scale(.8)'
    }
}));

const Email = ({ className, width = '37', height = '27', size = 'default', ...props }) => {
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
            <path
                className="path"
                d="M33.875 0.6875H3.125C2.44538 0.6875 1.7936 0.957477 1.31304 1.43804C0.832477 1.9186 0.5625 2.57038 0.5625 3.25V23.75C0.5625 24.4296 0.832477 25.0814 1.31304 25.562C1.7936 26.0425 2.44538 26.3125 3.125 26.3125H33.875C34.5546 26.3125 35.2064 26.0425 35.687 25.562C36.1675 25.0814 36.4375 24.4296 36.4375 23.75V3.25C36.4375 2.57038 36.1675 1.9186 35.687 1.43804C35.2064 0.957477 34.5546 0.6875 33.875 0.6875ZM31.0562 3.25L18.5 11.9369L5.94375 3.25H31.0562ZM3.125 23.75V4.41594L17.7697 14.5506C17.9842 14.6994 18.239 14.7791 18.5 14.7791C18.761 14.7791 19.0158 14.6994 19.2303 14.5506L33.875 4.41594V23.75H3.125Z"
            />
        </svg>
    );
};

export default Email;
