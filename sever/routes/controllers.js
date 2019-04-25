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
const updateItem = async (req, res, next) => {
    // const { firstName,lastName, email,idNumber,telephone,address} = req.body
    // try {
    //     const Profile = await Profile.findById(req.params.profileId,
            
    //         )
    //     await newProfile.save()
    //     return res.json(newProfile)
    // } catch (error) {
    //     console.log(error)
    // }
    // try {
    //     await Profile.findByIdAndUpdate(req.params.profileId)
    //     return res.json({ profileId: req.params.profileId })
    // } catch (err) {
    //     console.log(err)
    // }
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

module.exports={create,getAll,deleteItem,updateItem,complete}