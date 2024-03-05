export default function renderErrMessage(type) {
    const {
        imgErrDiv
    } = this.options;
    this.state.errMessage = this.errorMessages[type]
    if(this.state.errMessage){
    imgErrDiv.innerHTML = this.state.errMessage
    }
}