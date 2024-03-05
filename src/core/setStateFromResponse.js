export default function setStateFromResponse(searchMetaData){
    if(searchMetaData.image) {
this.state.boundingboxData = searchMetaData.image.boxes
this.state.imageDownloadUrl = searchMetaData.image.downloadUrl
this.state.selectedBoundingBoxId = searchMetaData.image.selected
this.state.isImageUpload = false
let box_url;
searchMetaData.image.boxes.forEach(( value) => {
    if(value.id === searchMetaData.image.selected){
    return box_url = value.url
}})
if(this.getBoxUrlParamValue() !== box_url){
    this.state.selectedBoxUrl = box_url
    }
}
}