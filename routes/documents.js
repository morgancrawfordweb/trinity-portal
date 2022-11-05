const express = require('express');
const router = express.Router();
const upload = require("../middleware/multerGrid");
const documentsController = require("../controllers/documents");
const {ensureAuth, ensureGuest} = require('../middleware/auth');





// router.get("/:id", ensureAuth, documentsController.getDocument);

router.post("/createDocument/:id", documentsController.createDocument);

router.delete("/deleteDocument/:projectId/:documentId", documentsController.deleteDocument);

// router.post("/downloadDocument/:projectId/:documentId", documentsController.downloadDocument);

// upload.single("file"),
module.exports = router;