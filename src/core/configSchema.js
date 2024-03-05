export const uploadConfigSchema = {
    moduleName: "uploadConfig",
    config: {
            button : {
                required: true,
                datatype: "element"
            },
            input : {
                required: true,
                datatype: "element"
            },
            el: {
                required: true,
                datatype: "element"
            }
        },
    };



export const imageBoxSchema = {
    moduleName: "imageBox",
    config: {   
        el : {
                required: true,
                datatype: "element"
        },
        collapseOnScroll : {
            datatype: "boolean"
        },
        boundingBoxUI:  {
            required: function (imageBox) {
                return imageBox.el
            },
            datatype: "function",
        },
        afterImageBoxRender:  {
            required: function (imageBox) {
                return imageBox.el
            },
            datatype: "function",
        }
        }
    };

export const otherSchema = {
    moduleName: "otherSchema",
    config: {   
        imgErrDiv : {
                required: true,
                datatype: "element"
        },
        siteKey: {
            required: true,
            datatype: "string"
        },
        apiKey: {
            required: true,
            datatype: "string"
        },
}
};

export const visualSearchQueryParamSchema = {
    moduleName: "visualSearchQueryParam",
    config: {
        addToUrl: {
            required: true,
            datatype: "boolean"
        },
        keyReplacer: {
            required: false,
            datatype: "string"
        },
        algo: {
            required: false,
            datatype: "string"
        }
    }
};

export const boxUrlQueryParamSchema = {
    moduleName: "boxUrl",
    config: {
        addToUrl: {
            required: true,
            datatype: "boolean"
        },
        keyReplacer: {
            required: false,
            datatype: "string"
        },
        algo: {
            required: false,
            datatype: "string"
        }
    }
};

