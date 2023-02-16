import React from 'react'
import CompB from './CompB'
let CompC =()=>{
        let ename="Good Morning"

    return(<div>
        <h1>Component C</h1>
        <hr/>
        <CompB one={"GM"} emp name={ename} />
    </div>)
    
}
export default CompC;