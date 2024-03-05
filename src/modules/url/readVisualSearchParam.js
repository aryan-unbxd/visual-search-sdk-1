function readVisualSearchParam(urlParts) {
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
}
export default readVisualSearchParam