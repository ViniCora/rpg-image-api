import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const npcSchema = new mongoose.Schema({
  name: { type: String, require: true },
  força: { type: Number, require: true },
  destreza: { type: Number, require: true },
  carisma: { type: Number, require: true },
  inteligencia: { type: Number, require: true },
  resistencia: { type: Number, require: true },
  mira: { type: Number, require: true },
  oficio: { type: Number, require: true },
  percepcao: { type: Number, require: true },
  nascimento: { type: String, require: true },
  oficio_base: { type: String, require: true },
  oficio_pre_base: { type: String, require: true },
  vida: { type: Number, require: true },
  mostrar_tela : { type : Boolean, require: true },
  imagePath: { type: String, require: true },
});

const npcModel = mongoose.model('NPC', npcSchema, 'NPC');

export { npcModel };
