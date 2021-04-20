import { FC } from 'react';
import { Row, Col, Statistic } from 'antd';
import { BankOutlined, UserOutlined } from '@ant-design/icons';

interface Props {
    data: Region;
}

const RegionStats: FC<Props> = ({ data }) => {
    return (
        <Row gutter={40} style={{ maxWidth: '100%' }}>
            <Col>
                <Statistic
                    groupSeparator={' '}
                    title={
                        <>
                            <BankOutlined />
                            {' Библиотеки'}
                        </>
                    }
                    value={data.libraries}
                />
            </Col>
            <Col>
                <Statistic
                    groupSeparator={' '}
                    title={
                        <>
                            <UserOutlined />
                            {' Читатели'}
                        </>
                    }
                    value={data.subscribers}
                />
            </Col>
        </Row>
    );
};

export default RegionStats;
