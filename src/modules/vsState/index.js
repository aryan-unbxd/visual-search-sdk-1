/* eslint-disable no-unused-vars */
import stateutils from "../../utils/stateUtils";
import resetImageSearchSdk from "./resetImageState";
import setStateFromResponse from "./setStateFromResponse"
import setImageAttributes from "./setImageAttributes"
const {
    enableVisualSearch,
    disableVisualSearch,
    isVisualSearchEnabled,
    isImageUpload,
    getSelectedBoxUrl,
} = stateutils

const stateMethods = (prototype) => {
    prototype = Object.assign(prototype,{
        enableVisualSearch,
        disableVisualSearch,
        isVisualSearchEnabled,
        setImageAttributes,
        isImageUpload,
        getSelectedBoxUrl,
        resetImageSearchSdk,
        setStateFromResponse
    })
}

export {
    stateMethods as default,
    enableVisualSearch,
    disableVisualSearch,
    isVisualSearchEnabled,
    isImageUpload,
    setImageAttributes,

    getSelectedBoxUrl,
    resetImageSearchSdk,
    setStateFromResponse
};
