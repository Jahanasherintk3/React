import React from 'react'
class Prop1 extends React.Component{  //class component used
    message="Good Morning"
    ename="Rahul Gandhi"
    empl_sal="sharghant"
    render(){
        return<div>
            <h1>Message Component</h1>
            <hr/>
            <h3>Employee Name:{this.ename}</h3>
            <h3>Message:{this.message}</h3>
            <h3>Empl Sal:{this.empl_sal}</h3>

        </div>
    }
}
export default Prop1;