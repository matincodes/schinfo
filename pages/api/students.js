import studentsData from '../../public/mocks/students.json'

export default async function handler(req, res){
        const {method} = req;
        if (method === "GET"){
            res.status(200).json(studentsData)
        }else if (req.method === "POST") {
            const newStudent = req.body; 
            studentsData.push(newStudent);
            res.status(201).json(newStudent);
        }
}