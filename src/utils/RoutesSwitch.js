import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect, Route, useLocation } from 'react-router-dom';

import { AppRoute } from 'utils';

// Pages
import MantainancePage from 'pages/others/MantainancePage';
import { routes } from 'config';

const RoutesSwitch = ({ gsap }) => {
    const location = useLocation();

    const mantainanceMode = useSelector(({ ui }) => ui.appSettings.mantainanceMode);

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState('fadeIn');

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage('fadeOut');
    }, [location, displayLocation]);

    return (
        <div
            className={`${transitionStage}`}
            style={{ position: 'relative' }}
            onAnimationEnd={() => {
                if (transitionStage === 'fadeOut') {
                    setTransistionStage('fadeIn');
                    setDisplayLocation(location);
                }
            }}
        >
            <Switch location={displayLocation}>
                {mantainanceMode ? (
                    <Route component={MantainancePage} />
                ) : (
                    routes.map(({ component, exact, path, privateRoute, redirectTo, ...rest }, index) => {
                        if (redirectTo)
                            return (
                                <Route key={path + index} exact={exact} path={path}>
                                    <Redirect to={{ pathname: redirectTo }} />
                                </Route>
                            );

                        return (
                            <Route exact={exact} path={path} key={path + index}>
                                <AppRoute
                                    component={component}
                                    gsap={gsap}
                                    path={path}
                                    privateRoute={privateRoute}
                                    {...rest}
                                />
                            </Route>
                        );
                    })
                )}
            </Switch>
        </div>
    );
};

export default RoutesSwitch;
