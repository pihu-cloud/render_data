import React, { useState } from 'react'

const Assignment = () => {

const[name,setname] = useState("");
const[age,setage] = useState("");
const[dept,setdept] = useState("");
const[data,setdata] = useState([]);
const handelchange = (e) => {
    const {name,value} = e.target;
    if (name==='name'){
        setname(value);
    }
    if (name==='age'){
        setage(value);
    }
    if (name==='dept'){
        setdept(value);
    }
  
    // console.log("Given Name is:", name);
    // console.log("Given Value is:", value);
}

const handelclick = () =>{
    const obj = {
        name : name,
        age : age,
        dept : dept 
    }
    setdata([...data,obj]);
}




  return (
    <div>
        Name<br></br><input type='text' name='name' value={name} onChange={handelchange} placeholder='enter name'/><br />
        Age<br></br><input type='text' name='age' value={age} onChange={handelchange} placeholder='enter age'/><br></br>
        Department<br></br><input type='text' name='dept' value={dept} onChange={handelchange} placeholder='enter department'/><br></br>
        <button onClick={handelclick}>Submit</button>

       { data.map((element,index) => (
            
            <p key={index}>Name: {element.name},Age: {element.age} ,  Department: {element.dept}</p>

        ))}
    </div>
  )
}

export default Assignment