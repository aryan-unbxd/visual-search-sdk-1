const urlUtils = {
    getVisualSearchQueryParam() {
        const {
            url: {
                visualSearchQueryParam: {
                    algo = "DEFAULT",
                    keyReplacer = "vs_enabled"
                } = {},
            } = {}
        } = this.options;
        return algo === "DEFAULT" ? 'vs_enabled' : keyReplacer;
    },
    getboxUrlQueryParam() {
        const {
            url: {
                boxUrl: {
                    algo = "DEFAULT",
                    keyReplacer = "box_url"
                } = {},
            } = {}
        } = this.options;
        return algo === "DEFAULT" ? 'box_url' : keyReplacer;
    },
    getVisualSearchEnabled() {
        const {
            url: {
                visualSearchQueryParam: {
                    addToUrl , 
                } = {},
            } = {}
        } = this.options;
        const visualSearchQParam = this.getVisualSearchQueryParam();
        const urlParts = this.getQueryParams();
        return addToUrl ? urlParts[visualSearchQParam] : this.viewstate.vsEnabled
    },
    enableVisualSearch(){
        this.state.visualSearchEnabled = true; 
    },
    disableVisualSearch(){
        this.state.visualSearchEnabled = false; 
    },
    isVisualSearchEnabled(){
        if(this.state.visualSearchEnabled){
            return true;
        }
        else return false;
    },
    getBoxUrlParamValue() {
        const {
            url: {
                boxUrl: {
                    addToUrl , 
                } = {},
            } = {}
        } = this.options;
        const boxUrlQueryParam = this.getboxUrlQueryParam();
        const urlParts = this.getQueryParams();
        return addToUrl ? decodeURIComponent(urlParts[boxUrlQueryParam]) : this.state.selectedBoxUrl
    },
    isImageUpload () {
        if(this.state && this.state.isImageUpload){
            return true
        }else return false
    },
    getSelectedBoxUrl(){
        if(this.state && this.state.selectedBoxUrl){
            return this.state.selectedBoxUrl.replace('/', '') + "?";
        }else return ""
    },
    visualSearchKeys(){
        return [this.getVisualSearchQueryParam() , this.getboxUrlQueryParam()]
    },
    getApiUrl(){
        const {
            siteKey
        } = this.options
        return "v2.0/sites/" + siteKey + "/images?"
    },
    readVisualSearchParam(urlParts) {
        const { url: {
            visualSearchQueryParam: {
                algo = "DEFAULT",
                keyReplacer
            },
        } = {}
        } = this.options;
        let obj = {}
    
        if (algo === "KEY_VALUE_REPLACER") {
            const {
                [encodeURIComponent(keyReplacer)]: vs_enabled
            } = urlParts;
    
            const key = keyReplacer;
    
            if (vs_enabled) {
                obj = { [key]: [vs_enabled] }
            }
        } else {
            const {
                vs_enabled
            } = urlParts;
    
            if (vs_enabled) {
                obj = { "vs_enabled": [vs_enabled] }
            }
        }
    
        return obj;
    },
    readBoxUrlparam(urlParts) {
        const { url: {
    
            boxUrl: { algo = "DEFAULT",
                keyReplacer }
        } = {}
        } = this.options;
        let obj = {}
    
        if (algo === "KEY_VALUE_REPLACER") {
            const {
                [encodeURIComponent(keyReplacer)]: box_url
            } = urlParts;
    
            const key = keyReplacer;
    
            if (box_url) {
                obj = { [key]: [box_url] }
            }
        } else {
            const {
                box_url
            } = urlParts;
    
            if (box_url) {
                obj = { "box_url": [decodeURIComponent(box_url)] }
            }
        }
    
        return obj;

    }     
    ,
    getQueryParamKeys(){
        return { ...this.getVisualSearchQueryParam() , ...this.getboxUrlQueryParam()}
       },
       getQueryParamSeparator(){
        const {
            url: {
                queryParamSeparator
            } = {}
        } = this.options;
        return queryParamSeparator;
       },
       getKeyValueSeparator(){
        const {
            url: {
                keyValueSeparator
            } = {}
        } = this.options;
        return keyValueSeparator;
       },
       getHashMode(){
        const {
            url: {
                hashMode
            } = {}
        } = this.options;
        return hashMode;
       }
}

export default urlUtils