import React, { Component } from 'react';
import { connect } from "react-redux";
import {addProfile} from '../actions'


class Form extends Component {
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handleSubmit = () => {
        if (this.state.firstName.trim() && this.state.lastName.trim() && this.state.idNumber.trim() && this.state.telephone.trim()) {
          const {firstName,lastName,email,idNumber,telephone,address}= this.state
          this.props.addProfile(firstName,lastName,email,idNumber,telephone,address)
        }
        this.handleReset();
      };
    
      handleReset = () => {
        this.setState({
        firstName : '',
        lastName  : '',
        email  : '',
        idNumber : '',
        telephone  : '',
        address  : '',
        });
      };
      
    render() { 
        return ( 
            <form action method="post" className="form-info">
            <div className="row">
              <div className="col-6">
                <input className="form-control" type="text" name="firstName" placeholder="First Name" onChange={ this.handleInputChange } />
                <input className="form-control" type="text" name="email" placeholder="Email" onChange={ this.handleInputChange }/>
                <input className="form-control" type="text" name="telephone" placeholder="Telephone" onChange={ this.handleInputChange }/>
              </div>
              <div className="col-6">
                <input className="form-control" type="text" name="lastName" placeholder="Last Name" onChange={ this.handleInputChange }/>
                <input className="form-control" type="text" name="idNumber" placeholder="ID number" onChange={ this.handleInputChange }/>
                <input className="form-control" type="text" name="address" placeholder="Address" onChange={ this.handleInputChange }/>
              </div>
            </div>
            <div className="row btn-row">
              <button type="button" className="col-4 btn btn-info" onClick={(e)=>{e.preventDefault();this.handleSubmit()}}>SAVE</button>
              <button type="button" className="col-4 btn btn-warning">CHANGE</button>
              <button type="button" className="col-4 btn btn-danger">DELETE</button>
            </div>
          </form>
          
          
         );
    }
}
 
export default connect(null,{ addProfile })(Form)
