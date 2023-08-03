import {useTheme} from "app/providers/ThemeProvider";

import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


export const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <ThemeSwitcher/>
            <AppRouter />
        </div>
    );
};
