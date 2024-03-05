export default  async function setImageAttributes() {
        this.state.imageUrlData =  await this.getImageSrc(this.state.imageDownloadUrl)
        let imageattributes =  await this.getImageAttributes(this.state.imageUrlData, true)
        this.state.imageattributes = imageattributes   
}
