import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        theme = ThemeButton.CLEAR,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
