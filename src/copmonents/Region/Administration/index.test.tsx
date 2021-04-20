import renderer from 'react-test-renderer';
import RegionAdministration from './index';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <RegionAdministration
                data={
                    {
                        fullname: 'test full name',
                        address: 'test address',
                        funds_budget: 123,
                        funds_used: 234,
                        employees: 345,
                        computers: 456,
                        digital_catalogs: 567,
                    } as Region
                }
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
