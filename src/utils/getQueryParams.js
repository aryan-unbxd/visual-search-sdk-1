 function getQueryParams(pathState) {
    try{
        const queryParamSep = this.getQueryParamSeparator();
        const keyValSep = this.getKeyValueSeparator();
        const q = (this.getHashMode()) ? window.location.hash : window.location.search;
        let uri = q.substr(1);
        if (pathState) {
            uri = pathState;
        }
        const splited = uri.split(queryParamSep);
        const chunks = [];
        splited.forEach((item, index) => {
            if (item.indexOf(keyValSep) > 0) {
                chunks.push(item)
            } else {
                chunks[index - 1] = `${chunks[index - 1]}&${item}`;
            }
        })
        const params = {};

        for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i].split(keyValSep);
            const [chunkZero,chunkOne] = chunk ;
            if (typeof params[chunkZero] === 'undefined') {
                params[chunkZero] = chunkOne;
            } else if (typeof params[chunkZero] === "string") {
                // if (typeof params[chunkZero] === "string") {
                    params[chunkZero] = [params[chunkZero]]
                    params[chunkZero].push(chunkOne)
                // } 
            } else {
                params[chunkZero].push(chunkOne);
            }
        }
        return params;
    }catch(err){
        console.error("getQueryParams.js",err);
        return -1;
    }
   
}
export default getQueryParams