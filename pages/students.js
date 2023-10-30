import axios from 'axios';
import { Pacifico } from 'next/font/google';
import { useState } from 'react';
const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })

export default function Students(){

        const initialStudentData = {
            idNumber: "",
            name: "",
            surname: "",
            dateOfBirth: "",
            studentNumber: ""
          };
    
        const [studentData, setStudentData] = useState(initialStudentData)
    
        const [errors, setErrors] = useState({})
    
        const hangleChange = (e) => {
            setStudentData({
                ...studentData, 
                [e.target.name] : e.target.value
            })
        }
        
        const validateForm = () =>{
            const {idNumber,name,surname,dateOfBirth,studentNumber} = studentData;
    
            const newError = {}
    
            if (!idNumber){
                newError.idNumber = "National ID Number is required";
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
          
            if (age > 22) {
              newError.dateOfBirth2 = 'Age must not be over 22';
            }
    
            if (!studentNumber) {
                newError.studentNumber = 'Student Number is required';
            }
            setErrors(newError);
            return Object.keys(newError).length === 0;
        }
    
        const handleSubmit = async(e) => { 
            e.preventDefault();
            if(validateForm()){
                await axios.post('/api/students', studentData);
                setStudentData(initialStudentData)
            }
        }
    return (
        <div className="student flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <h1 className={`text-4xl text-center m-4 ${pacifico.className}`}>Welcome Students</h1>
                <h2 className='text-2xl text-center m-3'>Add Your Info Below</h2>
                <div>
                    <label>
                        National ID Number
                    </label>
                    <input 
                    type="text"
                    name="idNumber" 
                    value={studentData.idNumber}
                    placeholder="ID Number"
                    onChange={hangleChange}
                    />
                    {errors.idNumber && <p className="error">{errors.idNumber}</p>}
                </div>
                <div>
                    <label>
                        Name
                    </label>
                    <input 
                    type="text"
                    name='name'
                    value={studentData.name}
                    placeholder="Name"
                    onChange={hangleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>
                        Surname
                    </label>
                    <input
                    type="text"
                    name='surname'
                    value={studentData.surname}
                    placeholder="Surname"
                    onChange={hangleChange}
                    />
                    {errors.surname && <p className="error">{errors.surname}</p>}
                </div>
                <div>
                    <label>
                        Date of Birth
                    </label>
                    <input
                     type="date"
                     name='dateOfBirth'
                     value={studentData.dateOfBirth}
                     onChange={hangleChange}
                     />
                    {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
                    {errors.dateOfBirth2 && <p className="error">{errors.dateOfBirth2}</p>}
                </div>
                <div>
                    <label>
                        Student Number
                    </label>
                    <input
                     type="text" 
                     name='studentNumber'
                     value={studentData.studentNumber}
                     placeholder="Student Number"
                     onChange={hangleChange}
                     />
                     {errors.studentNumber && <p className="error">{errors.studentNumber}</p>}
                </div>
                <div className='flex justify-center items-center mb-7'>
                    <button className='p-4 px-12 bg-blue-500 text-xl font-medium text-center text-white rounded-lg'>Submit</button>
                </div>
            </form>
        </div>
    )
}