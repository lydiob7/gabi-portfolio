import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import BehanceIcon from 'components/common/custom-icons/Behance';
import EmailIcon from 'components/common/custom-icons/Email';
import LinkedinIcon from 'components/common/custom-icons/Linkedin';

const useStyles = makeStyles((theme) => ({
    greenIcon: {
        '& .path': {
            fill: theme.palette.green.main
        }
    },
    root: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '2rem'
    }
}));

const MediaList = ({ classes, color, size = 'default', ...props }) => {
    const internalClasses = useStyles();

    const { behanceLink, linkedinLink } = useSelector(({ ui }) => ui.textContent?.homePage?.about);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <a href={behanceLink} target="_blank" rel="noreferrer">
                <BehanceIcon className={color === 'green' ? internalClasses.greenIcon : ''} size={size} />
            </a>
            <a href={linkedinLink} target="_blank" rel="noreferrer">
                <LinkedinIcon className={color === 'green' ? internalClasses.greenIcon : ''} size={size} />
            </a>
            <a href="mailto:gabrielapolancoferreyra@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon className={color === 'green' ? internalClasses.greenIcon : ''} size={size} />
            </a>
        </div>
    );
};

export default MediaList;
