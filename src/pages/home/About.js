import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';

const useStyles = makeStyles((theme) => ({
    availabilityLink: {
        position: 'absolute',
        bottom: '-30px',
        width: '100vw',
        color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.primary.main
    },
    content: {},
    contentHighlight: {
        color: theme.palette.primary.main,
        marginTop: '1rem'
    },
    contentWrapper: {
        alignItems: 'flex-end',
        padding: '15vh 0'
    },
    linksWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr'
    },
    root: {
        padding: '10vh 0',
        height: '100vh'
    }
}));

const About = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.about);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle title={textProvider?.title} />

            <Grid container className={clsx(internalClasses.contentWrapper)}>
                <Grid item xs={8}>
                    <Typography variant="body1" className={clsx(internalClasses.content, 'fs-400')}>
                        {textProvider?.content}
                    </Typography>
                    <Typography variant="body1" className={clsx(internalClasses.contentHighlight, 'fs-400 fw-600')}>
                        {textProvider?.contentHighlight}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <ul className={internalClasses.linksWrapper}>
                        <li>
                            <a href="/" target="_blank" rel="noreferrer">
                                {textProvider?.linkedinLink}
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank" rel="noreferrer">
                                {textProvider?.mediumLink}
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank" rel="noreferrer">
                                {textProvider?.cvLink}
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank" rel="noreferrer">
                                {textProvider?.behanceLink}
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>

            <Link to="/availability" style={{ position: 'relative' }}>
                <Typography variant="body1" className={clsx(internalClasses.availabilityLink, 'fs-biggest fw-800')}>
                    {textProvider?.askForAvailability}
                </Typography>
            </Link>
        </div>
    );
};

export default About;
