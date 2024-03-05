import { boundingBoxUI } from "../modules/renderImageBoundingBox/boundingBoxUi";

const options = {
    imgErrDiv : document.getElementById("image-upload-errors"),
    uploadConfig: {
        button: document.getElementById("visualSearchUploadButtonId"),
        input: document.getElementById("visualSearchInputId"),
        el: document.getElementById("visualSearchUploadModalContainer"),
    },
    imageBox: {
        el: document.getElementById("imageContainer"),
        imageWrapperClass: "UNX-VS-Image-box-Wrapper",
        action: "click",
        collapseOnScroll : true, 
        boundingBoxUI: boundingBoxUI,
        afterImageBoxRender : function(){},
    },
    url: {
        hashMode: false,
        allowExternalUrlParams: false,
        seoFriendlyUrl: true,
        queryParamSeparator: "&",
        keyValueSeparator: "=",
        visualSearchQueryParam: {
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: "vs_enabled"
        },
        boxUrl: {
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: "box_url"
        }
    }
}
export default options