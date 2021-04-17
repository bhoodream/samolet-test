import store from 'store';

const getCachedData = (key: string) => store.get(key);
const cacheData = (key: string, data: any) => store.set(key, data);

export async function getData<T>(url: string): Promise<T> {
    let data = getCachedData(url);

    if (data) {
        return data;
    }

    try {
        const response = await fetch(url);

        data = await response.json();

        cacheData(url, data);
    } catch (e) {
        console.error(e);
    }

    return data;
}
