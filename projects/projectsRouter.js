const express = require("express")
const projects = require("../data/helpers/projectModel")
const router = express.Router()



router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {
    const user  = projects.get(req.params.id)
    
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
    
})

module.exports = router