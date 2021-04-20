import { ChangeEventHandler, FC } from 'react';
import { Input } from 'antd';

interface Props {
    defaultValue?: string;
    onSearch: ChangeEventHandler;
}

const RegionsSearch: FC<Props> = ({ defaultValue = '', onSearch }) => {
    return (
        <Input.Search
            size="large"
            placeholder="Введите название региона..."
            enterButton
            allowClear
            defaultValue={defaultValue}
            onChange={onSearch}
        />
    );
};

export default RegionsSearch;
