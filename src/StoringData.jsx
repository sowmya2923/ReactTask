import React,{useState} from 'react'

export default function StoringData() {
    const [name,setName]=useState("React")
    const [year,setyear]=useState(2008)
    const [mySelf,setMySelf]=useState({name:"Sowmya",age:25,gender:"female"})
  return (
    <div>
      <h1>From Storing Data</h1>
      <p>{name}{year}</p>
      <p>Name:{mySelf.name} Age:{mySelf.age}</p>
    </div>
  )
}

