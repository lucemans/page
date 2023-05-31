import { RequestInit } from 'next/dist/server/web/spec-extension/request';

// Typescript wrapper around fetch to coerce the type to a generic
export const doFetch = <K>(url: string, options?: RequestInit): Promise<K> => {
    return fetch(url, options).then((response) => response.json());
};
