function getBoxUrl() {
    const {
        boundingboxData,
        selectedBoundingBoxId
    }=
    this.state
    let data =  boundingboxData.filter(( value) => {
        if(value.id === selectedBoundingBoxId){
        return value.url
    }})
    return data[0].url;
}
export default getBoxUrl;