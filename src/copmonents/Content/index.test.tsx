import renderer from 'react-test-renderer';
import Content from './index';

it('renders correctly', () => {
    const tree = renderer.create(<Content>Contentt</Content>).toJSON();

    expect(tree).toMatchSnapshot();
});
