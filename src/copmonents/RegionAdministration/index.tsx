import { FC } from 'react';
import { Badge, Descriptions } from 'antd';
import useMediaQuery from 'use-media-antd-query';

const getSpan = (value: number, colSize: string) =>
    ['xs', 'sm', 'md'].indexOf(colSize) > -1 ? 1 : value;

const RegionAdministration: FC<{ data: Region }> = ({ data }) => {
    const colSize = useMediaQuery();

    return (
        <Descriptions
            bordered
            column={{
                lg: 3,
                sm: 1,
                xs: 1,
            }}
            style={{ backgroundColor: '#fff' }}
        >
            <Descriptions.Item label="Учреждение">
                {data.fullname}
            </Descriptions.Item>
            <Descriptions.Item label="Адрес" span={getSpan(2, colSize)}>
                {data.address}
            </Descriptions.Item>
            <Descriptions.Item label="Состояние" span={getSpan(3, colSize)}>
                <Badge status="processing" text="Работает" />
            </Descriptions.Item>
            <Descriptions.Item label="Бюджет">
                {data.funds_budget} руб.
            </Descriptions.Item>
            <Descriptions.Item label="Использовано" span={getSpan(2, colSize)}>
                {data.funds_used} руб.
            </Descriptions.Item>
            <Descriptions.Item label="Сводка" span={getSpan(3, colSize)}>
                Сотрудники: {data.employees} чел.
                <br />
                Компьютеры: {data.computers} шт.
                <br />
                Цифровые каталоги: {data.digital_catalogs} шт.
            </Descriptions.Item>
        </Descriptions>
    );
};

export default RegionAdministration;
