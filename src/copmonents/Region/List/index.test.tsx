import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import RegionsList from './index';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <Router>
                <RegionsList
                    onShowMore={() => {}}
                    showItemsCount={10}
                    items={
                        [
                            {
                                subscribers: 123,
                                libraries: 543,
                            },
                            {
                                subscribers: 123,
                                libraries: 543,
                            },
                        ] as Region[]
                    }
                />
            </Router>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
