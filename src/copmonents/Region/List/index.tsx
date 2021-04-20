import { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { List, Card, Typography, Tooltip, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import RegionStats from '../Stats/index';

import { REGION_ID_KEY } from '../../../Const/index';

interface Props {
    items: Region[];
    showItemsCount: number;
    onShowMore: MouseEventHandler;
}

const RegionList: FC<Props> = ({ items, showItemsCount, onShowMore }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={items.slice(0, showItemsCount)}
            loadMore={
                showItemsCount < items.length ? (
                    <Button size="large" onClick={onShowMore}>
                        Показать больше
                    </Button>
                ) : null
            }
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
                const { territory } = item;
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
                                <Tooltip placement="top" title={'Подробнее'}>
                                    <Link to={`/${id}`}>
                                        <Button>
                                            <RightOutlined />
                                        </Button>
                                    </Link>
                                </Tooltip>
                            }
                        >
                            <RegionStats data={item} />
                        </Card>
                    </List.Item>
                );
            }}
        />
    );
};

export default RegionList;
