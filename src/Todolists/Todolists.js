import React, { useState } from 'react'

function Todolists() {
    const [Temp , SetTemp] = useState('')
    const [Add , SetAdd] = useState([])
    const handleChange = (e) =>{
       SetTemp(e.target.value)
        console.log(Temp)
    }
    const clickHandle = () =>{
        SetAdd([...Add , Temp])
        console.log(Add)
    }
    const handleDelete = (int) =>{
        let filtered = Add.filter((ele,index)=>{
            return index!==int
        })
            SetAdd (filtered)
     
    }
  return (
    <div>
        <h1>Todo List</h1>
        <input type='text' onChange={handleChange}></input>
        <button onClick={clickHandle} >Add</button>
        <ol>
            {
                Add.map((i,indexes)=>{
                    return(
                        <>
                        <li>{i}</li>
                        <button onClick={()=>handleDelete(indexes)}>Delete</button>
                        </>
                    )
                })
            }
        </ol>
    </div>
  )
}

export default Todolists