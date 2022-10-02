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

const Behance = ({ className, width = '40', height = '26', size = 'default', ...props }) => {
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
                d="M36.6667 3.66659H25V0.333252H36.6667V3.66659ZM39.5433 20.3333C38.8067 22.4949 36.1617 25.3333 31.0417 25.3333C25.9183 25.3333 21.7683 22.4516 21.7683 15.8749C21.7683 9.35825 25.6433 6.00825 30.8783 6.00825C36.015 6.00825 39.1517 8.97825 39.8367 13.3849C39.9667 14.2283 40.0183 15.3649 39.995 16.9516H26.6167C26.8333 22.3033 32.4217 22.4716 34.2633 20.3333H39.5433ZM26.7333 13.6666H35.0083C34.8333 11.0883 33.115 9.96825 30.88 9.96825C28.4367 9.96825 27.085 11.2483 26.7333 13.6666ZM10.7767 25.3133H0V0.368252H11.5883C20.715 0.503252 20.8883 9.44159 16.1217 11.8783C21.89 13.9783 22.0833 25.3133 10.7767 25.3133ZM5 10.3333H10.9733C15.1533 10.3333 15.8167 5.33325 10.4533 5.33325H5V10.3333ZM10.6517 15.3333H5V20.3599H10.5683C15.66 20.3599 15.3483 15.3333 10.6517 15.3333Z"
            />
        </svg>
    );
};

export default Behance;
