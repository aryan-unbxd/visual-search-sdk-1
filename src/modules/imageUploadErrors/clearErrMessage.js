export default function clearErrMessage() {
    const {
        visualSearch,
        visualSearchRequest,
        imgErrDiv
    } = this.options;
        this.state.errMessage = ""
        imgErrDiv.innerHTML = ""
}