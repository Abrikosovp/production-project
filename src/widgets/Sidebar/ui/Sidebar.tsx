import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {AppButton} from "shared/ui/AppButton/AppButton";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <AppButton onClick={onToggle}>collapsed</AppButton>
           <div className={cls.switchers}>
               <ThemeSwitcher/>
           </div>
        </div>
    );
};
