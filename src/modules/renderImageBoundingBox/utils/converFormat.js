function convertFormat(inputData ,id , url) {
    if (inputData.length !== 2) {
        throw new Error("Input data should contain exactly 2 objects.");
    }

    return {
        x1: inputData[0].x || "",
        y1: inputData[0].y || "",
        x2: inputData[1].x || "",
        y2: inputData[1].y || "",
        id : id || "",
        url : url|| '',
    };

}
export default convertFormat;