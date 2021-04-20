import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Space } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const Header: FC = () => {
    return (
        <Layout.Header>
            <Link to={'/'} style={{ color: '#fff', fontSize: '1.3rem' }}>
                <Space>
                    <SendOutlined />
                    <b>Samolet Test</b>
                </Space>
            </Link>
        </Layout.Header>
    );
};

export default Header;
