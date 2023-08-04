import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';
import React, {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    className?: string;
    theme?: ThemeButton
}

export const AppButton: FC<AppButtonProps> = (props) => {

    const {
        theme = ThemeButton.CLEAR,
        className,
        children,
        ...otherProps } = props;

    return (
        <button
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
