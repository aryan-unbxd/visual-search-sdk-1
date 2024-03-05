/* eslint-disable no-unused-vars */
import { onBoundingBoxClick } from './onBoundingBoxClick';
import { boundingBoxUI } from './boundingBoxUi';
import renderImageBoundingBox    from './renderImageBoundingBox';
import renderCroppedImages from "./renderCroppedImages"

const renderImageBox = (prototype) => {
    prototype = Object.assign(prototype,{
        renderImageBoundingBox,
        renderCroppedImages,
        onBoundingBoxClick,
        boundingBoxUI,
    })
}

export {
    renderImageBox as default,
    renderImageBoundingBox,
    renderCroppedImages,
    onBoundingBoxClick,
    boundingBoxUI,
};
