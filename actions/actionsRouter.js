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
    .catch(error => {
        res.status(500).json({errorMessage: "An error has occurred. Please try again at a later time."})
    })
})

router.post('/', (req, res) => {
    if(req.body.project_id && req.body.description && req.body.notes){
        const action = {project_id: req.body.project_id, description: req.body.description, notes: req.body.notes, completed: req.body.completed}
        actions.insert(action)
    } else {
        res.status(400).json({message: "Invalid data"})
    }

})

router.put('/:id', (req, res) => {
    const user = actions.get(req.params.id)
    .then(user => {
        if(user){
            const updatedActions = actions.insert(req.params.id, {
                project_id: req.body.project_id,
                description: req.body.description,
                notes: req.body.notes,
                complete: req.body.completed
            })
            res.json(updatedActions)
        } else {
            res.status(404).json({message: "Specified user was not found"})
        }
    })
    .catch(error => {
        res.status(500).json({errorMessage: "A server error has occurred. Please try again at a later time."})
    })
})

router.delete('/:id', (req, res) => {
    const user = actions.get(req.params.id)
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