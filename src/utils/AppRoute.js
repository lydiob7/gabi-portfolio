import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { LayoutDefault, NoLayout } from 'layouts';

import { defaultRedirects } from 'config';

const AppRoute = ({
    component: Component,
    footer,
    gsap,
    history,
    layout = true,
    noLayoutFooter = false,
    noLayoutBtn = false,
    privateRoute = false,
    scrollBtn,
    ...componentProps
}) => {
    const authenticated = useSelector(({ auth }) => auth.user.authenticated);

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    if (!Component) return null;

    return (
        <>
            {privateRoute && !authenticated ? (
                <Redirect to={defaultRedirects.notAuthenticated} />
            ) : (
                <>
                    {layout ? (
                        <LayoutDefault footer={footer} gsap={gsap} scrollBtn={scrollBtn}>
                            <Component gsap={gsap} {...componentProps} />
                        </LayoutDefault>
                    ) : (
                        <NoLayout footer={noLayoutFooter} gsap={gsap} scrollBtn={noLayoutBtn}>
                            <Component gsap={gsap} {...componentProps} />
                        </NoLayout>
                    )}
                </>
            )}
        </>
    );
};

export default withRouter(AppRoute);
