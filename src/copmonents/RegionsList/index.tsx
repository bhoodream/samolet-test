import { FC } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

const RegionsList: FC<{ items: Region[] }> = ({ items }) => {
    if (!items.length) {
        return <Loading />;
    }

    return (
        <ol>
            {items.map(({ kopuk, fullname }) => (
                <li key={kopuk}>
                    <Link to={`/${kopuk}`}>{fullname}</Link>
                </li>
            ))}
        </ol>
    );
};

export default RegionsList;
