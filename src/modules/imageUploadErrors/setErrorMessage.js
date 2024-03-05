import clearErrMessage from "./clearErrMessage"
import isValidUrl from "./isValidUrl"
import isValidImage  from "./ImageUploadValidations"
import isValidDimension from "./imageDimensions"
import renderErrMessage from "./renderErrMessage"
const setError = function (state, type) {

    if (state) {
        switch (type) {
            case 'INVALID_URL':
                this.renderErrMessage(type); 
                break;
            case 'INVALID_IMAGE_TYPE':
                this.renderErrMessage(type); 
                break;
            case 'INVALID_IMAGE_DIMENSIONS' : 
                this.renderErrMessage(type);
                break;
            // case 'AFTER_VS_API_ERROR':
            //     this.renderApiErrorMessage();
            //     break;
            case 'INVALID_IMAGE_SIZE':
                this.renderErrMessage(type); 
                break;
        }
    }
}

const setErrorMessage = (prototype) => {
    prototype = Object.assign(prototype, {
        setError,
        clearErrMessage,
        isValidUrl,
        isValidImage,
        isValidDimension,
        renderErrMessage
    })
}
export {
    setErrorMessage as default,
    setError,
    clearErrMessage,
    isValidUrl,
    isValidImage,
    isValidDimension,
    renderErrMessage
}