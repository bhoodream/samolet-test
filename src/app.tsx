import { useState } from 'react';
import { Layout, Space, BackTop } from 'antd';
import { Switch, Route } from 'react-router-dom';

import { useStatLibraryData } from './api/hooks';

import Header from './copmonents/Layout/Header/index';
import Content from './copmonents/Layout/Content/index';
import Footer from './copmonents/Layout/Footer/index';
import RegionPage from './pages/Region/index';
import RegionsPage from './pages/Regions/index';

import './app.css';

export default function App() {
    const [regions, setRegions] = useState<Region[]>([]);

    useStatLibraryData(setRegions);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Space direction="vertical" size={30}>
                <Header />
                <Content>
                    <Switch>
                        <Route path="/:id">
                            <RegionPage regions={regions} />
                        </Route>
                        <Route path="/">
                            <RegionsPage regions={regions} />
                        </Route>
                    </Switch>
                </Content>
                <Footer />
            </Space>
            <BackTop />
        </Layout>
    );
}
