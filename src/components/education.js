import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import photo from '../img/logo-lowes.png';

class Education extends Component {
   render() {
      return (
         <div>
            <Grid>

               <Cell col={2}>
                  <img src={photo} style={{ top: '10%', height: '80px', border: '3px solid white', width: '80px', borderRadius: '50%' }} />
               </Cell>
               <Cell col={8}>
                  <h4 style={{ marginTop: '0px', fontFamily: 'Ubuntu' }}>{this.props.degree}</h4>
                  <p>{this.props.university}</p>
                  <p>{this.props.school}</p>
                  <p>Percentage:{this.props.per}</p>
                  <hr style={{ borderTop: '3px solid blue' }}></hr>
               </Cell>
               <Cell col={2}>
                  <p style={{ marginTop: '0px', fontFamily: 'Ubuntu' }}>{this.props.startYear}-{this.props.endYear}</p>
               </Cell>
            </Grid>
         </div>
      );
   }
}

export default Education;