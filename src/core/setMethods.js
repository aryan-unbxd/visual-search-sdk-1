import setImage from "../modules/visualSearchInput/setImage"
import setErrorMessage from "../modules/imageUploadErrors/setErrorMessage";
import renderImageBox from "../modules/renderImageBoundingBox/renderImageBox"
import utils from "../utils";

import initialize from './initialize';
import resetImageSearchSdk from "./resetImageState"
import resetFromUrl from "./resetFromUrl"
import urlUtils from "./urlUtils";
import handleVisualSearchRequest from "./handleVisualSearchRequest"
import setStateFromResponse from "./setStateFromResponse"
import getVisualSearchQueryParams from "./getVisualSearchQueryParams"
import readVisualSearchParams from "./readVisualSearchParams"
import { errorMessages } from "../common/errorMessages";

const {
    getVisualSearchQueryParam,
    getboxUrlQueryParam,
    getVisualSearchEnabled,
    getBoxUrlParamValue,
    enableVisualSearch,
    disableVisualSearch,isVisualSearchEnabled,
    isImageUpload,
    getSelectedBoxUrl,
    getApiUrl,
    readVisualSearchParam,
    readBoxUrlparam,
    visualSearchKeys,
    getQueryParamKeys,
    getQueryParamSeparator,
    getKeyValueSeparator,
    getHashMode
} = urlUtils
const updateConfig = function(config){
  //  console.log(config)
    const {
        options
    } = this;

}
const downbuttonClick = function(config){
  const{
    imageBox
  } =this.options;
  console.log("clicked on down button ")
  imageBox.el.classList.remove("image-wrapper-cropped");
  this.state.loadSecondScreen = false
  this.renderImageBoundingBox();
  this.addIntersectionObserver();
}

function addIntersectionObserver(){
  let options = {
      rootMargin: '1px',
      threshold: 1.0
  };
  
  let callback = (entries, observer) => {
  entries.forEach(entry => {
  console.log(entry, "check entry");
  if (!entry.isIntersecting) {
      this.state.loadSecondScreen = true
      this.renderImageBoundingBox();
      observer.unobserve(entry.target)
          }
      });
  };
  
  let observer = new IntersectionObserver(callback, options);
  observer.observe(this.imageContainer);
}


const setMethods = (UnbxdImageSearch) => {
  //  console.log("on intilization of image search sdk");
    const {
        prototype
    } = UnbxdImageSearch;
    utils(prototype)
    setImage(prototype);
    setErrorMessage(prototype);
    renderImageBox(prototype);
    prototype.updateConfig = updateConfig;
    prototype.resetImageSearchSdk = resetImageSearchSdk;
    prototype.getVisualSearchQueryParam = getVisualSearchQueryParam;
    prototype.getboxUrlQueryParam = getboxUrlQueryParam;
    prototype.getVisualSearchEnabled = getVisualSearchEnabled;
    prototype.handleVisualSearchRequest = handleVisualSearchRequest;
    prototype.getBoxUrlParamValue = getBoxUrlParamValue;
    prototype.enableVisualSearch = enableVisualSearch;
    prototype.disableVisualSearch = disableVisualSearch;
    prototype.isVisualSearchEnabled = isVisualSearchEnabled;
    prototype.isImageUpload = isImageUpload;
    prototype.getSelectedBoxUrl = getSelectedBoxUrl;
    prototype.getVisualSearchQueryParams = getVisualSearchQueryParams;
    prototype.setStateFromResponse = setStateFromResponse;
    prototype.readVisualSearchParams = readVisualSearchParams;
    prototype.readVisualSearchParam = readVisualSearchParam;
    prototype.readBoxUrlparam = readBoxUrlparam;
    prototype.getApiUrl = getApiUrl;
    prototype.visualSearchKeys = visualSearchKeys;
    prototype.initialize = initialize;
    prototype.resetFromUrl = resetFromUrl;
    prototype.getQueryParamKeys = getQueryParamKeys;
    prototype.getQueryParamSeparator = getQueryParamSeparator;
    prototype.getKeyValueSeparator = getKeyValueSeparator;
    prototype.getHashMode = getHashMode;
    prototype.downbuttonClick = downbuttonClick;
    prototype.addIntersectionObserver = addIntersectionObserver;
    prototype.errorMessages = errorMessages;

    
}
export default setMethods;
