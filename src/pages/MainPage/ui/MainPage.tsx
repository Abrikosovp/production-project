import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {
                t('Главная страница')
            }
            <Input
                placeholder={t('Введите текст')}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default MainPage;
