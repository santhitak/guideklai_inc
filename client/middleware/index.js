import auth from '@/lib/auth';

export const mustAuth = (to, _, next) => {
    const user = auth.user;

    if (user) {
        if (!user.last_verify_email && to.path !== '/auth/verification-email') {
            return next({ path: '/auth/verification-email' });
        }
        if (
            user.last_verify_email &&
            !user.last_verify_phone_number &&
            to.path !== '/auth/verification-phone-number'
        ) {
            return next({ path: '/auth/verification-phone-number' });
        }
        if (
            user.last_verify_email &&
            user.last_verify_phone_number &&
            ['/auth/verification-email', '/auth/verification-phone-number'].includes(
                to.path
            )
        ) {
            return next(to.query.redirect || { path: '/dashboard' });
        }
        return next();
    }
    return next({
        path: '/auth/login',
        query: {
            redirect: to.path,
        },
    });
};

export const mustNotAuth = (to, _, next) => {
    const user = auth.user;
    if (user) {
        return next(to.query.redirect || { path: '/dashboard' });
    }
    return next();
};
