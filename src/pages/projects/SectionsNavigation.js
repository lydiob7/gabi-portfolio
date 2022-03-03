import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    navLink: {
        position: 'relative',
        marginBottom: '1.5rem',
        width: '100%',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '80%',
            bottom: '0',
            left: 0,
            borderBottom: `1px solid ${theme.palette.text.primary}`
        },
        '& a': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textTransform: 'uppercase',
            '& .text': {
                width: '35%'
            }
        }
    },
    root: {}
}));

const SectionsNavigation = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);

    return (
        <Grid component="nav" item xs={12} className={clsx(internalClasses.root, classes?.root)} {...props}>
            <ul>
                {['brief', 'research', 'visualConcept', 'prototype'].map((navItem, index) => (
                    <React.Fragment key={navItem}>
                        <li className={internalClasses.navLink}>
                            <HashLink to={`#${navItem}`}>
                                <span className="fs-200">0{index + 1}.</span>{' '}
                                <span className="text fs-800 fw-800">{textProvider[`${navItem}Label`]}</span>
                            </HashLink>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </Grid>
    );
};

export default SectionsNavigation;
