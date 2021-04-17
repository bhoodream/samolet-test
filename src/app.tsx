import { useState } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import { useStatLibraryData } from './api/hooks';

import RegionDataWrapper from './containers/RegionDataWrapper';
import RegionsList from './copmonents/RegionsList';

import './app.css';

export default function App() {
    const [regions, setRegions] = useState<Region[]>([]);

    useStatLibraryData(setRegions);

    return (
        <Layout>
            <Switch>
                <Route path="/:id">
                    <RegionDataWrapper regions={regions} />
                </Route>
                <Route path="/">
                    <RegionsList items={regions} />
                </Route>
            </Switch>
        </Layout>
    );
}
