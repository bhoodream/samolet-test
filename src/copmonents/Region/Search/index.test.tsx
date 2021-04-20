import renderer from 'react-test-renderer';
import RegionsSearch from './index';

it('renders correctly', () => {
    const tree = renderer
        .create(<RegionsSearch onSearch={() => {}} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
