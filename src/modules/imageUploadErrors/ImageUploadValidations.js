
export default function isValidImage(imageType, imageSize) {
    if (imageType === 'image/jpeg' || imageType === 'image/png') {
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB in bytes
        if (imageSize < maxSizeInBytes) {
            return true
        } else {
            this.setError(this, "INVALID_IMAGE_SIZE")
            return false;
        }
    } else {
        this.setError(this, "INVALID_IMAGE_TYPE")
        return false;
    }

}

