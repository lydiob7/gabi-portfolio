import React, { useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { ThemeProvider } from 'components/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth } from './auth';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Routes
import { LanguageCheck, RoutesSwitch } from 'utils';

const store = configureStore();

const App = () => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        gsap.utils.toArray('.fade-in').forEach((elem) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top bottom-=150',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
        gsap.utils.toArray('.fade-in-bottom').forEach((elem) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top bottom-=40',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <Provider store={store}>
                <ThemeProvider>
                    <CssBaseline>
                        <LanguageCheck>
                            <Auth>
                                <RoutesSwitch gsap={gsap} />
                            </Auth>
                        </LanguageCheck>
                    </CssBaseline>
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default App;
