export const uploadImage = async (image: File, preset: string) => {
  const formData = new FormData();
  const cloudURL = 'https://api.cloudinary.com/v1_1/dptkkaj8n/image/upload';
  formData.append("file", image);
  formData.append('upload_preset', preset)
  formData.append("timestamp", String(Date.now()));
  formData.append("api_key", process.env.CLOUDINARY_KEY as string);

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData
    })
    const img = await resp.json();
    return img.secure_url as string;
  } catch (e) {
    console.error(e);
    return null
  }
}