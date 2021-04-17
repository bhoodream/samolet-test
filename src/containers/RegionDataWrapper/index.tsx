import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Loading from '../../copmonents/Loading';
import RegionData from '../../copmonents/RegionData';

import { REGION_ID_KEY } from '../../Const/index';

const useRegionData = (
    regions: Region[] = [],
    setRegionData: (r: Region | undefined) => void
) => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        setRegionData(regions.find((r) => r[REGION_ID_KEY] === id));
    }, [regions, id]);
};

const RegionContainer: FC<{ regions: Region[] }> = ({ regions }) => {
    const [data, setData] = useState<Region>();

    useRegionData(regions, setData);

    return (
        <div>
            <Link to={'/'}>{'< Назад'}</Link>
            {data ? <RegionData data={data} /> : <Loading />}
        </div>
    );
};

export default RegionContainer;
