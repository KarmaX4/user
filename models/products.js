const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"Please make entry"]
        },
        age:{
            type: String,
            required: true,
            default:0
        },
        postion:{
            type: String,
            required: true,
            default:0
        },
        image:{
            type: String,
            required: true,
            default:0
        },
    },
     {
        timestamps: true
    }
)

const Product  =  mongoose.model('Product',productSchema)

module.exports = Product;