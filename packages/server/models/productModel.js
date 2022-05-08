import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true},
    rating: { type: Number, required: true},
    comment: { type: String, required: true},
}, {
    timestamps: true
})


const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
  
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
    },
    Reviews: [reviewSchema],
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    }
}, {
    timestamps: true

})

const Product = mongoose.model('Product', productSchema)

export default Product