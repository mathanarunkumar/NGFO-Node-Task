const express = require("express");
const router = express.Router();
const {upload} = require("../middleware/uploads")


const {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent 
} = require("../controller/student-controller");

router.route('/addemployeeprofile').post(upload.any(), addStudent);
router.route('/getallstudents').get(getAllStudents)
router.route('/updatestudent').post(updateStudent)
router.route('/deletestudent').post(deleteStudent)



module.exports = router;