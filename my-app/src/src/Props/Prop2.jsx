import React from 'react'
class Prop2 extends React.Component{
    movie_Name="Horror"
    type=['2d','3d']
    more_Details={
        dir_Name:"Ram",
        actor:"Prithvi",
        actress:"Roma"
    }
    render(){
        return<div>
            <h1>MOVIE COMPONENT</h1>
            <h3>Movie Name={this.movie_Name}</h3>
            <h3>Selected Type={this.type}</h3>
            <button>Book Tickets</button>

            <ul>
                <li>Crew={this.more_Details.dir_Name}</li>
                <li>Crew={this.more_Details.actor}</li>
                <li>Crew={this.more_Details.actress}</li>
            </ul>
        </div>
    }

}
export default Prop2