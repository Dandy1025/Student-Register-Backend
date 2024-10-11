require('../db/config.js');
require('dotenv').config();

const registerStudent = async(req, res) => {
    const { stuName, stuAge, stuContact } = req.body;

    let query = "INSERT INTO students (stuName, stuAge, stuContact) VALUES(?,?,?,)";
    let values = [stuName, stuAge, stuContact];

    try {
        await pool.query(query, values);
        res.status(200).json({ message: 'Student registered successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const registerGuardian = async (req, res) => {
    const { guaName, guaAge, guaContact } = req.body;

    let query = 'INSERT INTO guardians (gudName, gudAddress, gudContact) VALUES(?,?,?)';
    let values = [guaName, guaAge, guaContact];

    try {
        await pool.query(query, values);
        res.status(200).json({ message: 'Guardian registered successfully!' });
    }catch (err){
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerGuardian, 
    registerStudent
};