//import UnbxdSearchCore from "@unbxd-ui/unbxd-search-core";
import delegate from "./utils/delegate";
import options from './utils/options';
import setMethods from './core/setMethods';
import setConfig from './utils/setConfig';

class UnbxdImageSearch {
    constructor(props) {
        this.setConfig = setConfig.bind(this);
        this.state = {
            visualSearchenabled : true,
            loadSecondScreen : false
        };
        this.viewState = {}
        this.setConfig(options,props);
        this.initialize();
    }


    delegate(delgationElem,evt,elem,fn){
        return delegate(delgationElem,evt,elem,fn);
    }
}
setMethods(UnbxdImageSearch);


export default UnbxdImageSearch;
 
