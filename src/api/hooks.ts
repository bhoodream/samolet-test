import { useLayoutEffect } from 'react';

import { getData } from './index';

export const useStatLibraryData = (setData: any) => {
    useLayoutEffect(() => {
        const loadData = async () => {
            const loadedData = await getData<LIBRARY_REGION_STATS[]>(
                'opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json'
            );

            setData(loadedData);
        };

        loadData();
    }, [setData]);
};
