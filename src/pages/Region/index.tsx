import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Result,
    Typography,
    Space,
    Skeleton,
    Badge,
    Layout,
    Descriptions,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import RegionStats from '../../copmonents/RegionStats/index';

import { REGION_ID_KEY } from '../../Const/index';

const useRegionData = (
    regions: Region[] = [],
    setRegionData: (r: RegionDataExistence) => void
) => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!regions.length) {
            return;
        }

        setRegionData(regions.find((r) => r[REGION_ID_KEY] === id));
    }, [regions, setRegionData, id]);
};

const RegionPage: FC<{ regions: Region[] }> = ({ regions }) => {
    const [data, setData] = useState<RegionDataExistence>(null);

    useRegionData(regions, setData);

    if (typeof data === 'undefined') {
        return (
            <Result
                status="404"
                title="Ошибка"
                subTitle="Такого региона не существует..."
                extra={
                    <Link to={'/'}>
                        <LeftOutlined />
                        {` Вернуться на главную`}
                    </Link>
                }
            />
        );
    }

    return (
        <Layout>
            <Link to={'/'} style={{ marginBottom: '.5rem' }}>
                <LeftOutlined /> Назад
            </Link>
            {!data ? (
                <Skeleton />
            ) : (
                <>
                    <Typography.Title>{data.territory}</Typography.Title>
                    <Space direction={'vertical'} size={'large'}>
                        <RegionStats data={data} />
                        <Typography.Title level={3}>
                            Администрация
                        </Typography.Title>
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
                            <Descriptions.Item label="Адрес" span={2}>
                                {data.address}
                            </Descriptions.Item>
                            <Descriptions.Item label="Состояние" span={3}>
                                <Badge status="processing" text="Работает" />
                            </Descriptions.Item>
                            <Descriptions.Item label="Бюджет">
                                {data.funds_budget} руб.
                            </Descriptions.Item>
                            <Descriptions.Item label="Использовано" span={2}>
                                {data.funds_used} руб.
                            </Descriptions.Item>
                            <Descriptions.Item label="Сводка" span={3}>
                                Сотрудники: {data.employees} чел.
                                <br />
                                Компьютеры: {data.computers} шт.
                                <br />
                                Цифровые каталоги: {data.digital_catalogs} шт.
                            </Descriptions.Item>
                        </Descriptions>
                    </Space>
                </>
            )}
        </Layout>
    );
};

export default RegionPage;
