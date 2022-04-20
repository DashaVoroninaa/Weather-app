export const request = (url, {params = {}}) => {
    const urlParams = new URLSearchParams(params).toString();
    return fetch(`${url}?${urlParams}`).then((r) => {
        if (r.ok) {
            return r.json();
        }
        throw new Error('some error');
    });
};
