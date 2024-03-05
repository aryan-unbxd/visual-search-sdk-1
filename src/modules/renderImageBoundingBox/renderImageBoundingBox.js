/* eslint-disable no-unused-vars */

 export default async function  renderImageBoundingBox() {
    try {
        const{
            boundingboxData,
            selectedBoundingBoxId,
            imageDownloadUrl,
            loadSecondScreen
        }
        =this.state;
        const {
            imageBox,
        } = this.options;
        const imageContainer = imageBox.el;
        imageContainer.innerHTML = '';
        if(imageBox.collapseOnScroll && loadSecondScreen){
            imageContainer.classList.add("image-wrapper-cropped");
        }
        const results = window.unbxdSearch.getSearchResults();
        if (results && results.numberOfProducts === 0) {
            this.imageContainer.innerHTML = ``;
            return false;
        } else {
            let imageUrlData;
            if(!this.state.imageUrlData){
                const imageUrlData = await this.getImageSrc(imageDownloadUrl)
                this.state.imageUrlData = imageUrlData;
                }
             if (boundingboxData && boundingboxData.length) {
                imageBox.el.innerHTML =  await this.renderCroppedImages(boundingboxData , selectedBoundingBoxId, imageBox.el ,   this.state.imageUrlData)
                // imageBox.el.innerHTML = await imageBox.boundingBoxUI.bind(this)(boundingboxData , selectedBoundingBoxId, imageBox.el , imageUrlData)
            }  
            imageBox.afterImageBoxRender.bind(this)( this.state.imageUrlData)          
        }
    }
    catch (err) {
        console.error("Banners > renderImageBoundingBox", err)
    }

}