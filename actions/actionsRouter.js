const express = require('express')
const actions = require("../data/helpers/actionModel")
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({message: "Actions reached successfully"})
})

router.get('/:id', (req, res) => {
    const user = actions.get(req.params.id)
    .then(user => {
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).json({message: "User not found"})
        }
    })
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {
    const user = get(req.params.id)
    .then(user => {
        if(user){
            
        } else {
            res.status(404).json({message: "Specified user was not found"})
        }
    })
    .catch(error => {

    })
})

router.delete('/:id', (req, res) => {
    const user = get(req.params.id)
    .then(user => {
        if(user){
            actions.remove(req.params.id)
        }else {
            res.status(404).json({message: "User not found"})
        }
    })
    .catch(error => {
        res.status(500).json({errorMessage: "Something went wrong. Try accessing at a later time."})
    })
    
})

module.exports = router