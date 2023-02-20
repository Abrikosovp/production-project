import './Spinner.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const Spinner = () => (
    <div className={classNames('lds-ellipsis', {}, [])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
