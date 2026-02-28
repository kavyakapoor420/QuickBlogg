import multer from 'multer'

const upload=multer({storage:multer.diskStorage({})})

export default upload ;

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')

//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true)
//     } else {
//         cb(new Error('Only image files are allowed!'), false)
//     }
// }

// const upload = multer({ storage: storage, fileFilter: fileFilter })

// export default upload   

