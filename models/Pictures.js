const mongoose = require('mongoose')

const PictureSchema = new mongoose.Schema ({
    categoria:{
        type:String,
        required: [true, 'The field name is required'],
        enum: { values: ['Animales', 'Objetos'], message: '{VALUE} only has two categories "Animales" o "Objetos"'}
    },
    url:{
        type:String,
        required: [true, 'The field name is required'],

    },
    name:{
        type:String,
        required: [true, 'The field name is required'],

    }

});

module.exports = mongoose.model('Pictures', PictureSchema);