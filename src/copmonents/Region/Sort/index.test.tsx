import renderer from 'react-test-renderer';
import RegionsSort from './index';

import { SORT_MODES } from '../../../Const/index';

it('renders correctly', () => {
    const tree = renderer
        .create(<RegionsSort mode={SORT_MODES.libraries} onChange={() => {}} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
