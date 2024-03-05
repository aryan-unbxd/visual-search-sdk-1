export const getImageAttributes =(source , isUrl) => new Promise(function (resolve, reject){
    if (source) {
        const img = new Image();
        img.src = isUrl ? source : URL.createObjectURL(source);
        img.onload = function () {
            const width = this.width;
            const height = this.height;
            console.log(this.height , this.width , img)
            return resolve({width : this.width , height : this.height , src: this.src})
            // if (width < 224 || height < 224) {
            //     alert('Image dimensions must be at least 224x224 pixels. Please choose a larger image.');
            //     // Optionally, you can clear the file input
            //     input.value = '';
            // } else {
            //     alert('Image dimensions are valid.');
            // }
        };
        img.onerror = (error) => {return reject('Error: ', error)};
        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = () => {return resolve({encodedData : reader.result , type : reader.result.split(',')[0] , image : reader.result.split(',')[1]})};
        // reader.onerror = (error) => {return reject('Error: ', error)};

        // img.src = URL.createObjectURL(file);
    }
    // var loadImage = function (src, scale) {
    //     return new Promise((resolve) => {
    //         var image = document.createElement('img');
    //         image.crossOrigin = "anonymous"
    //         image.onload = function () {
    //             image.width *= scale;
    //             image.height *= scale;
    //             resolve(image)
    //         }
    //         image.src = src;
    //         return image;
    //     })
    
    });