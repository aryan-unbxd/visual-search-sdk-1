

import bindEvents from './bindEvents';
import validateConfigs from "./validateConfig"
const initialize = function() {  
    this.validateConfigs = validateConfigs.bind(this)
    this.validateConfigs();
    this.bindEvents = bindEvents.bind(this);
    this.bindEvents();



    

}
export default initialize;
