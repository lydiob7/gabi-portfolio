import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';

const useStyles = makeStyles((theme) => ({
    projectsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        height: '100%',
        '&>div': {
            margin: '5vh 0'
        }
    },
    projectSubtitle: {
        marginLeft: '70px'
    },
    projectTitle: {
        textTransform: 'uppercase',
        color: theme.palette?.type === 'dark' ? theme.palette.primary.main : theme.palette.text.primary
    },
    root: {
        padding: '10vh 0',
        height: '100vh'
    }
}));

const SelectedWorks = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.selectedWorks);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle title={textProvider?.title} />

            <div className={internalClasses.projectsContainer}>
                <div>
                    <Link to={`/project/${textProvider?.firstProjectTitle?.toLowerCase()?.split(' ').join('-')}`}>
                        <Typography variant="h2" className={clsx(internalClasses.projectTitle, 'fs-biggest fw-600')}>
                            {textProvider?.firstProjectTitle}
                        </Typography>
                    </Link>
                    <Typography variant="body1" className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}>
                        {textProvider?.firstProjectSubtitle}
                    </Typography>
                </div>
                <div>
                    <Link to={`/project/${textProvider?.secondProjectTitle?.toLowerCase()?.split(' ').join('-')}`}>
                        <Typography variant="h2" className={clsx(internalClasses.projectTitle, 'fs-biggest fw-600')}>
                            {textProvider?.secondProjectTitle}
                        </Typography>
                    </Link>
                    <Typography variant="body1" className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}>
                        {textProvider?.secondProjectSubtitle}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SelectedWorks;
