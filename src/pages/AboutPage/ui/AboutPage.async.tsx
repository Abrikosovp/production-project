import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolver) => {
    // @ts-ignore
    setTimeout(() => resolver(import('./AboutPage')), 2000);
}));
