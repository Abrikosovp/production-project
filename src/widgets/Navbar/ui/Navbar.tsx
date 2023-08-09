import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppThemeLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div
        className={classNames(cls.Navbar, {}, [className])}
    >
        <div className={cls.links}>
            <AppLink theme={AppThemeLink.SECONDARY} className={cls.mainLink} to="/">Главная</AppLink>
            <AppLink theme={AppThemeLink.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);
