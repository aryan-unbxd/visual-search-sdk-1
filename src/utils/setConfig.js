import extend from './extend';
const setConfig = function(options = {}, props = {}) {
    this.options = extend(true,{},options,props);
    const {
        enabled,
        uploadConfig,
        imageBox,
        imgErrDiv,

    } = props;

    if(uploadConfig){
        
        this.options.visualSearchenabled = (enabled) ? enabled : options.visualSearch.enabled;
    }
    if(imageBox){
        this.state.imageBoxElement = imageBox.el ? imageBox.el : options.imageBox.el
        this.options.scrollabletemplate = imageBox.collapseOnScroll ? imageBox.collapseOnScroll : false;
    }

}
export default setConfig;
