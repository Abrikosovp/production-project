import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

import { AppButton } from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";

interface ThemeSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ThemeSwitcherProps) => {

    const { t, i18n } = useTranslation();

    const toggleLang =() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t('Язык')}
        </AppButton>
    );
};
