import { FC, useState, useCallback, useMemo } from 'react';
import { Typography, Layout, Space, Skeleton } from 'antd';

import RegionsSort from '../../copmonents/Region/Sort/index';
import RegionsSearch from '../../copmonents/Region/Search/index';
import RegionsList from '../../copmonents/Region/List/index';

import { sortRegions, searchRegions } from './utils';

import { SHOW_ITEMS_COUNT, SORT_MODES } from '../../Const/index';

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
                    <RegionsSearch onSearch={onSearchChange} />
                    <RegionsSort mode={sortMode} onChange={setSortMode} />
                    <RegionsList
                        items={listItems}
                        showItemsCount={showItemsCount}
                        onShowMore={onShowMore}
                    />
                </Space>
            )}
        </Layout>
    );
};

export default RegionsPage;
