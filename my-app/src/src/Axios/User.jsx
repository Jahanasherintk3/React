import React, { Component } from 'react'
import { Axios } from 'axios';
class User extends Component {
    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            this.setState({users:response.data})
        })
        .catch(()=>{})
    }
    render() {
    return (
      <div>
        <h2>User</h2>
        <div className="contaner" mt-5>
            <div className="row">
                <pre>{JSON.stringify(this.state.users)}</pre>
                {
                    this.state.users.length>0?
                    <React.Fragment>
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead className='bg-dark taxt white'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Id</th>
                                        <th>Salary</th>
                                        
                                    </tr>
                                </thead>
                                    <tbody>
                                        {
                                            this.state.users.map((user)=>{
                                                return <tr>
                                                    <td>{user.name}</td>
                                                    <td>{user.id}</td>
                                                    <td>{user.salary}</td>
                                                    </tr>
                                            })
                                        }
                                    </tbody>
                            </table>
                        </div>
                    </React.Fragment>:null
                   

                }
                
            </div>
        </div>
        
        
      </div>
    )
  }
}

export default User