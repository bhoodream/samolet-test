import { FC } from 'react';
import { Select, Space } from 'antd';
import {
    BankOutlined,
    UserOutlined,
    SortAscendingOutlined,
} from '@ant-design/icons';

import { SORT_MODES } from '../../../Const/index';

interface Props {
    mode: SORT_MODES;
    onChange: any;
}

const RegionStats: FC<Props> = ({ mode, onChange }) => {
    return (
        <Select
            size="large"
            style={{ width: '100%' }}
            defaultValue={mode}
            onChange={onChange}
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
    );
};

export default RegionStats;
