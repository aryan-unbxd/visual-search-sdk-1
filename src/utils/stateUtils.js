const stateutils = {

    enableVisualSearch() {
        this.state.visualSearchEnabled = true;
    },
    disableVisualSearch() {
        this.state.visualSearchEnabled = false;
    },
    isVisualSearchEnabled() {
        if (this.state.visualSearchEnabled) {
            return true;
        }
        else return false;
    },
    isImageUpload() {
        if (this.state && this.state.isImageUpload) {
            return true
        } else return false
    },
    getSelectedBoxUrl() {
        if (this.state && this.state.selectedBoxUrl) {
            return this.state.selectedBoxUrl.replace('/', '') + "?";
        } else return ""
    }
}

export default stateutils