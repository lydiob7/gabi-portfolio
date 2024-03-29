import React from 'react';

import { withStyles, Switch } from '@material-ui/core';

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 40,
        height: 24,
        padding: 0,
        display: 'flex'
    },
    switchBase: {
        padding: 2,
        color: '#000000',
        '&$checked': {
            transform: 'translateX(12px)',
            color: '#000000',
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main
            }
        }
    },
    thumb: {
        width: '12px',
        height: '12px',
        boxShadow: 'none'
    },
    track: {
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: 1000,
        opacity: 1,
        backgroundColor: theme.palette.primary.main
    },
    checked: {}
}))(Switch);

const CustomSwitch = ({ ...props }) => {
    return <AntSwitch size="small" {...props} />;
};

export default CustomSwitch;
