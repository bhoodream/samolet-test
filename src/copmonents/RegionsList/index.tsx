import { FC } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

import { REGION_ID_KEY } from '../../Const/index';

const RegionsList: FC<{ items: Region[] }> = ({ items }) => {
    if (!items.length) {
        return <Loading />;
    }

    return (
        <ol>
            {items.map((item) => {
                const { fullname } = item;
                const id = item[REGION_ID_KEY];

                return (
                    <li key={id}>
                        <Link to={`/${id}`}>{fullname}</Link>
                    </li>
                );
            })}
        </ol>
    );
};

export default RegionsList;
