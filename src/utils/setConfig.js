import extend from './extend';
const setConfig = function(options = {}, props = {}) {
    console.log(options, props ,"inside setConfig")
    this.options = extend(true,{},options,props);
    console.log(this.options);
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
