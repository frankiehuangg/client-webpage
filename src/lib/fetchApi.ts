export const fetchApi = async (
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    headers: HeadersInit,
    body?: Object 
) => {
    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
    })

    return response
}