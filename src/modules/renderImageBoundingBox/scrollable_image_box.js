export const boundingBoxUI = async (boundingboxData, selectedBoxId, imageContainer, imageDownloadUrl) => {
    const imagetag = `<img class="UNX-VS-Imagebox" id="image-box" src="${imageDownloadUrl}">`;
    let imageBoxUi = imagetag;
    let dataimage = await loadImage(imageDownloadUrl, 1)
        boundingboxData.map((data) => {
            if (data.vertices) {
                let selected = parseInt(selectedBoxId) == data.id ? true : false
                let boundingBox = convertFormat(data.vertices , data.id , data.url)
                    const left = (boundingBox.x1 / dataimage.width) * 100;
                    const top = (boundingBox.y1 / dataimage.height) * 100;
                    const rightleft = (boundingBox.x2 / dataimage.width) * 100
                    const righttop = (boundingBox.y2 / dataimage.height) * 100
                    const height = righttop - top;
                    const width = rightleft - left;
                    const centerDotTop = (top + righttop) / 2;
                    const centerDotleft = (left + rightleft) / 2;
                    let boxUi = `<div class="bounding-box  ${selected ? 'selected' : 'hidden'}" id="bounding-box" boxid=${boundingBox.id} style= "top: ${top}%; left: ${left}%; width: ${width}%; height: ${height}%;"></div>`;
                    imageBoxUi += boxUi
                    let centerDotUi = `<div class="center-dot" boxid=${boundingBox.id} hotspot_url=${boundingBox.url} style="left: ${centerDotleft}%; top: ${centerDotTop}%;"></div>`
                    imageBoxUi += centerDotUi
            }
        })
    return imageBoxUi;
    

}

var loadImage = function (src, scale) {
    return new Promise((resolve) => {
        var image = document.createElement('img');
        image.onload = function () {
            image.width *= scale;
            image.height *= scale;
            resolve(image)
        }
        image.src = src;
        return image;
    })

}

















function convertFormat(inputData ,id , url) {
    if (inputData.length !== 2) {
        throw new Error("Input data should contain exactly 2 objects.");
    }

    return {
        x1: inputData[0].x || "",
        y1: inputData[0].y || "",
        x2: inputData[1].x || "",
        y2: inputData[1].y || "",
        id : id || "",
        url : url|| '',
    };

}