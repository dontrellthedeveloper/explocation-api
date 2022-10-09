import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name: 'websites-warehouse',
    api_key: '797819693612793',
    api_secret: 'Cs5ji5yqUZJmFl0ZnAV3tV4XOJY'
})

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_KEY,
//     api_secret: process.env.CLOUD_KEY_SECRET
// })


export default cloudinary;