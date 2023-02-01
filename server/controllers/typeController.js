const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req,res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req,res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async deleteById(req,res,next) {
        // const {id} = req.query
        // if (!id) {
        //     return next(ApiError.badRequest('Id not specified!'))
        // }

    }

}

module.exports = new TypeController()