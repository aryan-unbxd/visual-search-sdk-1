export default function readVisualSearchParams(newQ) {
    const { url: {
        visualSearchQueryParam = {},
        boxUrl = {}
    } = {}
    } = this.options;
    let urlParts = this.getQueryParams(newQ)
    let obj = {...this.readBoxUrlparam(urlParts) , ...this.readVisualSearchParam(urlParts)};
    return obj;
}

