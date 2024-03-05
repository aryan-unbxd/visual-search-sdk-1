export default function handleVisualSearchRequest() {
    let headers = {};
    headers.authorization = this.options.apiKey;
    if (this.state && this.state.isImageUpload) {
        if (this.state.imageUrl) {
            const data = {
                "imageUrl": this.state.imageUrl
            }
            headers["content-type"] = "application/json";
            return { headers, method: 'POST', body: JSON.stringify(data) };
        }
        else if (this.state.encodedImage) {
            headers["content-type"] = this.state.fileType
            return { headers: headers, method: 'POST', body: this.state.encodedImage };
        }
    }
    else {
        headers["content-type"] = "application/json";
        return { headers, method: 'GET' };
    }
}
