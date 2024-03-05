import {getImageAttributes} from './getimageAttributes';
import {getBase64} from './getBase64';
import getQueryParams from './getQueryParams';
import getBoxUrl from './getboxurl';
const utils = (prototype) => {
    prototype = Object.assign(prototype,{
        getImageAttributes,
        getBase64,
        getQueryParams,
        getBoxUrl
    })
}

export {
    utils as default,
    getImageAttributes,
    getBase64,
    getQueryParams,
    getBoxUrl

};