import React, { Component } from 'react';
import { connect } from "react-redux";
import {getProfiles} from '../actions'
import Profile from './profile';

class ItemProfile extends Component {
    componentDidMount() {
        this.props.getProfiles()
    }
    render() { 
        const { profiles } = this.props
        return ( 
            <tbody>
                  
                  { 
                    profiles.map(profile => <Profile key={profile._id} profile={profile} />)
                }
                </tbody>
         );
    }
}
const mapStateToProps = (state) => ({
    profiles: state.profiles,
})
 
export default connect(mapStateToProps, { getProfiles })(ItemProfile)
