import React, { Component } from 'react'
import { Grid ,Cell } from 'react-mdl';

class Education extends Component{
    render(){
    return(
        <div>
           <Grid>
              <Cell col={4}>
              <p style ={{marginTop:'0px',fontFamily:'Ubuntu'}}>{this.props.startYear}-{this.props.endYear}</p>
              </Cell> 
              <Cell col={8}>
                <h4 style ={{marginTop:'0px',fontFamily:'Ubuntu'}}>{this.props.degree}</h4>
                <p>{this.props.university}</p>
                <p>{this.props.school}</p>
                <p>Percentage:{this.props.per}</p>
                <hr style={{borderTop:'3px solid blue'}}></hr>
              </Cell>
           </Grid>
        </div>
     );
    }
}

export default Education;