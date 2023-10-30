import { Pacifico,  Bungee_Outline } from 'next/font/google';
import { useState } from 'react';

const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })
  const bungee = Bungee_Outline({
    weight: '400',
    subsets: ['latin'],
  })


export default function School(){

    const [option, setOption] = useState('');
    return(
        <div className="school flex flex-col justify-center items-center">
            <h1 className={`flex justify-center flex-col text-white text-center text-6xl tracking-widest mt-7 ${pacifico.className}`}>
                <span>Welcome</span>
                        to
                <span className={bungee.className}>SchInfo</span>
            </h1>
            <div className='w-2/4'>
                <select 
                value={option}
                onChange={(e) => setOption(e.target.value)}>
                    <option value="" key="">--Select Option--</option>
                    <option value="teachers" key="10">Teachers</option>
                    <option value="students" key="12">Students</option>
                </select>
            </div>
            
        </div>
    )
}