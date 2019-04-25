import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {

        super(props);
        this.state = { 
            name:props.firstName +' '+props.lastName
         }
    }
    handleSeleted = () =>{
        this.props.completeProfile(this.props.profile._id)
    }
    render() { 
        const { profile } = this.props

        return ( 
            <tr onClick={()=>this.handleSeleted()} className={profile.isCompleted ? 'checked' :  ''}>
                <td>{this.state.name}</td>
                <td>{profile.email}</td>
                <td>null....</td>
                <td>{profile.createdAt}</td>


            </tr>
         );
    }
}
 
export default Profile;