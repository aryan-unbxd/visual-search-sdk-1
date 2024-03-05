/* eslint-disable no-unused-vars */
import readBoxUrlparam from './readBoxUrlparamkey';
import readVisualSearchParam from "./readVisualSearchParam";
import getBoxUrlParamValue from "./getBoxUrlParamValue"
import getVisualSearchQueryParams from "./getVisualSearchQueryParamString"
import readVisualSearchParams from "./readVisualSearchParams"
import resetFromUrl from "./resetFromUrl"
import urlUtils from '../../utils/urlUtils';
const {
    getVisualSearchEnabled,
    getApiUrl,
    visualSearchKeys,
    getQueryParamSeparator,
    getKeyValueSeparator,
    getHashMode
} = urlUtils
function getVisualSearchQueryParam()  {
    const {
        url: {
            visualSearchQueryParam: {
                algo = "DEFAULT",
                keyReplacer = "vs_enabled"
            } = {},
        } = {}
    } = this.options;
    return algo === "DEFAULT" ? 'vs_enabled' : keyReplacer;
};
function getboxUrlQueryParam()  {
    const {
        url: {
            boxUrl: {
                algo = "DEFAULT",
                keyReplacer = "box_url"
            } = {},
        } = {}
    } = this.options;
    return algo === "DEFAULT" ? 'box_url' : keyReplacer;
};
const urlMethods = (prototype) => {
    prototype = Object.assign(prototype,{
        readBoxUrlparam,
        readVisualSearchParam,
        getVisualSearchQueryParams,
        resetFromUrl,
        readVisualSearchParams,
        getVisualSearchQueryParam,
        getboxUrlQueryParam,
        getBoxUrlParamValue,
        getVisualSearchEnabled,
        getApiUrl,
        visualSearchKeys,
        getQueryParamSeparator,
        getKeyValueSeparator,
        getHashMode
    })
}

export {
    urlMethods as default,
    readBoxUrlparam,
    getVisualSearchQueryParam,
    getVisualSearchQueryParams,
    resetFromUrl,
    readVisualSearchParams,
    getboxUrlQueryParam,
    readVisualSearchParam,
    getBoxUrlParamValue,
    getVisualSearchEnabled,
    getApiUrl,
    visualSearchKeys,
    getQueryParamSeparator,
    getKeyValueSeparator,
    getHashMode
};
