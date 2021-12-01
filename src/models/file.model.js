const {Schema, model} = require("mongoose")

const fileSchema = new Schema({
    product:{type:String, required:true},
    price:{type:Number, required:false},
    image_url:[{type:String, required:true},]
},{
    versionKey:false,
    timestamps: true
})
module.exports = model("img", fileSchema)