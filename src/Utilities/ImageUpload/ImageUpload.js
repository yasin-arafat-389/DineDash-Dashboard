import axios from "axios";
import Swal from "sweetalert2";

export const imageUpload = async (image, setLoading) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "imageUp");

  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/dfqoncxpr/image/upload`,
      formData
    );

    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.response?.data || error);
    setLoading(false);
    Swal.fire({
      icon: "warning",
      text: "Image upload failed. Please try again!",
    });

    return null;
  }
};
