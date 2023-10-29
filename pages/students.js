export default function Students(){
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
                        Student Number
                    </label>
                    <input
                     type="text" 
                     name='teacherNumber'
                     value={teacherData.teacherNumber}
                     placeholder="Teacher Number"
                     onChange={hangleChange}/>
                     {errors.teacherNumber && <p className="error">{errors.teacherNumber}</p>}
                </div>
                <div className='flex justify-center items-center mb-7'>
                    <button className='p-4 px-12 bg-blue-500 text-xl font-medium text-center text-white rounded-lg'>Submit</button>
                </div>
            </form>
        </div>
    )
}