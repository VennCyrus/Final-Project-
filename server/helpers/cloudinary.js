const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dt7s07owk",
    api_key: "435994949893882",
    api_secret: "ljUj1Az3Rzge0nbaddrqXve7YbU",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });

    return result;
}

const upload = multer({storage});

module.exports = {upload, imageUploadUtil};
