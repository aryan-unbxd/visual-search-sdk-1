import setImage from "../modules/visualSearchInput/setImage"
import setErrorMessage from "../modules/imageUploadErrors/setErrorMessage";
import renderImageBox from "../modules/renderImageBoundingBox/renderImageBox"
import urlMethods from "../modules/url";
import stateMethods from "../modules/vsState";
import utils from "../utils";
import initialize from './initialize';
import handleVisualSearchRequest from "./handleVisualSearchRequest"


const downbuttonClick = function(config){
  const{
    imageBox
  } =this.options;
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
    const {
        prototype
    } = UnbxdImageSearch;
    utils(prototype);
    setImage(prototype);
    setErrorMessage(prototype);
    renderImageBox(prototype);
    urlMethods(prototype);
    stateMethods(prototype)
    prototype.initialize = initialize;
    prototype.handleVisualSearchRequest = handleVisualSearchRequest;
    prototype.downbuttonClick = downbuttonClick;
    prototype.addIntersectionObserver = addIntersectionObserver;    
}
export default setMethods;
