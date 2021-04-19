import { FC, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    List,
    Card,
    Typography,
    Input,
    Button,
    Layout,
    Space,
    Select,
    Tooltip,
    Skeleton,
} from 'antd';
import {
    BankOutlined,
    UserOutlined,
    RightOutlined,
    SortAscendingOutlined,
} from '@ant-design/icons';

import RegionStats from '../../copmonents/RegionStats/index';

import { sortRegions, searchRegions } from './utils';

import { REGION_ID_KEY, SHOW_ITEMS_COUNT, SORT_MODES } from '../../Const/index';

const RegionsPage: FC<{ regions: Region[] }> = ({ regions }) => {
    const [showItemsCount, setShowItemsCount] = useState(SHOW_ITEMS_COUNT);
    const [sortMode, setSortMode] = useState<SORT_MODES>(SORT_MODES.territory);
    const [searchValue, setSearchValue] = useState('');

    const listItems = useMemo(
        () => sortRegions(searchRegions(regions, searchValue), sortMode),
        [regions, sortMode, searchValue]
    );

    const onSearchChange = useCallback((e) => {
        setShowItemsCount(SHOW_ITEMS_COUNT);
        setSearchValue(e.target.value);
    }, []);

    const onShowMore = useCallback(() => {
        setShowItemsCount((c) => c + SHOW_ITEMS_COUNT);
    }, []);

    return (
        <Layout>
            <Typography.Title>Библиотечная Статистика</Typography.Title>
            {!regions.length ? (
                <Skeleton />
            ) : (
                <Space direction={'vertical'} size={'middle'}>
                    <Input.Search
                        size="large"
                        placeholder="Введите название региона..."
                        enterButton
                        allowClear
                        defaultValue={searchValue}
                        onChange={onSearchChange}
                    />
                    <Select
                        size="large"
                        style={{ width: '100%' }}
                        defaultValue={sortMode}
                        onChange={setSortMode}
                    >
                        <Select.Option value={SORT_MODES.territory}>
                            <Space>
                                <SortAscendingOutlined />
                                По алфавиту
                            </Space>
                        </Select.Option>
                        <Select.Option value={SORT_MODES.libraries}>
                            <Space>
                                <BankOutlined />
                                По библиотекам
                            </Space>
                        </Select.Option>
                        <Select.Option value={SORT_MODES.subscribers}>
                            <Space>
                                <UserOutlined />
                                По читателям
                            </Space>
                        </Select.Option>
                    </Select>
                    <List
                        itemLayout="horizontal"
                        dataSource={listItems.slice(0, showItemsCount)}
                        loadMore={
                            showItemsCount < listItems.length ? (
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
                                            <Tooltip
                                                placement="top"
                                                title={'Подробнее'}
                                            >
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
                </Space>
            )}
        </Layout>
    );
};

export default RegionsPage;
