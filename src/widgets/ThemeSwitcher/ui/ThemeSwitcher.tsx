import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme, theme } = useTheme();

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK ? <DarkIcon /> : <LightIcon />
            }
        </AppButton>
    );
}
