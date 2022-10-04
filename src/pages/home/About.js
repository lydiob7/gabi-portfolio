import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { makeStyles, Typography } from '@material-ui/core';

import SectionTitle from 'components/common/SectionTitle';
import MediaList from 'components/common/MediaList';
import aboutImg from 'assets/images/about.png';
import resume from 'assets/resume.pdf';

const useStyles = makeStyles((theme) => ({
    content: {
        fontSize: '1.1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    },
    credits: {
        fontSize: '.9rem',
        position: 'absolute',
        bottom: '.3rem',
        left: '0',
        width: '100%',
        textAlign: 'center'
    },
    footer: {
        color: theme.palette.type === 'light' ? theme.palette.green.main : theme.palette.text.primary,
        marginTop: '1rem',
        fontSize: '.8rem',
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        marginBottom: '1.8rem',
        borderTop:
            theme.palette.type === 'light'
                ? `2px solid ${theme.palette.primary.main}`
                : `2px solid ${theme.palette.text.primary}`,
        borderBottom:
            theme.palette.type === 'light'
                ? `2px solid ${theme.palette.primary.main}`
                : `2px solid ${theme.palette.text.primary}`,
        '&>span': {
            fontWeight: '600'
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: '1rem',
            fontSize: '1.2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    },
    pageTitle: {
        color: theme.palette.primary.main
    },
    pageTitleLine: {
        backgroundColor: `${theme.palette.primary.main}!important`
    },
    root: {
        position: 'relative',
        padding: '10vh 0 1px 0',
        [theme.breakpoints.up('md')]: {
            minHeight: '100vh'
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        gap: '4rem',
        marginTop: '5rem',
        paddingBottom: '4rem',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            padding: '0 2rem 10rem 2rem'
        },
        [theme.breakpoints.up('md')]: {
            alignItems: 'center'
        },
        '&>.image-wrapper': {
            flex: '1 0 100%',
            '&>img': {
                width: '100%'
            },
            [theme.breakpoints.up('sm')]: {
                flex: '1 0 40%'
            }
        },
        '&>.content-wrapper': {
            '&>.links-wrapper': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '1rem',
                '& .resume': {
                    color: theme.palette.primary.main,
                    textDecoration: 'underline',
                    fontWeight: '600',
                    fontSize: '1rem',
                    [theme.breakpoints.up('md')]: {
                        fontSize: '1.7rem',
                        margin: '2rem 0'
                    }
                },
                '& > .media-links': {
                    transform: 'scale(0.7)',
                    [theme.breakpoints.up('md')]: {
                        transform: 'scale(1)',
                        marginBottom: '2rem'
                    }
                },
                [theme.breakpoints.up('md')]: {
                    display: 'block'
                }
            }
        }
    }
}));

const About = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const textProvider = useSelector(({ ui }) => ui.textContent?.homePage?.about);
    const currentTheme = useSelector(({ ui }) => ui.appSettings.theme);

    return (
        <div className={clsx(internalClasses.root, classes?.root)} {...props}>
            <SectionTitle
                id="about"
                title={textProvider?.title}
                classes={{
                    title: clsx(internalClasses.pageTitle, 'fade-in'),
                    line: clsx(internalClasses.pageTitleLine, 'fade-in')
                }}
            />

            <div className={clsx(internalClasses.wrapper)}>
                <div className="fade-in image-wrapper">
                    <img src={aboutImg} alt="Gabriela Polanco on a sailboat" />
                </div>
                <div className="content-wrapper">
                    {Array.isArray(textProvider?.content) ? (
                        textProvider.content.map((paragraph) => (
                            <Typography
                                key={paragraph}
                                variant="body1"
                                className={clsx(internalClasses.content, 'fade-in')}
                            >
                                {paragraph}
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body1" className={clsx(internalClasses.content, 'fade-in')}>
                            {textProvider?.content}
                        </Typography>
                    )}
                    <div className="links-wrapper">
                        <a className="fade-in" href={resume} download="Gabriela Polanco-Ferreyra Resume">
                            <Typography className="resume">Resume</Typography>
                        </a>
                        <MediaList
                            classes={{ root: clsx('media-links', 'fade-in') }}
                            color={currentTheme === 'light' ? 'green' : ''}
                            size="small"
                        />
                    </div>
                </div>
            </div>

            <Typography variant="body1" className={clsx(internalClasses.footer, 'fade-in-bottom')}>
                {textProvider?.content2} <span>{textProvider?.contentHighlight}</span>
            </Typography>
            <Typography variant="body1" className={internalClasses.credits}>
                Designed by Gabi Polanco and developed by{' '}
                <a href="https://tomiscattini.com" target="_blank" rel="noreferrer">
                    Tomi Scattini
                </a>{' '}
                (Itakhi) {new Date().getFullYear()}
            </Typography>
        </div>
    );
};

export default About;
