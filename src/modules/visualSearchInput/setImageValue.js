const setImageValue = async function (url) {
    try {
        this.clearErrMessage();
        let val = this.options.uploadConfig.el.value || url;
        window.unbxdSearch.options.productType = "SEARCH";
        if (val && this.isValidUrl(val)) {
            window.unbxdSearch.resetAll();
            let imageattributes = await this.getImageAttributes(val , true)
            this.state.imageattributes = imageattributes
            this.state.imageUrlData = imageattributes.src
            this.enableVisualSearch()
            this.state.imageUrl = val
            this.state.isImageUpload = true
            window.unbxdSearch.setPageStart(0);
            window.unbxdSearch.resetViewState();
            window.unbxdSearch.getResults();
            this.options.uploadConfig.el.value = "";
        } else {
            window.unbxdSearch.searchResultsWrapper.innerHTML = null;
        }
    } catch (err) {
        console.error("input > setImageValue.js", err)
    }

}
export {
    setImageValue as default
}
