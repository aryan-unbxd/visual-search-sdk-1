import { isNode, isElement, isNodeList } from "../common/utils";
import {uploadConfigSchema,
    imageBoxSchema,
    otherSchema,
    visualSearchQueryParamSchema,
    boxUrlQueryParamSchema
} from "./configSchema"
function validateConfigs () {
    const{
        imageBox,
        uploadConfig,
        url
      } =this.options;
      const {
        visualSearchQueryParam,
        boxUrl
      } = url
const validate = (userConfig = {}, schema = {}) => {
    const { moduleName = "", config = {} } = schema;

    Object.keys(config).map(key => {
        let { datatype, required = false, allowedOptions = [], customValidations = null } = config[key];

        if (typeof required === "function") {
            required = required(userConfig)
        }

        //Checking if the datatype in user input config is not equal to that in metadata.
        if (typeof userConfig[key] !== datatype || (datatype === "object" && userConfig[key] === null)) {
            if (datatype === "element" || datatype === "array") {
                if (datatype === "element") {
                    const isInvalidElement =  !isNode(userConfig[key]) && !isElement(userConfig[key]) && !isNodeList(userConfig[key]);
                    //The config is required , but the user passed either null/undefined , or the element is not present on the DOM.
                    if ((required && (!userConfig[key] || isInvalidElement)) || (!required && userConfig[key] && isInvalidElement)) {
                        if (userConfig[key] === window) {
                            return null
                        }
                        this.onError(moduleName, `'${key}' is not a valid DOM selector`)
                    } 
                } else if (datatype === "array" && !Array.isArray(userConfig[key])) {
                    this.onError(moduleName, `'${key}' should be of ${datatype} datatype`)
                }
            } else {
                this.onError(moduleName, `'${key}' should be of ${datatype} datatype`)
            }
        }

        if (required && !userConfig[key] && datatype !== "element") {
            this.onError(moduleName, `'${key}' is required`)
        }

        if (allowedOptions.length && !allowedOptions.includes(userConfig[key])) {
            this.onError(moduleName, `Only ${allowedOptions.join(', ')} are allowed for '${key}'`)
        }
        //Checking for custom validations if any .
        if (customValidations) {
            customValidations(userConfig)
        }

    })
    validate(uploadConfig ,uploadConfigSchema)
    validate(imageBox , imageBoxSchema)
    validate(this.options, otherSchema)
    validate(visualSearchQueryParam, visualSearchQueryParamSchema)
    validate(boxUrl, boxUrlQueryParamSchema)
}
}
export default validateConfigs;