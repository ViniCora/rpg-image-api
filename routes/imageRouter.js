import express from 'express';
import controller from '../controller/atributeController.js';
import { atributesModel } from '../models/atributesSchema.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});
const app = express();

app.put('/image/:id',upload.single('playerImage') ,async (req, res) => {
    var path = null;
    if(req.file == null){
        path = '';
    }else{
        path = req.file.path;
    }

    const id = req.params.id;

  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{imagePath : path}},
        { new: true }
      );
      res.send("Imagem atualizada com sucesso");
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  });



export { app as imageRouter };