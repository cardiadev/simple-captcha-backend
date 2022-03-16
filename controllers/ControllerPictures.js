
const Model = require('../models/Pictures');

const nameModel = 'Picture';

const saludar = ( req, res ) => {
     res.status(200).send({msg: 'Todo bien'});
}

const create = async ( req, res ) => {

     const newModel = new Model( { ...req.body } );

     const result = await newModel.save();

     if( !result ) return res.status(400).send({ success: false, msg: `${nameModel} was not created` })

     res.status(200).send( { success: true, result: { newModel } ,msg: `${nameModel} was created` } )

}

const getAll = async(req, res) => {
    const all = await Model.find();
    res.status(200).send({all})
}

const generatePictures = async ( req, res ) => {
     //traer todo
     let picturesRes = [];
     let nombresRes = []
     const categorias = [ 'Animales', 'Objetos' ];
     const categoria = categorias[ Math.floor( Math.random() * categorias.length ) ];
     
     const pictures = await Model.find( { categoria } );

     if(!pictures) return res.status(200).send({ success: true })

     //de manera random seleccionar 4 imagenes random de todas, validar que no se repita alguno que ya es

     let iterador = 0;
     while(iterador < 4) {
          const randomImg = Math.floor(Math.random() * pictures.length);

          let bandera = nombresRes.includes( pictures[randomImg].name );
          console.log(bandera);
          if( !bandera ){
               nombresRes.push( pictures[randomImg].name );
               picturesRes.push( pictures[randomImg] );
               iterador++;
          }
     }

     const randomSelec = Math.floor(Math.random() * pictures.length);
     const correcto = picturesRes[ Math.floor(Math.random() * picturesRes.length) ];

     res.status(200).send( { success: true,  result: picturesRes , categoria, msg: 'Imagenes entregadas correctamente', length: picturesRes.length, correcto  } );
}

module.exports = {
     saludar,
     create,
     getAll,
     generatePictures
}