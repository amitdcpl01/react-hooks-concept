import React, {useCallback, useState} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
const [age, setAge] = useState(25);
const [salary, setSalary] = useState(50000);

const increamentAge = useCallback(()=>{
    setAge(age + 1)
},[age])

const increamentSalary = useCallback(()=>{
    setSalary(salary + 1000)
},[salary])

    return (
        <div>
           <Title></Title>
           <Count text="Age" count={age} ></Count> 
           <Button handleClick={increamentAge}>Increament Age</Button>
           <Count text="Salary" count={salary}></Count>
           <Button handleClick={increamentSalary}> Increament Salary</Button>
            
        </div>
    )
}

export default ParentComponent
