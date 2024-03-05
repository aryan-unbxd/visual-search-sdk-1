const uploadImageFile = async function () {
    try {
        let val = this.options.uploadConfig.input
        const file = val.files[0];
        this.clearErrMessage();
        let encoded;
        let imageattributes; 
        if (file) {
            encoded = await this.getBase64(file)
            imageattributes = await this.getImageAttributes(file , false)
        }
        console.log(encoded , imageattributes)
        window.unbxdSearch.options.productType = "SEARCH";
        if (encoded.image && this.isValidImage(file.type, file.size) && this.isValidDimension(imageattributes.width , imageattributes.height)) {
            window.unbxdSearch.resetAll();
            this.enableVisualSearch()
            this.state.enableVisualSearch = true
            this.state.visualSearchRequest = true
            this.state.imageattributes = imageattributes;
            this.state.encodedImage = encoded.image
            this.state.encodeData = encoded.encodedData
            this.state.fileType = encoded.type.split(":")[1]
            this.state.firstUpload = true
            this.state.imageUpload = true
            this.state.isImageUpload = true ;
            window.unbxdSearch.setPageStart(0);
            window.unbxdSearch.resetViewState();
            window.unbxdSearch.getResults();

        } else {
            window.unbxdSearch.searchResultsWrapper.innerHTML = null;
        }
    } catch (err) {
        console.error("input > uploadImageFile.js", err)
    }

}
   

export {
    uploadImageFile as default
}
