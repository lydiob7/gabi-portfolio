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

const Linkedin = ({ classes, width = '34', height = '34', size = 'default', ...props }) => {
    const internalClasses = useStyles();

    return (
        <svg
            className={clsx(
                internalClasses.root,
                classes?.root,
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7152 11.9483H18.9052V15.0316C19.7968 13.2583 22.0835 11.6649 25.5185 11.6649C32.1035 11.6649 33.6668 15.1949 33.6668 21.6716V33.6666H27.0002V23.1466C27.0002 19.4583 26.1085 17.3783 23.8385 17.3783C20.6902 17.3783 19.3818 19.6199 19.3818 23.1449V33.6666H12.7152V11.9483ZM1.2835 33.3833H7.95016V11.6649H1.2835V33.3833ZM8.90516 4.58325C8.90541 5.14204 8.79459 5.69531 8.57914 6.2109C8.36369 6.72648 8.04792 7.19411 7.65016 7.58659C6.84416 8.38763 5.75318 8.83601 4.61683 8.83325C3.48248 8.83249 2.39401 8.38525 1.58683 7.58825C1.19052 7.19444 0.875806 6.72629 0.660736 6.21064C0.445665 5.69498 0.334461 5.14196 0.333496 4.58325C0.333496 3.45492 0.783496 2.37492 1.5885 1.57825C2.39497 0.780183 3.4839 0.332753 4.6185 0.333252C5.75516 0.333252 6.84516 0.781586 7.65016 1.57825C8.4535 2.37492 8.90516 3.45492 8.90516 4.58325Z"
            />
        </svg>
    );
};

export default Linkedin;
