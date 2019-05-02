const Profile = require('../models/models')

const create = async (req,res,next) => {
    const { firstName,lastName, email,idNumber,telephone,address} = req.body
    try {
        const newProfile = new Profile({
            firstName,lastName, email,idNumber,telephone,address
        })
        await newProfile.save()
        return res.json(newProfile)
    } catch (error) {
        console.log(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const profiles = await Profile.find()
        
        console.log(profiles)
        
        return res.json(profiles)
    } catch (err) {
        console.log(err)
    }
}

const deleteItem = async (req, res, next) => {
    try {
        const profile = await Profile.findById(req.params.profileId)
        await profile.remove()
        return res.json({ profileId: req.params.profileId })
    } catch (err) {
        console.log(err)
    }
}


const editById = async (req,res,next) => {

    try {
        const profile = await Profile.findById(req.params.profileId)
        profile.firstName = req.body.firstName
        profile.lastName = req.body.lastName
        profile.email = req.body.email
        profile.idNumber = req.body.idNumber
        profile.telephone = req.body.telephone
        profile.address = req.body.address
        await profile.save()
        return res.json(profile)
    } catch (err) {
        console.log(err)
    }
}
const complete = async (req, res, next) => {
    try {
        const profile = await Profile.findById(req.params.profileId)
        profile.isCompleted = !profile.isCompleted
        await profile.save()
        return res.json({ profileId: req.params.profileId })
    } catch (err) {
        console.log(err)
    }
}

module.exports={create,getAll,deleteItem,editById,complete}