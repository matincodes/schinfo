import axios from 'axios';
import { Pacifico } from 'next/font/google';
import { useState } from 'react';
const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })

export default function Teachers(){
    const initialTeacherData = {
        idNumber: "",
        title: "",
        name: "",
        surname: "",
        dateOfBirth: "",
        teacherNumber: "",
        salary: ""
      };

    const [teacherData, setTeacherData] = useState(initialTeacherData)

    const [errors, setErrors] = useState({})

    const hangleChange = (e) => {
        setTeacherData({
            ...teacherData, 
            [e.target.name] : e.target.value
        })
    }
    
    const validateForm = () =>{
        const {idNumber,title,name,surname,dateOfBirth,teacherNumber} = teacherData

        const newError = {}

        if (!idNumber){
            newError.idNumber = "National ID Number is required";
        }
        if (!title) {
            newError.title = 'Title is required';
        }
        if (!name){
            newError.name = "Name is required";
        }
        if (!surname) {
            newError.surname = 'Surname is required';
        }
        if (!dateOfBirth) {
            newError.dateOfBirth = 'Date of Birth is required';
        }

        const currentDate = new Date();
        const inputDate = new Date(dateOfBirth);
        const age = currentDate.getFullYear() - inputDate.getFullYear();
      
        if (age < 21) {
          newError.dateOfBirth2 = 'Age must be at least 21';
        }

        if (!teacherNumber) {
            newError.teacherNumber = 'Teacher Number is required';
        }
        setErrors(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = async(e) => { 
        e.preventDefault();
        if(validateForm()){
            await axios.post('/api/teachers', teacherData);
            setTeacherData(initialTeacherData)
        }
    }

    return (
        <div className="teach flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <h1 className={`text-4xl text-center m-4 ${pacifico.className}`}>Welcome Teachers</h1>
                <h2 className='text-2xl text-center m-3'>Add Your Info Below</h2>
                <div>
                    <label>
                        National ID Number
                    </label>
                    <input 
                    type="text"
                    name="idNumber" 
                    value={teacherData.idNumber}
                    placeholder="ID Number"
                    onChange={hangleChange}/>
                    {errors.idNumber && <p className="error">{errors.idNumber}</p>}
                </div>
                <div>
                    <label>
                        Title
                    </label>
                    <select 
                     value={teacherData.title} 
                     name='title'
                     onChange={hangleChange}>
                    <option value="">--Select Title--</option>
                    <option value="Mr" key="1">Mr</option>
                    <option value="Mrs" key="2">Mrs</option>
                    <option value="Miss" key="3">Miss</option>
                    <option value="Dr" key="4">Dr</option>
                    <option value="Prof" key="5">Prof</option>
                    </select>
                    {errors.title && <p className="error">{errors.title}</p>}
                </div>
                <div>
                    <label>
                        Name
                    </label>
                    <input 
                    type="text"
                    name='name'
                    value={teacherData.name}
                    placeholder="Name"
                    onChange={hangleChange}/>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>
                        Surname
                    </label>
                    <input
                    type="text"
                    name='surname'
                    value={teacherData.surname}
                    placeholder="Surname"
                    onChange={hangleChange} />
                    {errors.surname && <p className="error">{errors.surname}</p>}
                </div>
                <div>
                    <label>
                        Date of Birth
                    </label>
                    <input
                     type="date"
                     name='dateOfBirth'
                     value={teacherData.dateOfBirth}
                     onChange={hangleChange}
                    />
                    {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
                    {errors.dateOfBirth2 && <p className="error">{errors.dateOfBirth2}</p>}
                </div>
                <div>
                    <label>
                        Teacher Number
                    </label>
                    <input
                     type="text" 
                     name='teacherNumber'
                     value={teacherData.teacherNumber}
                     placeholder="Teacher Number"
                     onChange={hangleChange}/>
                     {errors.teacherNumber && <p className="error">{errors.teacherNumber}</p>}
                </div>
                <div>
                    <label>Salary</label>
                    <input
                     type="text"
                     name="salary"
                     value={teacherData.salary}
                     placeholder="Salary"
                     onChange={hangleChange} />
                </div>
                <div className='flex justify-center items-center mb-7'>
                    <button className='p-4 px-12 bg-blue-500 text-xl font-medium text-center text-white rounded-lg'>Submit</button>
                </div>
            </form>
        </div>
    )
}