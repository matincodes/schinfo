import teachersData from '../../public/mocks/teachers.json'

export default async function handler(req, res){
        const {method} = req;
        if (method === "GET"){
            res.status(200).json(teachersData)
        }else if (req.method === "POST") {
            const newTeacher = req.body; 
            teachersData.push(newTeacher);
            res.status(201).json(newTeacher);
        }
}
