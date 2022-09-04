import React from 'react';
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
