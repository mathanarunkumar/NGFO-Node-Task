const Student = require('../models/student-model');

exports.addStudent = async (req, res) => {
  const { name, dob, gender, country, state, email, mobile, hobbies, education } = req.body;

  try {

    const uploadedFiles = {};

    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        uploadedFiles[file.fieldname] = file.path; 
      });
    }

    const student = new Student({ 
        name, 
        dob, 
        gender, 
        country, 
        state, 
        email, 
        mobile, 
        hobbies, 
        education, 
        photo: uploadedFiles.photo || null
    });

    await student.save();
    res.status(201).json({ student });
  } catch (error) {
    console.log("error",error)
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.body.id, req.body, { new: true });

    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.body.id);

    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
