import React from 'react'

function Title() {
    console.log('Rendering Title')
    return (
        <div>
           <h2>UseCallback hook</h2> 
        </div>
    )
}

export default React.memo(Title)
//using React.momo component will be render only if state or property is change
