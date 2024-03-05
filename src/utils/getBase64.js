
export const getBase64 = (file) => new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {return resolve({encodedData : reader.result , type : reader.result.split(',')[0] , image : reader.result.split(',')[1]})};
    reader.onerror = (error) => {return reject('Error: ', error)};
})
