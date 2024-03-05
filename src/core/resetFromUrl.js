export default function resetFromUrl(){
   
 let urlParts = this.getQueryParams();
 this.state.selectedBoxUrl = decodeURIComponent(urlParts.box_url)
 this.state.visualSearchEnabled = urlParts.vs_enabled

    }

