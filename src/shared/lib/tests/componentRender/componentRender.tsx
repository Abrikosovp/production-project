import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface componentOptions {
    route?: string;
}

export function componentRouter(component: ReactNode, options: componentOptions = {}) {
    const { route = RoutePath.main } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
