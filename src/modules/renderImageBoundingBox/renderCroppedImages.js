/* eslint-disable no-unused-vars */
export default async function renderCroppedImages(boundingboxData, selectedBoxId, imageContainer, imageDownloadUrl) {
    try {
        let imagetag = imageContainer.classList.contains("image-wrapper-cropped") ? `<div class="main-image-wrapper" id="mainimagecontainer">
        <img id="image-box" class="UNX-VS-Imagebox" crossOrigin="anonymous" src="${imageDownloadUrl}">
        ` : `<img class="UNX-VS-Imagebox" id="image-box" src="${imageDownloadUrl}">`;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        let dataImage = await loadImage(imageDownloadUrl, 1)
        let secondayImages = `<div class="secondary-images" id="secondary">`
        boundingboxData.map((data) => {
            if (data.vertices && data.vertices.length === 2) {
                let selected = parseInt(selectedBoxId) == data.id ? true : false
                const left = (data.vertices[0].x / dataImage.width) * 100;
                const top = (data.vertices[0].y / dataImage.height) * 100;
                const rightleft = (data.vertices[1].x / dataImage.width) * 100
                const righttop = (data.vertices[1].y / dataImage.height) * 100
                const height = righttop - top;
                const width = rightleft - left;
                let canvaswidth = data.vertices[1].x - data.vertices[0].x;
                let canvasheight = data.vertices[1].y - data.vertices[0].y
                canvas.width = canvaswidth;
                canvas.height = canvasheight;
                ctx.drawImage(dataImage,
                    data.vertices[0].x, data.vertices[0].y, canvaswidth, canvasheight,
                    0, 0, canvaswidth, canvasheight);
                const centerDotTop = (top + righttop) / 2;
                const centerDotleft = (left + rightleft) / 2;
                let boxUi = `<div class="bounding-box  ${selected ? 'selected' : 'hidden'}" id="bounding-box" boxid=${data.id} style= "top: ${top}%; left: ${left}%; width: ${width}%; height: ${height}%;"></div>`;
                imagetag += boxUi
                let centerDotUi = `<div class="center-dot" boxid=${data.id} hotspot_url=${data.url} style="left: ${centerDotleft}%; top: ${centerDotTop}%;"></div>`
                imagetag += centerDotUi
                let imgtag = `<div class="cropped-image-wrapper" ><img class="${selected ? 'selected-cropped-image' : ''}" src="${canvas.toDataURL()}" boxid=${data.id} hotspot_url=${data.url} ></div>`;
                secondayImages += imgtag

            } else {
                throw new Error("Input data should contain exactly 2 objects.");
            }
        });

        if (imageContainer.classList.contains("image-wrapper-cropped")) {
            imagetag += `<span id="downbutton" class="arrow circle down"></span></div>`
            secondayImages += `</div>`
            imagetag = imagetag + secondayImages;
        }
        return imagetag;

    }
    catch (err) {
        console.error("Banners > renderCroppedImages", err)
    }

}

var loadImage = function (src, scale) {
    return new Promise((resolve) => {
        var image = document.createElement('img');
        image.crossOrigin = "anonymous"
        image.onload = function () {
            image.width *= scale;
            image.height *= scale;
            resolve(image)
        }
        image.src = src;
        return image;
    })

}


