import React, { Component } from 'react';
import { connect } from "react-redux";
import {completeProfile} from '../actions'


class Profile extends Component {
    constructor(props) {

        super(props);
        this.state = { 
         }
    }
    handleSeleted = () =>{
        this.props.completeProfile(this.props.profile._id)
    }
    render() { 
        const { profile } = this.props
         const full= {name: profile.firstName +' '+profile.lastName } 
        return ( 
            <tr onClick={()=>this.handleSeleted()} className={profile.isCompleted ? 'bg-dark text-white' :  ''}>
            
                <td>{full.name}</td>
                <td>{profile.email}</td>
                <td>null....</td>
                <td>{profile.createdAt}</td>


            </tr>
         );
    }
}
const mapStateToProps = (state) => ({
    profiles: state.profiles,
})
export default connect(mapStateToProps, {completeProfile})(Profile)