import axios from "axios"
import { useEffect, useState } from "react";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })

export default function List({option}){
        const [teachers, setTeachers] = useState([]);
        const [students, setStudents] = useState([]);

        useEffect(() => {
            axios.get("/api/teachers")
            .then(response => {
                setTeachers(response.data)
            })

            axios.get("/api/students")
            .then(response => {
                setStudents(response.data)
            })
        }, [])
    
        if(option === 'teachers'){
            return (
                <div className="w-full h-2/4 my-24 bg-white">
                  <h2 className={`${pacifico.className} text-center text-3xl py-6`}>List of Teachers</h2>
                  <ul className="px-4 py-3 text-lg">
                  {teachers.map(teacher => (
                    <li key="" className="border-y-2 py-3 pl-5">{teacher.name} {teacher.surname}</li>
                  ))}
                  </ul>
                </div>
            )
        }else if(option === 'students'){
            return (
                <div className="w-full h-2/4 my-24 bg-white">
                  <h2 className={`${pacifico.className} text-center text-3xl py-6`}>List of Students</h2>
                  <ul className="px-7 py-6 text-lg">
                  {students.map(student => (
                    <li key="" className="border-y-2 py-3 pl-5">{student.name} {student.surname}</li>
                  ))}
                  </ul>
                </div>
            )
        }
}