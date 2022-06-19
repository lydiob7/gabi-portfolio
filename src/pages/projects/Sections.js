import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    checkOutLink: {
        fontSize: '2rem',
        color: theme.palette.primary.main,
        fontWeight: 700,
        padding: '32px 64px',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        }
    },
    hereLink: {
        textDecoration: 'underline!important'
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        '& img': {
            height: '100%'
        }
    },
    imageSizeAuto: {
        height: 'auto',
        width: '100%',
        '&>img': {
            width: '100%'
        }
    },
    imageSizeNormal: {
        height: '60vh'
    },
    imagesSlideWrapper: {
        display: 'flex',
        gap: '2rem'
    },
    section: {
        position: 'relative',
        paddingTop: '80px!important'
    },
    sectionContent: {
        margin: '1rem 0'
    },
    sectionIndex: {
        [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            top: '50px',
            left: 0,
            transform: 'translateX(-100%)'
        }
    }
}));

const Sections = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const project = useSelector(({ entities }) => entities.projects.currentProject?.post);
    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);

    const Paragraph = (params) => {
        const sizeClass = `fs-${params?.size}`;
        const weightClass = `fw-${params?.weight}`;

        return (
            <Grid item xs={12} className={internalClasses.sectionContent}>
                <Typography variant="body1" className={clsx(sizeClass, weightClass)}>
                    {params?.content}
                </Typography>
            </Grid>
        );
    };

    const Image = ({ content }) => {
        const sizeClass = content?.size === 'auto' ? internalClasses.imageSizeAuto : internalClasses.imageSizeNormal;

        return (
            <Grid item xs={12} className={internalClasses.sectionContent}>
                <div className={clsx(internalClasses.image, sizeClass)}>
                    {content?.src && <img src={content.src} alt={content?.alt} />}
                </div>
            </Grid>
        );
    };

    const ImagesSlide = ({ content }) => {
        return (
            <Grid item xs={12} className={internalClasses.sectionContent}>
                <div className={internalClasses.imagesSlideWrapper}>
                    {Array.isArray(content) &&
                        content.map((item) => (
                            <div className={clsx(internalClasses.image, internalClasses.imageSizeNormal)}>
                                {item?.src && <img src={item?.src} alt={item?.alt} />}
                            </div>
                        ))}
                </div>
            </Grid>
        );
    };

    const Video = ({ content }) => {
        return (
            <Grid item xs={12} md={5} className={internalClasses.sectionContent}>
                <div className={clsx(internalClasses.video)}>{content?.src && <video src={content.src} />}</div>
            </Grid>
        );
    };

    const renderProperElement = ({ type, ...rest }) => {
        const itemOptions = {
            image: Image,
            video: Video,
            paragraph: Paragraph,
            'images-slide': ImagesSlide
        };
        const Component = itemOptions[type];

        if (!Component) return null;

        return <Component {...rest} />;
    };

    return (
        <>
            {project?.map((section) => (
                <Grid
                    key={section?.id}
                    id={section?.id}
                    spacing={4}
                    container
                    className={internalClasses.section}
                    component="section"
                    item
                    xs={12}
                >
                    <Grid item xs={12} sm={3} lg={false} className={internalClasses.sectionIndex}>
                        <Typography variant="body1" className="fs-biggest fw-800">
                            {section?.sectionNumber}.
                        </Typography>
                    </Grid>

                    <Grid item container xs={12} sm={9} lg={12}>
                        {section?.content?.map((item) => renderProperElement(item))}
                    </Grid>
                </Grid>
            ))}

            <Typography variant="body1" className={clsx(internalClasses.checkOutLink, 'fs-biggest fw-600')}>
                {textProvider?.checkHereLink}{' '}
                <a rel="noreferrer" target="_blank" href={project?.behanceLink} className={internalClasses?.hereLink}>
                    {textProvider?.hereTitle}
                </a>
            </Typography>
        </>
    );
};

export default Sections;
