import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Rafiul extends Component {
  constructor(props){

  super(props)
 this.state={
    name:"kibria",
    phone:""
  };
  }
 
  stateSet=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
         <>
        <input  value={this.state.name} name="name" onChange={this.stateSet}></input>
        <input name="phone" value={this.state.phone} onChange={this.stateSet} ></input>
        <input name="address" value={this.state.address} onChange={this.stateSet}></input>
        <button>Save</button>
        <Link to={`/omor/${this.state.name}`} >Go to Omor</Link>
        </>
     
    );
  }
}

export default Rafiul;