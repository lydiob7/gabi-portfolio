import React from 'react';
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
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
        marginBottom: '5vh'
    },
    root: {
        padding: '10vh 0',
        minHeight: '100vh'
    }
}));

const About = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.about);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle title={textProvider?.title} />

            <Grid spacing={8} container className={clsx(internalClasses.contentWrapper)}>
                <Grid item xs={9}>
                    <Typography variant="body1" className={clsx(internalClasses.content, 'fs-400')}>
                        {textProvider?.content}
                    </Typography>
                    <Typography variant="body1" className={clsx(internalClasses.contentHighlight, 'fs-400 fw-600')}>
                        {textProvider?.contentHighlight}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <ul className={internalClasses.linksWrapper}>
                        <li className="fs-100 fw-800">
                            <a href={textProvider?.linkedinLink} target="_blank" rel="noreferrer">
                                {textProvider?.linkedinLinkText}
                            </a>
                        </li>
                        <li className="fs-100 fw-800">
                            <a href={textProvider?.cvLink} download>
                                {textProvider?.cvLinkText}
                            </a>
                        </li>
                        <li className="fs-100 fw-800">
                            <a href={textProvider?.behanceLink} target="_blank" rel="noreferrer">
                                {textProvider?.behanceLinkText}
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>

            <a
                target="_blank"
                rel="noreferrer"
                href="mailto:gabrielapolancoferreyra@gmail.com"
                style={{ position: 'relative' }}
            >
                <Typography variant="body1" className={clsx(internalClasses.availabilityLink, 'fs-biggest fw-800')}>
                    {textProvider?.askForAvailability}
                </Typography>
            </a>
        </div>
    );
};

export default About;
