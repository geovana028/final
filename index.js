import express from "express";
import Genero from './models/Genero.js';
import Musica from './models/Musica.js';
import Artista from './models/Artista.js';

const app = express();
const PORT = 3000;



// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 
//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))



app.get("/", (req, res) => {
  res.render("index");
});

//***********************************************************8
//                     Rotas do GENERO
//************************************************************* */
app.get("/genero/lst", async (req, res) => {
  const genero = await Genero.find()
  res.render("genero/lst", {genero});
});

app.get("/genero/add", (req, res) => {
  res.render("genero/add");
});

app.post("/genero/add", async (req, res) => {
  const {nome} = req.body;
  await Genero.create({nome})
  res.render("genero/addok");
});

// EXCLUIR
app.get('/genero/del/:id', async (req, res) => {
  const genero = await Genero.findByIdAndDelete(req.params.id)
  res.redirect("/genero/lst");
});

// EDITAR
app.get('/genero/edt/:id', async (req, res) => {
  const genero = await Genero.findById(req.params.id)
  res.render("genero/edt", {genero})

});
app.post('/genero/edt/:id', async (req, res) => {
  const genero = await Genero.findByIdAndUpdate(req.params.id, req.body)
  res.render("genero/edtok")

}); 











//***********************************************************8
//                     Rotas da MUSICA
//************************************************************* */
app.get("/musica/lst", async (req, res) => {
  const musica = await Musica.find()
  res.render("musica/lst", {musica});
});

app.get("/musica/add", (req, res) => {
  res.render("musica/add");
});

app.post("/musica/add", async (req, res) => {
  const {nome, artista, anoLancamento, duracao} = req.body;
  await Musica.create({nome, artista, anoLancamento, duracao})
  res.render("musica/addok");
});

// EXCLUIR
app.get('/musica/del/:id', async (req, res) => {
  const musica = await Musica.findByIdAndDelete(req.params.id)
  res.redirect("/musica/lst");
});

// EDITAR
app.get('/musica/edt/:id', async (req, res) => {
  const musica = await Musica.findById(req.params.id)
  res.render("musica/edt", {musica})

});

//***********************************************************8
//                     Rotas do ARTISTA
//************************************************************* */

app.get("/artista", async (req, res) => {
  const artista = await Artista.find()
  res.render("artista/lst", {artista});
});

app.get("/artista/add", (req, res) => {
  res.render("artista/add");
});

app.post("/artista/add", async (req, res) => {
  const {nome, pais, anoInicio} = req.body;
  await Artista.create({nome, pais, anoInicio})
  res.render("artista/addok");
});

// EXCLUIR
app.get('/artista/del/:id', async (req, res) => {
  const artista = await Artista.findByIdAndDelete(req.params.id)
  res.redirect("/artista");
});

// EDITAR
app.get('/artista/edt/:id', async (req, res) => {
  const artista = await Artista.findById(req.params.id)
  res.render("artista/edt", {artista})

});
app.post('/artista/edt/:id', async (req, res) => {
  const artista = await Artista.findByIdAndUpdate(req.params.id, req.body)
  res.render("artista/edtok")

}); 










app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
  
