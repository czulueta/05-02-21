const express = require("express")
const authorRouter = express.Router()
const Author = require("../models/author.js")

authorRouter.get("/", (req, res, next) => {
    Author.find((err, authors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})
authorRouter.post("/", (req, res, next) => {
    const newPost = new Author(req.body)
    newPost.save((err, savedAuthor) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})

module.exports = authorRouter