export class ImageService {
  async upload(file) {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUD_UNSIGNED_PRESET
    );

    return fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data.url)
      .catch((e) => {
        throw e;
      });
  }
}
