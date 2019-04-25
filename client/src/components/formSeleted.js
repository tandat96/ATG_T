import React, { Component } from 'react';
import { connect } from "react-redux";
import {deleteProfile,updateProfile} from '../actions'

class FormSeleted extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleDelete =()=> {
        this.props.deleteProfile(this.props.profile._id)
    }
    handleUpdate =()=> {
        this.props.updateProfile(this.props.profile._id)
    }
    render() { 
        const { profile } = this.props
        return ( 
            <div style={{display:this.state.profilesOld.isCompleted ? 'none' : 'block' }}>
            <div className="row">
              <div className="col-6">
                <input className="form-control" type="text" placeholder="First Name" name="firstName" defaultValue={profile.firstName} onChange={ this.handleInputChange } />
                <input className="form-control" type="text" placeholder="Email" name="email" defaultValue={profile.email} onChange={ this.handleInputChange }/>
                <input className="form-control" type="text" placeholder="Telephone" name="telephone" defaultValue={profile.telephone} onChange={ this.handleInputChange }/>
              </div>
              <div className="col-6">
                <input className="form-control" type="text" placeholder="Last Name" name="lastName" defaultValue={profile.lastName} onChange={ this.handleInputChange }/>
                <input className="form-control" type="text" placeholder="ID number" name="idNumber" defaultValue={profile.idNumber} onChange={ this.handleInputChange }/>
                <input className="form-control" type="text" placeholder="Address" name="address" defaultValue={profile.address} onChange={ this.handleInputChange }/>
              </div>
            </div>
            <div className="row btn-row">
              <button type="button" className="col-4 btn btn-info">SAVE</button>
              <button type="button" className="col-4 btn btn-warning" onClick={this.handleUpdate}>CHANGE</button>
              <button type="button" className="col-4 btn btn-danger" onClick={this.handleDelete}>DELETE</button>
            </div>
            </div>
         );
    }
}
export default connect(null, { deleteProfile,updateProfile})(FormSeleted)
