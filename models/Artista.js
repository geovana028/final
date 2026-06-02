import conexao from "../config/conexao.js";

const ArtistaSchema = new conexao.Schema({
  nome: String,
  pais:String,
  artista:String,
  anoInicio:Number
});

const Musica = conexao.model("Musica", MusicaSchema);

export default Musica;