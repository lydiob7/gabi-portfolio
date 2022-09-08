import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Hidden, makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';
import SmallArrow from 'components/common/SmallArrow';

const useStyles = makeStyles((theme) => ({
    caseStudyTitle: {
        position: 'relative',
        transition: 'transform .4s ease',
        '& a': {
            display: 'flex',
            width: '100%'
        },
        '& .project-image': {
            position: 'absolute',
            overflow: 'hidden',
            right: '0',
            top: '-50%',
            width: '40%',
            transition: 'all .8s ease',
            opacity: '0',
            '&>img': {
                width: '100%',
                objectFit: 'cover'
            }
        },
        '&:hover': {
            '& .MuiTypography-root': {
                transform: 'scale(.8) translateX(-20%)',
                [theme.breakpoints.up('md')]: {
                    transform: 'scale(.6) translateX(-60%)'
                },
                '&::after': {
                    width: '120%'
                }
            },
            '& .arrow': {
                transform: 'scale(1)'
            },
            '& .project-image': {
                opacity: '1',
                '&.skew-1': {
                    transform: 'skew(2deg, 3deg) rotateY(-10deg)'
                },
                '&.skew-2': {
                    transform: 'skew(0, -1deg) rotateY(-10deg)'
                },
                '&.skew-3': {
                    transform: 'skew(-2deg, -3deg) rotateY(-10deg)'
                }
            }
        }
    },
    caseStudyTitleWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginTop: '1rem',
        '& .arrow': {
            transition: 'transform .4s ease',
            marginLeft: '-15%',
            transform: 'scale(0)'
        }
    },
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
        marginLeft: '70px',
        transition: 'transform .4s ease-in-out'
    },
    projectTitle: {
        display: 'inline-block',
        position: 'relative',
        textTransform: 'uppercase',
        color: '#ffffff',
        transition: 'transform .4s ease-in-out',
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
    projectTitleWrapper: {
        marginTop: '1rem'
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

const SelectedWorks = ({ classes, gsap, ...props }) => {
    const internalClasses = useStyles();

    const currentLanguage = useSelector(({ ui }) => ui.appSettings?.currentLanguage);
    const projectsList = useSelector(({ entities }) => entities?.projects?.list);
    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.selectedWorks);

    useLayoutEffect(() => {
        const textParagraphs = ['.works-p1', '.works-p2', '.works-p3'];
        textParagraphs.forEach((cl) => {
            gsap.fromTo(
                cl,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: cl,
                        start: 'top center',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });

        const caseStudies = ['.works-cs-1', '.works-cs-2', '.works-cs-3', '.works-wd-1', '.works-wd-2', '.works-wd-3'];
        caseStudies.forEach((cl) => {
            gsap.fromTo(
                cl,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: cl,
                        start: 'top bottom-=200',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
    }, [gsap]);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle
                classes={{
                    title: clsx(internalClasses.pageTitle, 'works-p1'),
                    line: clsx(internalClasses.pageTitleLine, 'works-p1')
                }}
                title={textProvider?.title}
            />

            <div id="case-studies" className={internalClasses.projectsContainer}>
                <Typography variant="h2" className={clsx(internalClasses.sectionTitle, 'works-p2 fs-300 fw-600')}>
                    {textProvider?.caseStudiesTitle}
                </Typography>

                <div className={internalClasses?.titleWrapper}>
                    {projectsList
                        ?.filter((project) => project?.type === 'case-study')
                        ?.map((project, index) => (
                            <div
                                key={project.id}
                                className={clsx(internalClasses.caseStudyTitle, `works-cs-${index + 1}`)}
                            >
                                {project?.status === 'ready' ? (
                                    <Link to={`/project/${project.id}`}>
                                        <div className={internalClasses.caseStudyTitleWrapper}>
                                            <Typography
                                                variant="h3"
                                                className={clsx(internalClasses.projectTitle, 'fw-600')}
                                            >
                                                <span className={clsx(internalClasses.projectNumber, 'fw-500')}>
                                                    0{index + 1}/
                                                </span>{' '}
                                                {project.title}
                                            </Typography>
                                            <Hidden xsDown>
                                                <span className="arrow">
                                                    <SmallArrow />
                                                </span>
                                            </Hidden>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className={internalClasses.caseStudyTitleWrapper}>
                                        <Typography
                                            variant="h3"
                                            className={clsx(internalClasses.projectTitle, 'fw-600')}
                                        >
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
                                        <Hidden xsDown>
                                            <span className="arrow">
                                                <SmallArrow />
                                            </span>
                                        </Hidden>
                                    </div>
                                )}

                                <Hidden xsDown>
                                    <Typography
                                        variant="body1"
                                        className={clsx(internalClasses.projectSubtitle, 'fs-300 fw-600')}
                                    >
                                        {project.data?.[currentLanguage]?.subtitle}
                                    </Typography>
                                </Hidden>

                                {project?.status === 'ready' ? (
                                    <Link to={`/project/${project.id}`} className={`project-image skew-${index + 1}`}>
                                        <img src={project?.img} alt={project?.title} />
                                    </Link>
                                ) : (
                                    <div className={`project-image skew-${index + 1}`}>
                                        <img src={project?.img} alt={project?.title} />
                                    </div>
                                )}
                            </div>
                        ))}
                </div>

                <Typography variant="h2" className={clsx(internalClasses.sectionTitle, 'works-p3 fs-300 fw-600')}>
                    {textProvider?.webDesignTitle}
                </Typography>

                <div id="web-design" className={internalClasses?.titleWrapper}>
                    {projectsList
                        ?.filter((project) => project?.type === 'web-design')
                        ?.map((project, index) => (
                            <div
                                className={clsx(internalClasses.projectTitleWrapper, `works-wd-${index + 1}`)}
                                key={project.id}
                            >
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
