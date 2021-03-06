import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Hidden, makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';

const useStyles = makeStyles((theme) => ({
    comingSoon: {
        position: 'absolute',
        zIndex: 3,
        bottom: '-30%',
        right: '-10%',
        fontSize: '1rem',
        color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.primary.main
        // textShadow:
        //     theme.palette.type === 'dark' && '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000'
    },
    pageTitle: {
        color: '#ffffff'
    },
    pageTitleLine: {
        backgroundColor: '#ffffff'
    },
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
    projectNumber: {
        fontSize: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem'
        }
    },
    projectSubtitle: {
        marginLeft: '70px'
    },
    projectTitle: {
        display: 'inline-block',
        position: 'relative',
        textTransform: 'uppercase',
        color: '#ffffff',
        transition: 'color .3s ease-in-out',
        marginTop: '1rem',
        fontSize: '2.5rem',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-10%',
            width: 0,
            height: '50%',
            borderBottom: '3px solid #ffffff',
            transformOrigin: 'left center',
            transition: 'all .4s ease'
        },
        '&:hover::after': {
            width: '120%'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem'
        }
    },
    root: {
        padding: '10vh 0',
        minHeight: '100vh'
    },
    sectionTitle: {
        marginTop: '3rem'
    },
    titleWrapper: {
        paddingLeft: '3vw'
    }
}));

const SelectedWorks = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);
    const projectsList = useSelector(({ entities }) => entities?.projects?.list);
    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.selectedWorks);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle
                classes={{ title: internalClasses.pageTitle, line: internalClasses.pageTitleLine }}
                title={textProvider?.title}
            />

            <div id="case-studies" className={internalClasses.projectsContainer}>
                <Typography variant="h2" className={clsx(internalClasses.sectionTitle, 'fs-300 fw-600')}>
                    {textProvider?.caseStudiesTitle}
                </Typography>

                <div className={internalClasses?.titleWrapper}>
                    {projectsList
                        ?.filter((project) => project?.type === 'case-study')
                        ?.map((project, index) => (
                            <div key={project.id}>
                                {project?.status === 'ready' ? (
                                    <Link to={`/project/${project.id}`}>
                                        <Typography
                                            variant="h3"
                                            className={clsx(internalClasses.projectTitle, 'fw-600')}
                                        >
                                            <span className={clsx(internalClasses.projectNumber, 'fw-500')}>
                                                0{index + 1}/
                                            </span>{' '}
                                            {project.title}
                                        </Typography>
                                    </Link>
                                ) : (
                                    <Typography variant="h3" className={clsx(internalClasses.projectTitle, 'fw-600')}>
                                        {' '}
                                        <span className={clsx(internalClasses.projectNumber, 'fw-500')}>
                                            0{index + 1}/
                                        </span>{' '}
                                        {project.title}
                                        <Hidden smUp>
                                            <span className={internalClasses.comingSoon}>
                                                {textProvider?.comingSoonTitle}
                                            </span>
                                        </Hidden>
                                    </Typography>
                                )}
                                <Hidden xsDown>
                                    <Typography
                                        variant="body1"
                                        className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}
                                    >
                                        {project.data?.[currentLanguage]?.subtitle}
                                    </Typography>
                                </Hidden>
                            </div>
                        ))}
                </div>

                <Typography variant="h2" className={clsx(internalClasses.sectionTitle, 'fs-300 fw-600')}>
                    {textProvider?.webDesignTitle}
                </Typography>

                <div id="web-design" className={internalClasses?.titleWrapper}>
                    {projectsList
                        ?.filter((project) => project?.type === 'web-design')
                        ?.map((project, index) => (
                            <div key={project.id}>
                                {project?.status === 'ready' ? (
                                    <a target="_blank" rel="noreferrer" href={project.website}>
                                        <Typography
                                            variant="h3"
                                            className={clsx(internalClasses.projectTitle, 'fw-600')}
                                        >
                                            <span className={clsx(internalClasses.projectNumber, 'fw-500')}>
                                                0{index + 1}/
                                            </span>{' '}
                                            {project.title}
                                        </Typography>
                                    </a>
                                ) : (
                                    <Typography variant="h3" className={clsx(internalClasses.projectTitle, 'fw-600')}>
                                        <span className={clsx(internalClasses.projectNumber, 'fw-500')}>
                                            0{index + 1}/
                                        </span>{' '}
                                        {project.title}
                                        <Hidden smUp>
                                            <span className={internalClasses.comingSoon}>
                                                {textProvider?.comingSoonTitle}
                                            </span>
                                        </Hidden>
                                    </Typography>
                                )}
                                <Hidden xsDown>
                                    <Typography
                                        variant="body1"
                                        className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}
                                    >
                                        {project[currentLanguage]?.subtitle}
                                    </Typography>
                                </Hidden>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SelectedWorks;
