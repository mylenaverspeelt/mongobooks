import mongoose, { mongo } from "mongoose"

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId }, 
    name: { type: String, required: true },
    nationality: { type: String }
}, { versionKey: false }) 


const authorModel = mongoose.model("authors", authorSchema)  

export {authorModel, authorSchema}

//ja que author é um atributo que compõe outra coleçao, tambem precisa exportar o schema pra conseguir fazer a referencia no modelo da coleção que usa ele (book)