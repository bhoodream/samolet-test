import { FC } from 'react';
import { Link } from 'react-router-dom';
import { List, Card, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import Loading from '../../copmonents/Loading/index';
import RegionStats from '../../copmonents/RegionStats/index';

import { REGION_ID_KEY } from '../../Const/index';

const RegionsPage: FC<{ items: Region[] }> = ({ items }) => {
    if (!items.length) {
        return <Loading />;
    }

    return (
        <div>
            <Typography.Title>Регионы</Typography.Title>
            <List
                itemLayout="horizontal"
                dataSource={items}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                renderItem={(item) => {
                    const { subscribers, territory, libraries } = item;
                    const id = item[REGION_ID_KEY];

                    return (
                        <List.Item>
                            <Card
                                title={
                                    <Typography.Title level={4}>
                                        {territory}
                                    </Typography.Title>
                                }
                                extra={
                                    <Link to={`/${id}`}>
                                        <RightOutlined />
                                    </Link>
                                }
                            >
                                <RegionStats data={item} />
                            </Card>
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default RegionsPage;
