
const onBoundingBoxClick = function(e) {
    let elem  = e.target;
    if( (this.state.selectedBoundingBox !== parseInt(elem.getAttribute("boxid")))) {
        window.unbxdSearch.checkFacets();
        window.unbxdImageSearch.state.isClickOnHotspot = true
        this.state.clickedHotSpot = parseInt(elem.getAttribute("boxid"))
        window.unbxdImageSearch.state.selectedBoxUrl = elem.getAttribute("hotspot_url")
        this.state.selectedBoxUrl = elem.getAttribute("hotspot_url")
        window.unbxdSearch.getResults();
    }
    }

export {
    onBoundingBoxClick 
};
