import axios from 'axios'
import {
    ADD,
    GETS,
    LOADS,
    DELETE,
    UPDATE,
    COMPLETE
} from './constants'

axios.defaults.baseURL = 'http://localhost:4000'

export const getProfiles = () => (dispatch) => {
    dispatch({ type: LOADS })
    
    axios.get('/')
        .then(res => dispatch({
            type: GETS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const addProfile = (firstName,lastName,email,idNumber,telephone,address) => (dispatch) => {
    axios.post('/', {firstName,lastName,email,idNumber,telephone,address})
        .then(res => dispatch({
            type: ADD,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

export const deleteProfile = (profileId) => dispatch => {
    axios.post(`/${profileId}`)
    .then(res => dispatch({
        type: DELETE,
        payload: res.data.profileId
    }))
    .catch(error => console.log(error))
}
export const updateProfile = (profileId) => dispatch => {
    axios.post(`/${profileId}`)
    .then(res => dispatch({
        type: UPDATE, 
        payload: res.data
      }))
    .catch(error => console.log(error))
}

export const completeProfile = (profileId) => dispatch => {
    axios.post(`/${profileId}/complete`)
    .then(res => dispatch({
        type: COMPLETE,
        payload: res.data.profileId
    }))
    .catch (error => console.log(error))
}