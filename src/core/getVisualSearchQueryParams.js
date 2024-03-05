export default function getVisualSearchQueryParams(){
    const { url : {
        visualSearchQueryParam = {},
        boxUrl ={}
    }  = {}
     } = this.options ; 
     console.log(this.state.selectedBoxUrl, "dfgdfgdfg" , visualSearchQueryParam)
     let queryString = (visualSearchQueryParam.addToUrl ? `&${visualSearchQueryParam.keyReplacer}=true&` : "") + (boxUrl.addToUrl && this.state.selectedBoxUrl ? `${boxUrl.keyReplacer}=${encodeURIComponent(this.state.selectedBoxUrl)}` : "");
     console.log(queryString,"queryString", this.state)
     return queryString
        }
    