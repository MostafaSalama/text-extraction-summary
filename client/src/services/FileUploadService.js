import axios from 'axios'
export const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post("/api/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};
export default upload;
