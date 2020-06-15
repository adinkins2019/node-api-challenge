const express = require("express")
const projects = require("../data/helpers/projectModel")
const router = express.Router()



router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {
    const user  = projects.get(req.params.id)
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
    if (req.body.name && req.body.description){
        const project = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        }
        projects.insert(project)

    } else {
        res.status(400).join({message: "Invalid data"})
    }
})

router.put('/:id', (req, res) => {
    const user = projects.get(req.params.id)
    .then(user => {
        if(user){
            const updatedProject = projects.update(req.params.id, {
                name: req.body.name,
                description: req.body.description,
                completed: req.body.completed
            })
            res.json(updatedProject)
        }
        else {

        }
    })
    .catch(error => {
        res.status(500).json({errorMessage: "An error has occurred. Please try again at a later time."})
    })
})

router.delete('/:id', (req, res) => {
    const user = projects.get(req.params.id)
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