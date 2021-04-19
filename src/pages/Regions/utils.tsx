import { SORT_MODES } from '../../Const/index';

export const sortRegions = (regions: Region[], sortMode?: SORT_MODES) => {
    const sortByLibrary = (a: Region, b: Region) => b.libraries - a.libraries;
    const sortByTerritory = (a: Region, b: Region) => {
        return a.territory
            .toLowerCase()
            .trim()
            .replace('г.', '')
            .localeCompare(b.territory.toLowerCase().trim().replace('г.', ''));
    };
    const sortBySubscribers = (a: Region, b: Region) =>
        b.subscribers - a.subscribers;

    const newRegions = [...regions];

    switch (sortMode) {
        case SORT_MODES.libraries:
            newRegions.sort(sortByLibrary);
            break;
        case SORT_MODES.subscribers:
            newRegions.sort(sortBySubscribers);
            break;

        default:
            newRegions.sort(sortByTerritory);
    }

    return newRegions;
};

export const searchRegions = (regions: Region[], searchValue: string = '') =>
    regions.filter(
        (r) => r.territory.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
