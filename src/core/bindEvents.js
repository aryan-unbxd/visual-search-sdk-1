

function bindEvents() {
    const {
        uploadConfig,
        visualSearchenabled,
        imageBox
    } = this.options;
    if (visualSearchenabled) {
        if (uploadConfig) {
            const config = uploadConfig;
            if (config && config.input) {
                config.el.addEventListener("keydown", (e) => {
                    const val = e.target.value;
                    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
                        if (val !== "") {
                            this.setImageValue.bind(this)();
                        }
                    }
                });
            }
            if (config && config.input) {
                config.input.addEventListener("change", this.uploadImageFile.bind(this))
            }
            if (config && config.button) {
                console.log("inside button clieck", config.button)
                config.button.addEventListener("click", this.setImageValue.bind(this));
            }

            this.imageContainer = imageBox.el;
            if (imageBox.collapseOnScroll) {

                console.log(this.state.loadSecondScreen,"gdfgfddfgdfgdfggdf")
                if (!this.state.loadSecondScreen) {
                this.addIntersectionObserver()
                this.delegate(
                    this.imageContainer,
                    "click",
                    `#downbutton`,
                    this.downbuttonClick.bind(this)
                );
            }
            }
            if (this.imageContainer) {
                this.delegate(
                    this.imageContainer,
                    "click",
                    `.center-dot`,
                    this.onBoundingBoxClick.bind(this)
                );
            }
            this.resetFromUrl()
        }
    }
}
export default bindEvents;


