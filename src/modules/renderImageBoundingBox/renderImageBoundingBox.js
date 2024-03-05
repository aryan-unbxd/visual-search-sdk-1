/* eslint-disable no-unused-vars */

 export default async  function  renderImageBoundingBox() {
    try {
        const{
            boundingboxData,
            selectedBoundingBoxId,
            imageUrl,
            imageDownloadUrl,
            imageUpload,
            encoded,
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
        console.log(imageContainer,"gfdfdgdfgdfgfdgfdfd")
        const results = window.unbxdSearch.getSearchResults();
        if (results && results.numberOfProducts === 0) {
            this.imageContainer.innerHTML = ``;
            return false;
        } else {
            if(!this.state.imageUrlData){
            const imageUrlData = await getImageSrc(imageDownloadUrl)
            console.log(imageUrlData)
            this.state.imageUrlData = imageUrlData;
            }
            console.log(this.state ,":abccccccccccccc");
           // imageBox.el.innerHTML = await this.renderCroppedImages(boundingboxData , selectedBoundingBoxId, imageBox.el , this.state.imageUrlData)
             if (boundingboxData && boundingboxData.length) {
                imageBox.el.innerHTML = await this.renderCroppedImages(boundingboxData , selectedBoundingBoxId, imageBox.el ,  this.state.imageUrlData)
                // imageBox.el.innerHTML = await imageBox.boundingBoxUI.bind(this)(boundingboxData , selectedBoundingBoxId, imageBox.el , imageUrlData)
            }  
            imageBox.afterImageBoxRender.bind(this)(this.state.imageUrlData)          
        }
    }
    catch (err) {
        console.error("Banners > renderImageBoundingBox", err)
    }

}
















async function getImageSrc(url ){
    const headers = new Headers();
        headers.append("Authorization", window.unbxdSearch.options.apiKey);
        headers.append("Content-type", "application/json")
        const data = await fetch("https://search.unbxd.io" + url , {
            headers : headers ,
            method : "GET"
        } )
       console.log(data)
       const contentType= data.headers.get('Content-Type');

                if (contentType.includes('image')) {
                    //return await convertBase64TiffToImage(await data.blob())
                    let binaryData = await data.arrayBuffer()
                console.log(binaryData)
                    return URL.createObjectURL(new Blob([binaryData], { type: 'image/png' }));
                } else if (contentType.includes('text') || contentType.includes('application/octet-stream')) {
                    return await data.text();
                } else {
                    console.error('Unsupported Content-Type:', contentType);
                    return false;
                }
}

function convertBase64TiffToImage(base64Tiff) {
    return new Promise((resolve) => {
        const tiffCanvas = document.createElement('canvas');
        const tiffContext = tiffCanvas.getContext('2d');

        // Create an Image element and load the base64-encoded TIFF data
        const tiffImage = new Image();
        tiffImage.onload = function () {
            // Set canvas dimensions to match image dimensions
            tiffCanvas.width = tiffImage.width;
            tiffCanvas.height = tiffImage.height;

            // Draw the TIFF image onto the canvas
            tiffContext.drawImage(tiffImage, 0, 0);

            // Convert canvas to data URL (PNG format)
            const imageDataUrl = tiffCanvas.toDataURL('image/png');
            return resolve(imageDataUrl);
        };

        // Set the Image source to the base64-encoded data
        tiffImage.src = 'data:image/tiff;base64,' + base64Tiff;
    });
}

