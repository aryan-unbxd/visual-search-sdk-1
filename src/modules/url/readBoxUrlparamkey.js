function readBoxUrlparam(urlParts) {
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

export default readBoxUrlparam;