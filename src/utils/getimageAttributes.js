export const getImageAttributes =(source , isUrl) => new Promise(function (resolve, reject){
    if (source) {
        const img = new Image();
        img.src = isUrl ? source : URL.createObjectURL(source);
        img.crossOrigin="anonymous"
        img.onload = function () {
            const width = this.width;
            const height = this.height;
            return resolve({width : this.width , height : this.height , src: this.src , imgElem : img})
   
        };
        img.onerror = (error) => {return reject('Error: ', error)};    
    }
    });