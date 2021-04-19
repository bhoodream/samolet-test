import { sortRegions, searchRegions } from './utils';

import { SORT_MODES } from '../../Const';

describe('Regions/utils', () => {
    describe('searchRegions', () => {
        it('search partly', () => {
            const regions = [
                { territory: 'name' },
                { territory: 'samename' },
                { territory: 'notSame' },
            ];

            expect(searchRegions(regions as Region[], 'name')).toEqual([
                { territory: 'name' },
                { territory: 'samename' },
            ]);
        });

        it('case insensitive', () => {
            const regions = [
                { territory: 'bad' },
                { territory: 'name' },
                { territory: 'Name' },
            ];

            expect(searchRegions(regions as Region[], 'name')).toEqual([
                { territory: 'name' },
                { territory: 'Name' },
            ]);
        });
    });

    describe('sortRegions', () => {
        it('default territory mode', () => {
            const regions = [
                { territory: 'searchRegion' },
                { territory: 'region' },
            ];

            expect(sortRegions(regions as Region[])).toEqual([
                { territory: 'region' },
                { territory: 'searchRegion' },
            ]);
        });

        it('territory', () => {
            const regions = [
                { territory: 'searchRegion' },
                { territory: 'region' },
            ];

            expect(
                sortRegions(regions as Region[], SORT_MODES.territory)
            ).toEqual([{ territory: 'region' }, { territory: 'searchRegion' }]);
        });
        it('libraries', () => {
            const regions = [
                { libraries: 1 },
                { libraries: 2 },
                { libraries: 3 },
            ];

            expect(
                sortRegions(regions as Region[], SORT_MODES.libraries)
            ).toEqual([{ libraries: 3 }, { libraries: 2 }, { libraries: 1 }]);
        });
        it('subscribers', () => {
            const regions = [
                { subscribers: 100 },
                { subscribers: 300 },
                { subscribers: 200 },
            ];

            expect(
                sortRegions(regions as Region[], SORT_MODES.subscribers)
            ).toEqual([
                { subscribers: 300 },
                { subscribers: 200 },
                { subscribers: 100 },
            ]);
        });
    });
});
