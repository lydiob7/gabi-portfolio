import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    list: {
        paddingLeft: '1rem'
    },
    listItem: {
        fontFamily: "'Barlow', sans-serif",
        marginBottom: '1rem',
        listStyle: 'inside'
    }
}));

const ListItem = (params) => {
    const sizeClass = `fs-${params?.size}`;
    const weightClass = `fw-${params?.weight}`;

    return <li className={clsx(sizeClass, weightClass, params.internalClasses.listItem)}>{params?.content}</li>;
};

const List = ({ listItems }) => {
    const internalClasses = useStyles();
    return (
        <ul className={internalClasses?.list}>
            {Array.isArray(listItems) &&
                listItems?.map((item) => <ListItem internalClasses={internalClasses} {...item} />)}
        </ul>
    );
};

export default List;
