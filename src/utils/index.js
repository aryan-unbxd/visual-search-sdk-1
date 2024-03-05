import {getImageAttributes} from './getimageAttributes';
import {getBase64} from './getBase64';
import getQueryParams from './getQueryParams';
import getImageSrc from './getImageSrc';
const utils = (prototype) => {
    prototype = Object.assign(prototype,{
        getImageAttributes,
        getBase64,
        getQueryParams,
        getImageSrc
    })
}

export {
    utils as default,
    getImageAttributes,
    getBase64,
    getQueryParams,
    getImageSrc

};