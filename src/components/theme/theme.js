import { createTheme } from '@material-ui/core/styles';

export const theme = (color) =>
    createTheme({
        palette: {
            type: color,
            primary: {
                main: '#AA94FB'
            },
            secondary: {
                main: '#82816D'
            },
            beige: {
                main: '#DED7C5'
            },
            background: {
                default: color === 'light' ? '#DED7C5' : '#0A010B',
                paper: color === 'light' ? '#DED7C5' : '#303030'
            },
            text: {
                primary: color === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#DED7C5'
            }
        },
        typography: {
            fontFamily: "'ClashDisplay-Variable', sans-serif"
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*': {
                        boxSizing: 'border-box',
                        '&::-webkit-scrollbar': {
                            width: '0'
                        },
                        scrollbarWidth: 'none',
                        scrollBehavior: 'smooth'
                    },
                    body: {
                        fontFamily: "'Barlow', sans-serif",
                        minHeight: '100vh',
                        margin: 0,
                        padding: 0,
                        overflowX: 'hidden'
                    },
                    '#root': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '100vh'
                    },
                    ul: {
                        padding: 0,
                        margin: 0,
                        listStyleType: 'none'
                    },
                    a: {
                        backgroundColor: 'transparent',
                        textDecoration: 'none !important',
                        color: 'inherit',
                        transition: 'color .3s ease-in-out',
                        '&:hover': {
                            color: '#AA94FB'
                        }
                    },
                    '.fs-biggest': {
                        fontSize: '5rem'
                    },
                    '.fs-900': {
                        fontSize: '2.4rem'
                    },
                    '.fs-800': {
                        fontSize: '2.2rem'
                    },
                    '.fs-700': {
                        fontSize: '2rem'
                    },
                    '.fs-600': {
                        fontSize: '1.8rem'
                    },
                    '.fs-500': {
                        fontSize: '1.6rem'
                    },
                    '.fs-400': {
                        fontSize: '1.4rem'
                    },
                    '.fs-300': {
                        fontSize: '1.3rem'
                    },
                    '.fs-200': {
                        fontSize: '1.2rem'
                    },
                    '.fs-100': {
                        fontSize: '1rem'
                    },
                    '.fw-900': {
                        fontWeight: '900'
                    },
                    '.fw-800': {
                        fontWeight: '800'
                    },
                    '.fw-700': {
                        fontWeight: '700'
                    },
                    '.fw-600': {
                        fontWeight: '600'
                    },
                    '.fw-500': {
                        fontWeight: '500'
                    },
                    '.fw-400': {
                        fontWeight: '400'
                    },
                    '.fw-300': {
                        fontWeight: '300'
                    },
                    '.text-center': {
                        textAlign: 'center'
                    }
                }
            },
            MuiButton: {
                root: {
                    textTransform: 'none'
                }
            },
            MuiSvgIcon: {
                root: {
                    fontSize: '1.5rem'
                }
            }
        },
        props: {
            MuiButton: {
                disableRipple: true,
                disableFocusRipple: true,
                variant: 'contained',
                color: 'primary'
            }
        }
    });
