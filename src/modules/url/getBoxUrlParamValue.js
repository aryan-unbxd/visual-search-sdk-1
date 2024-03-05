export default function getBoxUrlParamValue() {
    const {
        url: {
            boxUrl: {
                addToUrl , 
            } = {},
        } = {}
    } = this.options;
    const boxUrlQueryParam = this.getboxUrlQueryParam();
    const urlParts = this.getQueryParams();
    return addToUrl ? decodeURIComponent(urlParts[boxUrlQueryParam]) : this.state.selectedBoxUrl ? this.state.selectedBoxUrl : null
}
