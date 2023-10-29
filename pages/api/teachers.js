import teachersData from '../../public/mocks/teachers.json'

export default async function handler(req, res){
        const {method} = req;
        if (method === "GET"){
            res.status(200).json(teachersData)
        }
}




