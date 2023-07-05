import React, { useState } from 'react'
import './calculator.css'

function Calculator() {
        <input type='button' value='%'className='button'/>
    const [Val , setVal] = useState('')
    const calvalue = (e) =>{
        setVal(Val.concat(e.target.value))
    }
   const clearHandler = () =>{
    setVal('')
   }
   const calculate = () =>{
        setVal(eval(Val).toString())
   }
  return (
    <div className='calc'>
        <input type='text' className='answer' placeholder='0' value={Val}/>
        <input type='button' value='9' className='button' onClick={calvalue}/>
        <input type='button' value='8'className='button'onClick={calvalue}/>
        <input type='button' value='7'className='button'onClick={calvalue}/>
        <input type='button' value='*'className='button'onClick={calvalue}/>
        <input type='button' value='6'className='button'onClick={calvalue}/>
        <input type='button' value='5'className='button'onClick={calvalue}/>
        <input type='button' value='4'className='button'onClick={calvalue}/>
        <input type='button' value='+'className='button'onClick={calvalue}/>
        <input type='button' value='3'className='button'onClick={calvalue}/>
        <input type='button' value='2'className='button'onClick={calvalue}/>
        <input type='button' value='1'className='button'onClick={calvalue}/>
        <input type='button' value='/'className='button'onClick={calvalue}/>
        <input type='button' value='0'className='button'onClick={calvalue}/>
        <input type='button' value='%'className='button'onClick={calvalue}/>
        <input type='button' value='.'className='button'onClick={calvalue}/>
        <input type='button' value='-'className='button'onClick={calvalue}/>
        <input type='button' value='Clear'className='button button1' onClick={clearHandler}/>
        <input type='button' value='='className='button button1' onClick={calculate}/>

    </div>
  )
}

export default Calculator