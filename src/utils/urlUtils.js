const urlUtils = {
    getHashMode() {
        const {
            url: {
                hashMode
            } = {}
        } = this.options;
        return hashMode;
    },
    getKeyValueSeparator() {
        const {
            url: {
                keyValueSeparator
            } = {}
        } = this.options;
        return keyValueSeparator;
    },
    getKeyValueSeparator() {
        const {
            url: {
                keyValueSeparator
            } = {}
        } = this.options;
        return keyValueSeparator;
    },

    getVisualSearchEnabled() {
        const {
            url: {
                visualSearchQueryParam: {
                    addToUrl,
                } = {},
            } = {}
        } = this.options;
        const visualSearchQParam = this.getVisualSearchQueryParam();
        const urlParts = this.getQueryParams();
        return addToUrl ? urlParts[visualSearchQParam] : this.viewstate.vsEnabled
    },
    visualSearchKeys() {
        return [this.getVisualSearchQueryParam(), this.getboxUrlQueryParam()]
    },
    getApiUrl() {
        const {
            siteKey
        } = this.options
        return "v2.0/sites/" + siteKey + "/images?"
    },
    getQueryParamSeparator() {
        const {
            url: {
                queryParamSeparator
            } = {}
        } = this.options;
        return queryParamSeparator;
    },

    getKeyValueSeparator() {
        const {
            url: {
                keyValueSeparator
            } = {}
        } = this.options;
        return keyValueSeparator;
    },


}

export default urlUtils