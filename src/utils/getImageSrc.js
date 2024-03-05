export default async function getImageSrc(url) {
    const headers = new Headers();
    headers.append("Authorization", window.unbxdSearch.options.apiKey);
    headers.append("Content-type", "application/json")
    const data = await fetch("https://search.unbxd.io" + url, {
        headers: headers,
        method: "GET"
    })
    const contentType = data.headers.get('Content-Type');
    if (contentType.includes('image')) {
        //return await convertBase64TiffToImage(await data.blob())
        let binaryData = await data.arrayBuffer()
        return URL.createObjectURL(new Blob([binaryData], { type: 'image/png' }));
    } else if (contentType.includes('text') || contentType.includes('application/octet-stream')) {
        return await data.text();
    } else {
        console.error('Unsupported Content-Type:', contentType);
        return false;
    }
}