export const uploadImage = async (image, preset: string) => {
  const formData = new FormData();
  const cloudURL = 'https://api.cloudinary.com/v1_1/dptkkaj8n/image/upload';
  formData.append("file", image);
  formData.append('upload_preset', preset)
  formData.append("api_key", process.env.CLOUDINARY_KEY as string);
  formData.append("signature", "bfd09f95f331f558cbd1320e67aa8d488770583e");

  fetch(cloudURL, {
    method: "POST",
    body: formData
  })
}