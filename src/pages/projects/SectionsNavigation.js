import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Accordion, AccordionSummary, AccordionDetails, Grid, makeStyles } from '@material-ui/core';

import ImageModal from '../../components/modals/ImageModal';
import renderProperElement from './components/renderProperElement';
import ArrowDown from 'components/common/custom-icons/ArrowDown';

const useStyles = makeStyles((theme) => ({
    accordion: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:before': {
            display: 'none'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            bottom: '0',
            left: 0,
            borderBottom: `1px solid ${theme.palette.text.primary}`
        }
    },
    accordionDetails: {
        padding: '2rem'
    },
    navLink: {
        position: 'relative',
        '& .MuiAccordionSummary-content': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textTransform: 'uppercase',
            '& .text': {
                width: '70%'
            },
            '& .arrow': {
                transition: 'transform .3s ease',
                '& path': {
                    fill: theme.palette.text.primary
                }
            }
        },
        '& .Mui-expanded': {
            '& .arrow': {
                transform: 'rotate(-90deg)'
            }
        },
        width: '100%'
    },
    root: {},
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem'
        }
    }
}));

const SectionsNavigation = ({ classes, ...props }) => {
    const internalClasses = useStyles();

    const [imageToOpen, setImageToOpen] = useState(null);

    const project = useSelector(({ entities }) => entities.projects.currentProject);
    const textProvider = useSelector(({ ui }) => ui.textContent.projectPage);

    return (
        <Grid component="nav" item xs={12} className={clsx(internalClasses.root, classes?.root)} {...props}>
            {['brief', 'research', 'visualConcept', 'prototype'].map((navItem, index) => (
                <Accordion key={navItem} classes={{ root: internalClasses.accordion }}>
                    <AccordionSummary classes={{ root: clsx(internalClasses.navLink, 'fade-in') }}>
                        <span className="fs-200">0{index + 1}.</span>{' '}
                        <span className={clsx(internalClasses.title, 'text fw-800')}>
                            {textProvider[`${navItem}Label`]}
                            <ArrowDown className="arrow" />
                        </span>
                    </AccordionSummary>

                    <AccordionDetails classes={{ root: internalClasses.accordionDetails }}>
                        <Grid item container xs={12}>
                            {project?.[navItem]?.map((item) => renderProperElement(item, setImageToOpen))}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}

            <ImageModal open={!!imageToOpen} onClose={() => setImageToOpen(null)} imageUrl={imageToOpen} />
        </Grid>
    );
};

export default SectionsNavigation;
