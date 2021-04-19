import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Result, Typography, Space, Skeleton, Layout } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import RegionStats from '../../copmonents/RegionStats/index';
import RegionAdministration from '../../copmonents/RegionAdministration/index';

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
                        <RegionAdministration data={data} />
                    </Space>
                </>
            )}
        </Layout>
    );
};

export default RegionPage;
