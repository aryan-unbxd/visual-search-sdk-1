export default function getVisualSearchQueryParams(){
    const { url : {
        visualSearchQueryParam = {},
        boxUrl ={}
    }  = {}
     } = this.options ; 
     let queryString = (visualSearchQueryParam.addToUrl ? `&${visualSearchQueryParam.keyReplacer}=true&` : "") + (boxUrl.addToUrl && this.state.selectedBoxUrl ? `${boxUrl.keyReplacer}=${encodeURIComponent(this.state.selectedBoxUrl)}` : "");
     return queryString
        }
    