import renderer from 'react-test-renderer';
import RegionStats from './index';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <RegionStats
                data={
                    {
                        subscribers: 123,
                        libraries: 543,
                    } as Region
                }
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
