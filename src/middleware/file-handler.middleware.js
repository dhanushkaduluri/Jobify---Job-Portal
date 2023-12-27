import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/resumes/');
    },
    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        console.lo
        cb(null, name);
    },
});

export const uploadFile = multer({
    storage: storageConfig,
}).single('resume'); // Assuming the field in your form is named 'pdfFile'
