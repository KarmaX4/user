const Product = require('../models/products')
module.exports = {

        addUser : async(req, res) => {
            try {
                const product = await Product.create(req.body)
                res.status(200).json({ message: `Successfully Created new Data`})
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message })
            }
        },

        updateUser : async (req, res) => {
            try {
                const { id } = req.params
                const product = await Product.findByIdAndUpdate(id, req.body)
                if (!product) {
                    return res.status(400).json({ message: `No Data Found With this ID: ${id}` })
                }
                res.status(200).json({ message: `Data for ID: ${id} has been Updated` })
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message })
            }
        },

        removeUser: async (req, res) => {
            try {
                const { id } = req.params
                const product = await Product.findByIdAndDelete(id)
                if (!product) {
                    return res.status(400).json({ message: `No Data Found With this ID: ${id}` })
                }
                res.status(200).json({ message: `Data for ID: ${id} has been Delelted` })
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message })
            }
        },

        getUsers :  async (req, res) => {
            try {
                const product = await Product.find({})
                res.status(200).json(product)
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message })
            }
        },

        getUser: async (req, res) => {
            try {
                const { id } = req.params
                const product = await Product.findById(id)
                res.status(200).json({product})
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: error.message })
            }
        }

}