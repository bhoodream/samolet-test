import { SORT_MODES } from '../../Const/index';

export const sortItems = (items: Region[], sortMode?: SORT_MODES) => {
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

    const newListItems = [...items];

    switch (sortMode) {
        case SORT_MODES.libraries:
            newListItems.sort(sortByLibrary);
            break;
        case SORT_MODES.subscribers:
            newListItems.sort(sortBySubscribers);
            break;

        default:
            newListItems.sort(sortByTerritory);
    }

    return newListItems;
};

export const searchItems = (items: Region[], searchValue: string = '') =>
    items.filter(
        (i) => i.territory.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
