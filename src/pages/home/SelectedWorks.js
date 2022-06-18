import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';

const useStyles = makeStyles((theme) => ({
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
    projectSubtitle: {
        marginLeft: '70px'
    },
    projectTitle: {
        textTransform: 'uppercase',
        color: '#ffffff',
        transition: 'color .3s ease-in-out',
        '&:hover': {
            color: '#000000'
        }
    },
    root: {
        padding: '10vh 0',
        minHeight: '100vh'
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

            <div className={internalClasses.projectsContainer}>
                {projectsList
                    ?.filter((project) => project?.type === 'case-study')
                    ?.map((project) => (
                        <div key={project.id}>
                            <Link to={`/project/${project.id}`}>
                                <Typography
                                    variant="h2"
                                    className={clsx(internalClasses.projectTitle, 'fs-biggest fw-600')}
                                >
                                    {project.title}
                                </Typography>
                            </Link>
                            <Typography
                                variant="body1"
                                className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}
                            >
                                {project.data?.[currentLanguage]?.subtitle}
                            </Typography>
                        </div>
                    ))}

                {projectsList
                    ?.filter((project) => project?.type === 'web-design')
                    ?.map((project) => (
                        <div key={project.id}>
                            <a target="_blank" rel="noreferrer" href={project.website}>
                                <Typography
                                    variant="h2"
                                    className={clsx(internalClasses.projectTitle, 'fs-biggest fw-600')}
                                >
                                    {project.title}
                                </Typography>
                            </a>
                            <Typography
                                variant="body1"
                                className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}
                            >
                                {project[currentLanguage]?.subtitle}
                            </Typography>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SelectedWorks;
