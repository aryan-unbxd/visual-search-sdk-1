
const onBoundingBoxClick = function(e) {
    let elem  = e.target;
  //  console.log(elem)
    //needs fixing
    // const selected = (this.options.pagesize.action === "click") ? elem:elem.options[elem.selectedIndex];
    // const val = selected.id;
    if( (this.state.selectedBoundingBox !== parseInt(elem.getAttribute("boxid")))) {
        window.unbxdSearch.checkFacets();
        window.unbxdImageSearch.state.isClickOnHotspot = true
        this.state.clickedHotSpot = parseInt(elem.getAttribute("boxid"))
     //   console.log(this.state ,elem.getAttribute("hotspot_url") , parseInt(elem.getAttribute("boxid")))
        // if(this.state.responseObj && this.state.responseObj.searchMetaData && this.state.responseObj.searchMetaData.image && this.state.responseObj.searchMetaData.image.boxes){
        //   this.state.responseObj.searchMetaData.image.boxes.forEach(element => {
        //         if(this.state.selectedBoundingBox === parseInt(element.id)){
        //             //--triage--need to fixed once bug is fixed
        //             console.log(element["url "],"element.urlelement.urlelement.urlelement.urlelement.url")
        //             let urlSlug = element["url "];
        //             console.log(element["url "]);
        //             this.state.urlSlug = urlSlug
        //             boxUrl =  element.url;

        //         }
                
        //     });
        window.unbxdImageSearch.state.selectedBoxUrl = elem.getAttribute("hotspot_url")
        this.state.selectedBoxUrl = elem.getAttribute("hotspot_url")
        // const url = new URL(window.location.href);

        // url.searchParams.set("box_url" , elem.getAttribute("hotspot_url"))
        // history.pushState({}, '', url.toString());
        }
        window.unbxdSearch.getResults();
    }

export {
    onBoundingBoxClick 
};
