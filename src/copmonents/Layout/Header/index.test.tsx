import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './index';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <Router>
                <Header />
            </Router>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
