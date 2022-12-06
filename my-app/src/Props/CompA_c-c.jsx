import React from 'react'
import CompB from './CompB_c-c'
class CompA extends React.Component {
    eid=101;
    ename="Soni"
render() {
    return (
      <div>
        <h2>Component A</h2>
        <CompB one={"GM"} two={"GN"}/>
        </div>
    )
  }
}


export default CompA