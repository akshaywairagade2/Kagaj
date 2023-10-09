const express = require('express')
const { createissue, AllIssues } = require("../controllers/createissue")

const router = express.Router();

router.post('/createissue', createissue);
router.get('/getall', AllIssues);


module.exports = router;
