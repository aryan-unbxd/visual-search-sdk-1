export default function isValidDimension (width, height) {
    if (width < 224 || height < 224) {
        this.setError(this, "INVALID_IMAGE_DIMENSIONS")
        return false;
    }
    else {
        return true;
    }

}