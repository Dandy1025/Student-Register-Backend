require('../db/config.js');
require('dotenv').config();

const registerStudent = async(req, res) => {
    const { stuName, stuAge, stuContact } = req.body;

    try{
        const sql = "INSERT INTO students (stuName, stuAge, stuContact) VALUES(?,?,?,)";

        const result = await db.execute(sql,[stuName, stuAge, stuContact]);
        res.status(200).jason({message: "Student Registered Successfully..!"})
    } catch(err) {
        console.error(err.message);
        res.status(500).json({message: "Registration Failed..!"})
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
    registerStudent
};