import { Pacifico } from 'next/font/google';
import { useState } from 'react';
const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })

export default function Teachers(){

    const [teacherData, setTteacherData] = useState({
        idNumber: "",
        title: "",
        name: "",
        surname: "",
        dateOfBirth: "",
        teacherNumber: 0,
        salary: ""

    })

    const [errors, setErrors] = useState({})

    const hangleChange = (e) => {
        setTteacherData({
            ...teacherData, 
            [e.target.name] : e.target.value
        })
    }
    
    const validateForm = () =>{
        const {idNumber,title,name,surname,dateOfBirth,teacherNumber} = teacherData

        const newError = {}

        if (!idNumber){
            newError.idNumber = "National ID Number is required"
        }
        if (!name.trim()){
            newError.name = "Name is required"
        }
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

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
                </div>
                <div>
                    <label>
                        Title
                    </label>
                    <select value={teacherData.title} name='title'>
                    <option value="Mr" key="">Mr</option>
                    <option value="Mrs" key="">Mrs</option>
                    <option value="Miss" key="">Miss</option>
                    <option value="Dr" key="">Dr</option>
                    <option value="Prof" key="">Prof</option>
                    </select>
                </div>
                <div>
                    <label>
                        Name
                    </label>
                    <input 
                    type="text"
                    name='name'
                    value={teacherData.name}
                    placeholder="Name"/>
                </div>
                <div>
                    <label>
                        Surname
                    </label>
                    <input
                    type="text"
                    name='surname'
                    value={teacherData.surname}
                    placeholder="Surname" />
                </div>
                <div>
                    <label>
                        Date of Birth
                    </label>
                    <input
                     type="date"
                     name='dateOfBirth'
                     value={teacherData.dateOfBirth}
                    />
                </div>
                <div>
                    <label>
                        Teacher Number
                    </label>
                    <input
                     type="number" 
                     name='teacherNumber'
                     value={teacherData.teacherNumber}
                     placeholder="Teacher Number"/>
                </div>
                <div>
                    <label>Salary</label>
                    <input
                     type="text"
                     name="salary"
                     value={teacherData.salary}
                     placeholder="Salary" />
                </div>
            </form>
        </div>
    )
}